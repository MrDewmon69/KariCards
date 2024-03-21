<script lang="ts">
	// let businessName: string = 'KāriCards';
	import businessIcon from '$lib/assets/imgs/main_logo.png';
</script>

<body>
	<header>
		<img src={businessIcon} alt="The KāriCards business logo" id="business-icon" />
		<nav>
			<ul class="nav-links">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</nav>
		<a class="cta" href="/cart"><button>Checkout</button></a>
	</header>
</body>

<style>
	@import './header.scss';
</style>
