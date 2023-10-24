<script setup lang="ts">


</script>

<template> 
	<!-- <h1>test</h1> -->
	<WebGL />
	<Header />
	<Welcome />
	<Description/>
	<Employees/>

	<Cards />
	<Footer/>
</template>


<style  >
	.contain {
		max-width: 1700px;
		padding: 10px;
		margin: 0 auto;
	}
	body::-webkit-scrollbar {
  		width: 7px;               /* width of the entire scrollbar */
	}

	body::-webkit-scrollbar-track {
		background: rgba(125, 81, 0, 0.361);        /* color of the tracking area */
	}

	body::-webkit-scrollbar-thumb {
		background-color: rgb(34, 25, 0);    /* color of the scroll thumb */
		border-radius: 20px;       /* roundness of the scroll thumb */
		/* border: 3px solid orange;  creates padding around scroll thumb */
	}
	body {
		overscroll-behavior: none;
		background-color: #000;
	}
	* {
		font-family: Monserrat;
		margin: 0;
		box-sizing: border-box;
		color: #fff;
		padding: 0;
	}
	@font-face {
		font-weight: 400;
		font-family: Borel;
		src: url("../assets/fonts/Borel-Regular.ttf");
	}
	@font-face {
		font-weight: 400;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Regular.ttf");
	}
	@font-face {
		font-weight: 500;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Medium.ttf");
	}
	@font-face {
		font-weight: 600;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Bold.ttf");
	}
	@font-face {
		font-weight: 800;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Black.ttf");
	}
	@font-face {
		font-weight: 300;
		font-family: Monserrat;
		src: url("../assets/fonts/Raleway-Light.ttf");
	}

 


</style>