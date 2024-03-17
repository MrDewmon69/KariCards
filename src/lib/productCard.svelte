<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart } from '../cart';
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
	{#if cartProduct !== undefined}
		<div class="card-body px-4">
			Quantity: <strong>{cartProduct.quantity}</strong>
		</div>
	{/if}
	<div class="card-body px-4">Price: ${product.price}</div>

	<footer class="card-footer">
		<button class="p-2 rounded variant-glass-primary" on:click={() => addToCart(product.id)}
			>Add to Cart</button
		>
		<button class="p-2 rounded variant-glass-error" on:click={() => removeFromCart(product.id)}
			>Remove from Cart</button
		>
	</footer>
</div>
