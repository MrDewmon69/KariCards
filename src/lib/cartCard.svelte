<script lang="ts">
	import { get } from 'svelte/store';
	import { cartItems } from '../cartManager';

	async function checkout() {
		await fetch('../routes/api/stripeCheckout', {
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

	export let cart: CartItem = { id: '', quantity: 0 };

	let products = [{ id: 'price_1OvFjE2MseMXRN7KYuirW3so', name: 'Game' }];

	function getProductById(productId: string) {
		return products.find((product) => product.id === productId);
	}
</script>

<div>
	<h2>{getProductById(cart.id)?.name}</h2>
	<h2>{cart.quantity}</h2>
</div>

<footer>
	<button class="checkout-button" on:click={() => checkout()}>Checkout</button>
</footer>
