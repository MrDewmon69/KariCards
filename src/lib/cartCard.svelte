<script lang="ts">
	import { checkout } from '../routes/checkout';

	export let cart: CartItem = { id: '', quantity: 0 };
	let cartTotal = cart.quantity * 5;
	let products = [{ id: 'price_1OvFjE2MseMXRN7KYuirW3so', name: 'Game' }];
	function getProductById(productId: string) {
		return products.find((product) => product.id === productId);
	}
</script>

<div class="cart-body">
	<h2 class="cart-content">{getProductById(cart.id)?.name}</h2>
	<h2 class="cart-content">Quantity: {cart.quantity}</h2>
	<p id="cart-total">
		Total: ${cartTotal}
	</p>
</div>

<footer>
	<button class="checkout-button" on:click={() => checkout()}>Checkout</button>
</footer>

<style>
	@import './cartCard.scss';
</style>
