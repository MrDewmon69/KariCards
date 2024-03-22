<script lang="ts">
	import Header from '$lib/header.svelte';
	import groupPhoto from '$lib/assets/imgs/group_photo.png';

	let businessName: string = 'KāriCards';
</script>

<nav>
	<Header />
</nav>

<main>
	<div class="img">
		<!-- Group image -->
		<img src={groupPhoto} alt="Our Business Group" id="group-photo" />
	</div>
	<div class="content">
		<p>
			Hello we are {businessName} and we are a Young Enterprise Scheme Company.
		</p>
	</div>
	<!-- Explain who we are as a group and what sell... -->
</main>

<style>
	@import './about.scss';
</style>
