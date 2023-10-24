<style scoped>	
	footer {
		margin-top: 150px;
	}
	.container p {
		font-size: 14px;
		color: #c2c2c2;
	}
	.container	{
		display: flex;
		justify-content: space-between;
		/* margin-top: 100px; */
		max-width: 1600px;
		padding: 50px;
		width: 100%;
		margin: 0 auto;
	}

	@media screen and (max-width: 450px) {
		.container p {
			font-size: 11px;
			/* padding: 00px; */
		}
		.container {
			padding: 20px;
		}
	}

</style>

<template>
	<footer>
		<div class="container">
			<p>Email@email.com</p>
			<p>All Rules @ 2023</p>
			<p>Contact Us</p>			
			
		</div>
		

	</footer>


</template>