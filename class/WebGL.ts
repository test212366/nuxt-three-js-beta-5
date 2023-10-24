	
	import * as THREE from 'three'
	import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
	import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
	import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader' 
	// import GUI from 'lil-gui'
	import gsap from 'gsap'
	//@ts-ignore
	import fragmentShader from '../shaders/fragment.frag';
 	//@ts-ignore
	import vertexShader from '../shaders/vertex.vert'

	//@ts-ignore
	import ob1 from '../assets/block.glb'

	import matcap from '../assets/matcap.png'
 
	

	//@ts-ignore
	import vertexShaderFire from '../shaders/vertexFire.vert'
	//@ts-ignore

	import fragmentShaderFire from '../shaders/fragmentFire.frag'
	//@ts-ignore
	import fragmentShaderBratt from '../shaders/fragmentBratt.frag'



	//@ts-ignore

	import vertexShaderBox from '../shaders/vertexBox.vert'


	//@ts-ignore

	import fragmentShaderBox from '../shaders/fragmentBox.frag'

	//@ts-ignore


	import vertexShaderFot from '../shaders/vertexShaderFot.vert'


	//@ts-ignore


	import fragmentShaderFot from '../shaders/fragmentShaderFot.frag'
	// import {EffectComposer} from 'three/examples/jsm/postprocessing/EffectComposer'
	// import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass'
	// import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass'
	// import {GlitchPass} from 'three/examples/jsm/postprocessing/GlitchPass'
 
	import { createNoise2D } from 'simplex-noise'
	const noise2D = createNoise2D()

	class Point {
		position: any
		originalPos: any
		originalMehs: any
		index: any
		originalMehx: any
		mesh: any
		constructor(x:any,y: any, mesh: any, index: any) {
			this.position = new THREE.Vector2(x,y)
			this.originalPos = new THREE.Vector2(x,y)
			this.originalMehs = mesh
			this.index = index
	
			this.originalMehx = mesh.position.x
	
	 
		}
	
		update(mouse:any) {
	
			let mouseForce = this.originalPos.clone().sub(mouse)
			let distance = mouseForce.length()
			let forceFactor = 1/Math.max(distance, 0.2)
			let positionToGo = this.originalPos.clone().sub(mouseForce.normalize().multiplyScalar(-distance * 0.2 * forceFactor))
			
			
			this.position.lerp(positionToGo, 0.1)
	
	
	
	
			let posArray = this.originalMehs.geometry.attributes.position.array
			posArray[this.index * 3] = this.position.x - this.originalMehx
			posArray[this.index * 3 + 1] = this.position.y
			this.originalMehs.geometry.attributes.position.needsUpdate = true 
	
	
		}
	}
	// import './extend'q
	// console.log(test, '312')
 	export class WebGLScene {
		scene: any
		container: any
		width: any
		height: any
		renderer: any
		renderTarget: any
		camera: any
		controls: any
		time: number
		dracoLoader: any
		gltf: any
		isPlaying: boolean
		//@ts-ignore
		gui: GUI 
		imageAspect!: number
		material: any
		geometry: any
		plane: any
		dummy:any
		instanced:any
		  material2: any
		  objects: any
		  materialFire: any
		  bratt: any
		  gr: any
		  matts: any
		  number: any
		  materialBox: any
		  meshes: any
		  geometryBox: any
		  box: any
		  materialFoot: any
		  meshesf: any
		  points: any
		  testMesh: any
		  debugmesh: any
		  mouse: any
		  raycaster: any
			group: any
		
		constructor(options: any) {
			
			this.scene = new THREE.Scene()
			this.dummy = new THREE.Object3D()
			this.group = new THREE.Group()

			this.container = options.dom
			
			this.width = this.container.offsetWidth
			this.height = this.container.offsetHeight
			this.raycaster = new THREE.Raycaster()
		this.mouse = new THREE.Vector2()
			
			// // for renderer { antialias: true }
			this.renderer = new THREE.WebGLRenderer({ antialias: true })
			this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
			this.renderTarget = new THREE.WebGLRenderTarget(this.width, this.height)
			this.renderer.setSize(this.width ,this.height )
			this.renderer.setClearColor(0xeeeeee, 1)
			this.renderer.useLegacyLights = true
			this.renderer.outputEncoding = THREE.sRGBEncoding
	

			
			this.renderer.setSize( window.innerWidth, window.innerHeight )

			this.container.appendChild(this.renderer.domElement)
	


			// this.camera = new THREE.PerspectiveCamera( 70,
			// 	this.width / this.height,
			// 	0.01,
			// 	1000
			// )
			const fs = 15
			const aspect = this.width / this.height
			// this.camera = new THREE.OrthographicCamera(fs * aspect / - 2, fs * aspect / 2, fs / 2, fs / -2, -1000, 1000)

			this.camera = new THREE.PerspectiveCamera(13, this.width / this.height, 1, 100)
	
			// this.camera.position.set(-2, 8, 23) 
			this.camera.position.set(1, 3, 10) 

			this.controls = new OrbitControls(this.camera, this.renderer.domElement)
			this.time = 0


			this.dracoLoader = new DRACOLoader()
			this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/')
			this.gltf = new GLTFLoader()
			this.gltf.setDRACOLoader(this.dracoLoader)

			this.isPlaying = true

			this.addObjects()		 
			this.resize()
			this.render()
			this.setupResize()
			this.addLights()
			if(this.width > 1000) {
				this.addFire()
				this.addBox()
				this.addFooter()
				this.setupPoints()
				this.mouseEvents()
			}
		 
		}
		settings() {
			let that = this
		 
			this.settings = {
					//@ts-ignore
				progress: 0
			}
			//@ts-ignore
			this.gui = new GUI()
			this.gui.add(this.settings, 'progress', 0, 1, 0.01)
		}

	setupResize() {
		window.addEventListener('resize', this.resize.bind(this))
	}

	resize() {
		this.width = this.container.offsetWidth
		this.height = this.container.offsetHeight
		this.renderer.setSize(this.width, this.height)
		this.camera.aspect = this.width / this.height


		this.imageAspect = 853/1280
		let a1, a2
		if(this.height / this.width > this.imageAspect) {
			a1 = (this.width / this.height) * this.imageAspect
			a2 = 1
		} else {
			a1 = 1
			a2 = (this.height / this.width) / this.imageAspect
		} 


		this.material.uniforms.resolution.value.x = this.width
		this.material.uniforms.resolution.value.y = this.height
		this.material.uniforms.resolution.value.z = a1
		this.material.uniforms.resolution.value.w = a2

		this.camera.updateProjectionMatrix()



	}
	addFire() {
		this.number = 15
		const geometryFireGeometry = new THREE.PlaneGeometry(1,1).rotateX(Math.PI /2)
		this.materialFire = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				resolution: {value: new THREE.Vector4()},
				level: {value: 0},
				black: {value: 0}


			},
			transparent: true,
			vertexShader: vertexShaderFire,
			fragmentShader: fragmentShaderFire
		})
		this.bratt = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				resolution: {value: new THREE.Vector4()},
				level: {value: 0},
				black: {value: 0}


			},
			transparent: true,
			vertexShader: vertexShaderFire,
			fragmentShader: fragmentShaderBratt
		})
		this.gr = new THREE.Group()

		this.gr.position.y = -0.5

 

		this.matts = []

		for (let i = 0; i <= this.number; i++) {
			let level = i / this.number
			let m0 = this.materialFire.clone()
			let m1 = this.materialFire.clone()

			this.matts.push(m0)
			this.matts.push(m1)

			m0.uniforms.black.value = 1
			m1.uniforms.black.value = 0
			m0.uniforms.level.value = level
			m1.uniforms.level.value = level
 

			let mesh = new THREE.Mesh(geometryFireGeometry, m0)
			let mesh1 = new THREE.Mesh(geometryFireGeometry, m1)
			mesh1.position.y = level - 0.005

			mesh.position.y = level

			if(i == this.number) {
				mesh1.position.y = level - 1 / this.number
			}

			this.gr.add(mesh)
			this.gr.add(mesh1)

		}
		let mesh2 = new THREE.Mesh(new THREE.PlaneGeometry(6,6), this.bratt).rotateX(Math.PI / 2)
		mesh2.position.y = 1.
		
		this.gr.add(mesh2)
		this.gr.position.z = -55
		this.gr.position.y = -21
		this.gr.position.x = -8
		this.gr.rotation.y = 2
		this.gr.rotation.x = .3


		if(this.width < 750) this.gr.position.x = -6
		if(this.width < 550) this.gr.position.x = -5.5



		this.gr.scale.set(7,7,7)



		this.scene.add(this.gr)
	}
	addBox() {
		let that = this
		this.materialBox = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader: vertexShaderBox,
			fragmentShader: fragmentShaderBox
		})
		this.meshes = []
		let count =  3 * 8
		let random  = new Float32Array(count ** 3)
		let depth  = new Float32Array(count ** 3)
		let pos  = new Float32Array( 3 * count ** 3)
		
		this.geometryBox = new THREE.BoxGeometry(1,1, 1)
		this.box = new THREE.InstancedMesh(this.geometryBox, this.materialBox, count ** 3)
		
		let transform = new THREE.Object3D()
		let ii = 0
		let jj = 0

		for (let i = 0; i < count; i++) {
			for (let j = 0; j < count; j++) {
				for (let k = 0; k < count; k++) {
					transform.position.set(i - count / 2, j - count / 2, k - count / 2)
					transform.updateMatrix()
					random[ii] = Math.random()
					depth[ii] = j/count
					pos[jj] = i / count
					jj++
					pos[jj] = j / count
					jj++
					pos[jj] = k / count
					jj++
					this.box.setMatrixAt(ii ++, transform.matrix)
					
				}
			 
			}
			
		}
		  
		this.geometryBox.setAttribute('random', new THREE.InstancedBufferAttribute(random, 1))
		this.geometryBox.setAttribute('depth', new THREE.InstancedBufferAttribute(depth, 1))
		this.geometryBox.setAttribute('pos', new THREE.InstancedBufferAttribute(pos, 3))
		this.box.scale.set(0.15,0.15,0.15)
		this.box.position.z = -50
		this.box.position.y = -12
		this.box.position.x = -7.5

		if(this.width < 750) this.box.position.x = -5.5
		if(this.width < 550) this.box.position.x = -5


		this.scene.add(this.box)
	 
	}

	async addObjects() {
		let that = this
		this.material = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
				uMatcap: {value: new THREE.TextureLoader().load(matcap)},
				resolution: {value: new THREE.Vector4()}
			},
			vertexShader,
			fragmentShader
		})
		 
 
 



		// this.scene.add(fig)


		let {scene: children} = await this.gltf.loadAsync(ob1)
	 
		let geo1 = children.children[0].geometry
		//
		// geo1.position.x = 1
 
		// geo1.psoi
		
		let rows = 40

		if(this.width < 1500) rows = 32
		if(this.width < 1000) rows = 30


		const count = rows * rows

		let random = new Float32Array(count)



		this.instanced = new THREE.InstancedMesh(geo1, this.material, count )

 

		let index = 0
 
		for (let i = 0; i <= rows; i +=2 ) {
			for (let j = 0; j <= rows; j += 2) {
				if(this.width < 1000) {
					random[index] = Math.random();

					this.dummy.position.set(j - rows / 2, -4.1, i - rows / 2);
					this.dummy.updateMatrix();
					this.instanced.setMatrixAt(index++, this.dummy.matrix);
	 
				} else {
					const distanceToCenter = Math.sqrt((j - rows / 2) ** 2 + (i - rows / 1.7) ** 2 );

			// Если расстояние больше, чем радиус дыры, то создаем инстанс
					if (distanceToCenter > 5) {
						random[index] = Math.random();

						this.dummy.position.set(j - rows / 2, -4.1, i - rows / 2);
						this.dummy.updateMatrix();
						this.instanced.setMatrixAt(index++, this.dummy.matrix);
					}
				}
				 

				// const rand = Math.ceil(Math.random() * 3) + 1
				// console.log(rand)
				// if(rand === 2) random[index] = Math.random() 
				// random[index] = Math.random() 

				// this.dummy.position.set( j - rows / 2,  0  , i - rows / 2 )
				// this.dummy.updateMatrix()
				// this.instanced.setMatrixAt(index++, this.dummy.matrix)

			}
			
		}

		this.instanced.instanceMatrix.needsUpdate = true


		this.instanced.geometry.setAttribute('aRandom', new THREE.InstancedBufferAttribute(
			random, 1
		))
			

 
		this.instanced.position.z = -40
		this.instanced.position.x = -12
			
		
		if(this.width < 750) this.instanced.position.x = -10 
		if(this.width < 550) this.instanced.position.x = -9.5 

 

		this.instanced.scale.set(1,9,1,)

 
		

 
		this.scene.add(this.instanced)

 
 
	}
	addFooter() {
		let uTexture = new THREE.TextureLoader().load(matcap)
		this.materialFoot = new THREE.ShaderMaterial({
			extensions: {
				derivatives: '#extension GL_OES_standard_derivatives : enable'
			},
			side: THREE.DoubleSide,
			uniforms: {
				time: {value: 0},
	 			uTexture: {value: uTexture},
				progress: {value: 0},
				resolution: {value: new THREE.Vector2(this.width, this.height)}
			},
			vertexShader: vertexShaderFot,
			fragmentShader:fragmentShaderFot
		})
		
 
		// this.plane = new THREE.Mesh(this.geometry, this.material)
 
		// this.scene.add(this.plane)
		this.meshesf = []

		let min = -5
		let max = 6
		if(this.width < 1450) {
			min = -2
			max = 2
		}

		for (let i = -5; i < 6; i++) {
			let geometry = new THREE.PlaneGeometry(1,2.5,1,1)
			let m  = this.materialFoot.clone()
			m.uniforms.uTexture.value = uTexture
			m.uniforms.progress.value = i / 2

			let p = new THREE.Mesh(geometry, m)
			p.position.x = i
			p.position.y = -5
			p.userData.position = i
			
			this.meshesf.push(p)
			this.scene.add(p)
		}

	}
	setupPoints() {
		this.points = []
		// for (let i = 0; i < 4; i++) {
		// 	let x = Math.random() * 2 - 1
		// 	let y = Math.random() * 2 - 1
		// 	let p = new Point(x,y)

		// 	this.points.push(p)
		// 	this.scene.add(p.mesh)
			
		// }
 
		this.meshesf.forEach((m:any) => {
	 
			
			let posArray = m.geometry.attributes.position.array

			for (let i = 0; i < posArray.length; i += 3) {
				let x = posArray[i] + m.position.x
				let y = posArray[i + 1]
				let r1 = 0.3 * noise2D(x,y)
				let r2 = 0.3 * noise2D(x,y)

				let p = new Point( x + r1,y + r2,m, i /3  )
				this.points.push(p)
				// this.group.add(p.mesh)
				this.scene.add(p.mesh)

				
			}
		})
 
	}
	mouseEvents() {
		this.testMesh = new THREE.Mesh(
			new THREE.PlaneGeometry(10, 10),
			new THREE.MeshBasicMaterial({color: 0xff0000})
		)
 
		window.addEventListener('mousemove', (e) => {
			this.mouse.x = (e.clientX / this.width) * 2 - 1
			this.mouse.y = - (e.clientY / this.height) * 2 + 1

			this.raycaster.setFromCamera(this.mouse, this.camera)

			const intersects = this.raycaster.intersectObjects([this.testMesh]) 

			if(intersects.length > 0) {
				this.mouse.x = intersects[0].point.x
				this.mouse.y = intersects[0].point.y
			 

			}



		}, false)

		window.addEventListener('scroll', () => {
			const scrollY = window.scrollY / 690

		 
			 
				this.meshesf.forEach((m:any) => {
					 
					m.position.y = scrollY / 1.5 -5
					m.material.uniforms.progress.value = m.position.x / 2
	
				})
	 

			// console.log(scrollY)
		})

		// this.scene.add(this.testMesh)
	 

	}
	addLights() {
		const light1 = new THREE.AmbientLight(0xeeeeee, 0.5)
		this.scene.add(light1)
	
	
		const light2 = new THREE.DirectionalLight(0xeeeeee, 0.5)
		light2.position.set(0.5,0,0.866)
		this.scene.add(light2)
	}

	stop() {
		this.isPlaying = false
	}

	play() {
		if(!this.isPlaying) {
			this.isPlaying = true
			this.render()
		}
	}

	render() {
			if(!this.isPlaying) return

			this.time += 0.05
			this.material.uniforms.time.value = this.time 
			if(this.materialBox) {
				this.box.rotation.x = this.time / 20
				this.box.rotation.y = this.time / 20

				this.materialBox.uniforms.time.value = this.time
			} 
			if(this.matts) this.matts.forEach((m:any) => {
					m.uniforms.time.value = this.time
				})
			if(this.materialFoot) this.materialFoot.uniforms.time.value = this.time
			//this.renderer.setRenderTarget(this.renderTarget)
			this.renderer.render(this.scene, this.camera)
			// this.updateGeo()
			if(this.points) this.points.forEach((p:any) => {
						p.update(this.mouse)
					})
			//this.renderer.setRenderTarget(null)
	
			requestAnimationFrame(this.render.bind(this))
		}
 
	}
 
 