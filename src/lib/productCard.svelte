<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart } from '../cartManager';
	export let product: Product = { id: '', name: '', price: 0 };

	let cart = get(cartItems);
	let cartIndex = cart.findIndex((item) => {
		return item.id === product.id;
	});
	let cartProduct = cart[cartIndex];
	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartIndex = cart.findIndex((item) => {
			return item.id === product.id;
		});
		cartProduct = cart[cartIndex];
	});

	console.log(product);
</script>

<div class="card">
	<div class="card-header"><h2>{product.name}</h2></div>
	<div class="card-body">Price: ${product.price}</div>
	{#if cartProduct !== undefined}
		<div class="card-body">
			Quantity: <strong>{cartProduct.quantity}</strong>
		</div>
	{/if}

	<footer>
		<button
			on:click={() => {
				addToCart(product.id);
			}}>Add to cart</button
		>
		<button
			on:click={() => {
				removeFromCart(product.id);
			}}>Remove from cart</button
		>
	</footer>
</div>

<style>
	@import './productCard.scss';
</style>
