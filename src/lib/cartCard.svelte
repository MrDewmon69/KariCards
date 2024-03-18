<script lang="ts">
	import { checkout } from '../routes/checkout';

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
