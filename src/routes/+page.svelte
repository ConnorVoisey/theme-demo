<script lang="ts">
	import ComponentHero from './componentHero.svelte';
	import ComponentRegister from './componentRegister.svelte';
	import ComponentWhy from './componentWhy.svelte';
</script>

<ComponentHero />
<hr />
<ComponentWhy />
<hr class="before-form" />
<ComponentRegister />

<style lang="scss">
	:root {
		--page-width: 900px;
	}
	.before-form {
		margin: size(32) 0;
	}
</style>
