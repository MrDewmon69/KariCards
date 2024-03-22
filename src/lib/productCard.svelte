<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems, addToCart, removeFromCart } from '../cartManager';
	import card_game_img from '$lib/assets/imgs/card_game.jpg';
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
	<a href="/product">
		<img class="card-img" src={card_game_img} alt="Card Game" />
		<div class="card-header"><h2>{product.name}</h2></div>
		<div class="card-body">Price: ${product.price}</div>
		<div class="product-desc">It's the card game</div>
		{#if cartProduct !== undefined}
			<div class="card-body">
				Quantity: <strong>{cartProduct.quantity}</strong>
			</div>
		{/if}
	</a>
	<footer>
		<button
			on:click={() => {
				addToCart(product.id);
			}}
			id="add-to-cart">Add to cart</button
		>
		<button
			on:click={() => {
				removeFromCart(product.id);
			}}
			id="remove-from-cart">Remove from cart</button
		>
	</footer>
</div>

<style>
	@import './productCard.scss';
</style>
