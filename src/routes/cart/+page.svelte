<script lang="ts">
	import Header from '$lib/header.svelte';
	import CartCard from '$lib/cartCard.svelte';
	import { get } from 'svelte/store';
	import { cartItems } from '../../cartManager';

	let cartContents = get(cartItems);
</script>

<body>
	<nav>
		<Header />
	</nav>

	<main class="cart-content">
		{#each cartContents as cart}
			<CartCard {cart} />
		{/each}
	</main>
</body>

<style>
	/* @import './style.scss'; */
</style>
