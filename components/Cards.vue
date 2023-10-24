<style scoped>

	section {
		display: flex;
		align-items: center;
		height: 100vh;
		flex-direction: column;
	}
	.cards__title {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	.cards__title h5 {
		font-size: 20px;
		text-align: center;
		margin-bottom: 20px;
	}
	.cards__title p {
		font-size: 14px;
		max-width: 360px;
		text-align: center;
		color: #dadada;
		margin-bottom: 100px;
	}


	.card {
		max-width: 400px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		padding: 40px;
		margin: 10px;
		border-radius: 35px;
		background-color: rgba(0, 0, 0, 0.189);
		-webkit-backdrop-filter: blur(3px);
		backdrop-filter: blur(3px);
	}
	.card p:first-child {
		margin-bottom: 20px;
		font-weight: 500;
	}
	.card p:last-child {
		font-size: 13px;
		line-height: 20px;
		color: #dadada;
		text-align: center;
	}
	.cards {
		display: flex;
	}
	@media screen and (max-width: 850px) {
		.cards {
			flex-direction: column;
		}
	}
	@media screen and (max-width: 600px) {
		.card {
			max-width: unset;
		}
	}
</style>


<template> 
	<section class="contain">
		<div class="cards__title">
			<h5>Cards Title</h5>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Lorem ipsum dolor sit amet. </p>

		</div>
		<div class="cards">
			<div class="card">
				<p>Card Title</p>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab maxime molestiae mollitia. Consequuntur, itaque voluptates.</p>
			
			</div>
			<div class="card">
				<p>Card Title</p>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab maxime molestiae mollitia. Consequuntur, itaque voluptates.</p>
			
			</div>
			<div class="card">
				<p>Card Title</p>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab maxime molestiae mollitia. Consequuntur, itaque voluptates.</p>
			
			</div>

		</div>
	</section>
</template>


<script>

</script>