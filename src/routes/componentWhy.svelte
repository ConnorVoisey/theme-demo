<script>
	import ComponentGrid from './componentGrid.svelte';
</script>

<section id="why">
	<h3 class="title">Why another CSS approach?</h3>

	<div class="card-group">
		<div class="card">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><path
					d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
				/></svg
			>
			<h4 class="subtitle">Consistency</h4>
			<p>This library aims to make your styling consistent across your site.</p>
		</div>
		<div class="card" style="--clr: hsl(var(--clr-secondary-5))">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><path
					d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z"
				/></svg
			>
			<h4 class="subtitle">Adapting to change</h4>
			<p>Designs change. Making these changes should not be complex or unpredictable.</p>
		</div>
		<div class="card" style="--clr: hsl(var(--clr-success-5))">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><path
					d="M18.25 17C18.25 17.88 18.07 18.74 17.71 19.53H16.31C17.71 17.15 16.91 14.09 14.53 12.69C13.76 12.24 12.89 12 12 12C9.24 12 7 9.76 7 7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7H15.75C15.75 4.93 14.07 3.25 12 3.25C9.93 3.25 8.25 4.93 8.25 7C8.25 9.07 9.93 10.75 12 10.75C15.45 10.75 18.25 13.56 18.25 17M6.29 19.53C5.93 18.74 5.75 17.87 5.75 17H7C7 17.93 7.25 18.79 7.69 19.53H6.29M18.25 20.75V22H5.75V20.75H9.5V15.75H8.25V14.5H15.75V15.75H14.5V20.75H18.25M13.25 15.75H10.75V20.75H13.25V15.75M14.44 7.07C14.4 8.4 13.33 9.47 12 9.5C10.62 9.46 9.53 8.32 9.57 6.94C9.6 5.61 10.67 4.53 12 4.5C13.38 4.54 14.47 5.68 14.44 7.07M13.25 7C13.25 6.31 12.69 5.75 12 5.75C11.31 5.75 10.75 6.31 10.75 7C10.75 7.69 11.31 8.25 12 8.25C12.69 8.25 13.25 7.69 13.25 7Z"
				/></svg
			>
			<h4 class="subtitle">It's simple</h4>
			<p>Reduced complexity by using CSS as it's designed to be used.</p>
		</div>
	</div>
</section>
<ComponentGrid />

<style lang="scss">
	section {
		@include content-width;
		padding-top: size(32);
	}
	h3 {
		margin-bottom: size(8);
	}
	.card {
		max-width: size(64);
		margin: 0 auto;
		padding: size(8);
		--clr: hsl(var(--clr-primary-5));
		.subtitle {
			position: relative;
			margin-bottom: size(4);
		}
		svg {
			padding: size(8);
			padding-top: size(4);
			width: 100%;
			max-width: size(64);
			margin: auto;
			display: block;
		}
		.subtitle:after {
			@include pseudo;
			border-bottom: solid 3px var(--clr);
			transform: scaleX(0);
			transition: transform 250ms ease-in-out;
		}

		&:hover {
			.subtitle:after {
				transition-delay: 150ms;
			}
			.subtitle:after {
				transform: scaleX(1);
			}
			svg {
				fill: var(--clr);
			}
		}

		svg,
		.subtitle {
			transition: all 235ms ease-in-out;
		}
		@media (max-width: 900px) {
			padding: size(4);
		}
	}

	.card-group {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: size(16);
		& > * {
			flex: 1 0 0;
		}
		@media (max-width: 750px) {
			gap: size(8);
		}
		@media (max-width: 550px) {
			gap: size(8);
			grid-template-columns: 1fr;
		}
	}
</style>
