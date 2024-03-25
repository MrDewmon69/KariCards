<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';
	import BannerLand from '$lib/assets/imgs/landscape.jpg';
	import Header from '$lib/header.svelte';
	import { onMount } from 'svelte';

	const products: Product[] = [
		{
			id: 'price_1OvFjE2MseMXRN7KYuirW3so',
			name: 'Game',
			price: 5
		}
	];

	let businessName: string = 'KāriCards';

	function buttonClick() {
		window.location.href = './product';
	}
</script>

<body>
	<nav>
		<Header />
	</nav>
	<main>
		<div class="banner">
			<img src={BannerLand} alt="A nice landscape" id="banner-img" />
			<button id="product-button" on:click={buttonClick}>Buy now</button>
		</div>
		<div class="product">
			{#each products as product}
				<ProductCard {product} />
			{/each}
		</div>
	</main>
</body>

<style>
	@import './style.scss';
</style>
