<script lang="ts">
	import ProductCard from '$lib/productCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../cart';

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
</script>

<div class="container flex justify-center items-center h-screen w-screen" style="width: 100vw">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1>SvelteKit 1.0 Store</h1>
		</div>
		{#each products as product}
			<ProductCard {product} />
		{/each}
		<div class="col-span-3">
			<button
				class="btn variant-filled-primary
			"
				on:click={() => checkout()}>Checout with stripe API</button
			>
		</div>
	</div>
</div>
