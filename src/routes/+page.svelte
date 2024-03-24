<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../cartManager';
	import Header from '$lib/header.svelte';

	const products: Product[] = [
		{
			id: 'price_1OvFjE2MseMXRN7KYuirW3so',
			name: 'Game',
			price: 5
		}
	];

	async function checkout() {
		await fetch('api/stripeCheckout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ items: get(cartItems) })
		})
			.then((data) => {
				return data.json();
			})
			.then((data) => {
				data.url;
				window.location.replace(data.url);
			});
	}

	let businessName: string = 'KāriCards';
</script>

<body>
	<nav>
		<Header />
	</nav>
	<main>
		{#each products as product}
			<ProductCard {product} />
		{/each}
	</main>

	<p>buy our product please!!!</p>
</body>
