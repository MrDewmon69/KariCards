<script lang="ts">
	let businessName: string = 'KāriCards';
</script>

<body>
	<header>
		<p class="logo-text">{businessName}</p>
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
