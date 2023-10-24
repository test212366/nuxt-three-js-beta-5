<style scoped>
	.wrapper {
		max-width: 1700px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		padding: 30px 10px;
		font-weight: 500;
		/* font-size: 20px; */
		letter-spacing: .8px;
		align-items: center;		
	}
	header {
		background-color: rgba(0, 0, 0, 0.189);
		-webkit-backdrop-filter: blur(3px);
		backdrop-filter: blur(3px);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
	}
	header ul {
		display: flex;

	}
	header li {
		margin-right: 40px;
		list-style: none;
		font-weight: normal;
		font-size: 13px;
	}
	header li:last-child {
		margin-right: 0;
	}
	.menu__burger {
		display: none;
	}

	@media screen and (max-width: 850px) {
		.wrapper {
			padding: 20px 10px;
		}
	}


	@media screen and (max-width: 600px) {
		nav {
			display: none;

		}
		.menu__burger {
			display: flex;
			/* justify-content: space-between; */
			/* align-items: end; */
			flex-direction: column;
		}
		.menu__burger > div:first-child {
			margin-top: 0;
		}
		.menu__burger > div {
			width: 24px;
			height: 2px;
			margin-top: 5px;
			background-color: #dcdcdc;
		}
		.wrapper > div:first-child {
			font-size: 12px;

		}
	}
</style>



<template>
	<header>
		<div class="wrapper">
			<div>
			CreaFis
			</div>
			<div class="menu__burger">
				<div></div>
				<div></div>
				<div></div>

			</div>
			<nav>	
				<ul>
					<li>
						Home
					</li>
					<li>
						Contacts
					</li>
					<li>
						Contacts
					</li>
					<li>
						Contacts
					</li>
				</ul>
			</nav>
		</div>
		 

	</header>


</template>


<script>	



</script>