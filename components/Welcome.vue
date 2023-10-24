<style scoped>
	h1 {
		/* font-family: Borel; */
		margin-top: 300px;
		font-weight: 600;
		letter-spacing: 1.2px;
		line-height: 45px;
		font-size: 34px;
		text-align: end;
	}
	section {
		justify-content: end;
		max-width: 1700px;
		padding: 10px;
		margin: 0 auto;
		height: 100vh;
		display: flex;
		position: relative;
	}
	@font-face {
		font-weight: 400;
		font-family: Borel;
		src: url("../assets/fonts/Borel-Regular.ttf");
	}
	.welcome__description p{
		margin-top: 50px;
		line-height: 24px;
		text-align: end;
		color: #dadada;
		max-width: 700px;
	}
	.mini-desc {
		position: absolute;
		left: 20px;
		bottom: 140px;
		font-size: 15px;
		background: linear-gradient(108deg, #0037ff 0%, rgb(253, 0, 0) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-family: Borel;
	}
	@media screen and (max-width: 1000px) {
		.mini-desc {
	 
			bottom: 50px;
		 
		}
		.welcome__description p{
			margin-top: 20px;
		}
		.welcome__description h1 {
			font-size: 20px;
			margin-top: 240px;
			line-height: 35px;
		}
		.welcome__description p {
			font-size: 12px;
			/* line-height: 35px; */
		}
		.mini-desc {
			max-width: 400px;
			/* text-align: end; */
			font-size: 13px;
		}	
	}

 
</style>


<template>

	<section>
		<div class="welcome__description">
			<h1>Worem ipsum dolor sit amet <br/> consectetur  adipisicing elit.<br/> Dolores, nobis.</h1>
			<p>Worem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem sed quibusdam porro veniam ratione, rerum nam praesentium nostrum deleniti facilis harum quidem necessitatibus dolore reprehenderit, dicta eos nihil eveniet suscipit!</p>
		</div>
		<p class="mini-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, officia?</p>
	</section>

</template>


<script>


</script>