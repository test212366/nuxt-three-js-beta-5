
<style scoped>
	section {
		height: 100vh;
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	section h4 {
		margin-top: 100px;
		margin-bottom: 30px;
		font-size: 16px;
		font-weight: 500;
		line-height: 22px;
		text-align: center;
		max-width: 400px;
	}
	.desc-text-double {
		display: flex;
		margin-top: 100px;
		width: 100%;
		justify-content: space-between;
		
	}
	.desc-text-double p {
		font-size: 14px;
		line-height: 20px;
		max-width: 600px;
		color: #dadada;

		margin-bottom: 15px;
	}
	.last p {
		text-align: end;
	}



	@media screen and (max-width: 850px) {
		.desc-text-double {
			margin: 0 10px;
			/* display: flex; */
			flex-direction: column;
			align-items: center;
		}
		.desc-text-double > div {
			padding: 20px;
			border-radius: 25px;
			background-color: rgba(0, 0, 0, 0.189);
			/* margin-bottom: 100px; */
			/* -webkit-backdrop-filter: blur(3px);
			backdrop-filter: blur(3px); */
		}
		.desc-text-double p {
			color: #fff;
			/* font-weight: normal; */
		}
		.last {
			margin-top: 50px;
		}
	}
</style>


<template>
	<section class="contain">

		<h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, delectus!</h4>
		<div class="desc-text-double">
			<div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, id. Cum quaerat in tenetur odit asperiores eaque iusto pariatur minima at veniam? Quod doloremque tempore aperiam voluptatem inventore sit similique.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, id. Cum quaerat in tenetur odit asperiores eaque iusto pariatur minima at veniam? Quod doloremque tempore aperiam voluptatem inventore sit similique.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, id. Cum quaerat in tenetur odit asperiores eaque iusto pariatur minima at veniam? Quod doloremque tempore aperiam voluptatem inventore sit similique.
				</p>
			</div>
			<div class="last">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, id. Cum quaerat in tenetur odit asperiores eaque iusto pariatur minima at veniam? Quod doloremque tempore aperiam voluptatem inventore sit similique.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, id. Cum quaerat in tenetur odit asperiores eaque iusto pariatur minima at veniam? Quod doloremque tempore aperiam voluptatem inventore sit similique.
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, id. Cum quaerat in tenetur odit asperiores eaque iusto pariatur minima at veniam? Quod doloremque tempore aperiam voluptatem inventore sit similique.
				</p>
			</div>
			
			
			
		</div>
	</section>


</template>


<script>


</script>