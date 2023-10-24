<style scoped>

	.container {
	
		position: relative;
		margin: 20px 0;
		margin-bottom: 200px;
		/* max-width: 1600px; */
		/* margin: 0 auto; */
		/* padding: 0 50px; */
		/* width: 100%; */
		/* margin-bottom: 200px; */
	}
	.slider__item {
		flex-direction: column;
		align-items: center;
		padding: 40px;
		display: flex;
		justify-content: center;

	}
	.slider__item p {
		margin-top: 20px;
		font-weight: 500;
		color: #dadada;
	}
	.slider__item p:last-child {
		font-size: 12px;
		margin-top: 5px;
		color: #828282;
	}
	.slider__item img {
		width: 250px;
		border-radius: 45px;
	}
	.container h6 {
		font-size: 30px;
		text-align: center;
		font-weight: 500;
		margin: 40px 0;
		color: #fff;
	}
	.descripton__emp {
		max-width: 800px;
		margin: 0 auto;
		text-align: center;
		font-size: 14px;
		line-height: 22px;
		margin-top: 50px;
		color: #dadada;

	}
	
	@media screen and (max-width: 1000px) {
		.descripton__emp {
			font-size: 12px;
		}
		.container {
			margin-top: 100px;
		}
	}

	@media screen and (max-width: 880px) {
		.slider__item img{
			width: 200px;
		}
		.descripton__emp {
			padding: 0 40px;
			width: 100%;
		}
	}
	@media screen and (max-width: 540px) {
		.container {
			margin-top: 200px;
		}
	}
	@media screen and (max-width: 450px) {
		.container h6 {
			font-size: 25px;
			margin-bottom: 0px;
		}
		.slider__item p {
			font-size: 14px;
			
		}
		.slider__item img {
			width: 160px;
		}
		.descripton__emp {
			font-size: 11px;
			line-height: 20px;
		}
	}
	@media screen and (max-width: 420px) {
		.container {
			margin-top: 350px;
		}
	}
	@media screen and (max-width: 400px) {
		.slider__item p {
			font-size: 12px;
			
		}
	}
	@media screen and (max-width: 350px) {
		.container {
			margin-top: 550px;
		}
	}
</style>


<template> 

	<section class="container">
		<h6>
			Employees
		</h6>

		<Swiper
			:modules="[SwiperAutoplay, SwiperEffectCreative]"
			:slides-per-view="2"
			:loop="true"
			:breakpoints="{ 1500:{ slidesPerView:5, }, 650: {slidesPerView: 3}, 1050: {slidesPerView:4} }"
			:autoplay="{
				delay: 8000,
				disableOnInteraction: true,
			}"
			:creative-effect="{
				prev: {
				shadow: false,
				translate: ['-20%', 0, -1],
				},
				next: {
				translate: ['100%', 0, 0],
				},
			}"
		>
		<SwiperSlide v-for="slide in 10" :key="slide">
			<div class="slider__item">
				<img src="https://cdna.artstation.com/p/assets/images/images/055/242/694/large/emelianov-iurii-12122222-a-girl-with-purple-hair-tattoos-on-her-face-like-padme-8e018518-858c-41eb-aeda-2dc3fb84e2a1.jpg?1666470084" alt="employPic">
				<p>Nikita Zmanovskiy</p>
				<p>Mr.Director</p>
				<!-- <strong>{{ slide }}</strong> -->
			</div>
		
		</SwiperSlide>
	</Swiper>


		<p class="descripton__emp">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam rem maiores reiciendis laudantium a cupiditate esse, sit provident voluptatum expedita, quos tenetur porro vero dolor veniam sapiente officiis delectus harum ad, est ducimus repellat! Vero, error numquam distinctio consequatur, sed sunt impedit tempora doloremque minima consectetur officia maiores autem accusantium corporis temporibus. Explicabo dolore reiciendis fuga accusamus? Nulla, quis provident.</p>

	</section>


</template>


<script>
	// :effect="'creative'"


</script>