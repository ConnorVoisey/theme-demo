<script>
	import ComponentReview from './componentReview.svelte';
</script>

<section id="form">
	<svg id="sw-js-blob-svg" class="bg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
				<stop id="stop1" stop-color="hsl(var(--clr-primary-3))" offset="0%" />
				<stop id="stop2" stop-color="hsl(var(--clr-primary-7))" offset="100%" />
			</linearGradient>
		</defs>
		<path
			fill="url(#sw-gradient)"
			d="M26.4,-34C33.5,-31.1,38.1,-22.5,36.4,-14.8C34.7,-7.2,26.8,-0.5,23.8,7.4C20.8,15.4,22.7,24.7,19.6,29.7C16.4,34.8,8.2,35.7,-0.3,36.1C-8.8,36.4,-17.5,36.3,-23.5,32.1C-29.4,28,-32.6,19.8,-33.8,12C-35,4.1,-34.3,-3.4,-33.1,-11.9C-31.9,-20.5,-30.4,-30.1,-24.8,-33.5C-19.2,-36.9,-9.6,-34.1,0,-34.1C9.6,-34.1,19.3,-36.9,26.4,-34Z"
			width="100%"
			height="100%"
			transform="translate(50 50)"
			style="transition: all 0.3s ease 0s;"
			stroke-width="0"
		/>
	</svg>
	<form class="form card">
		<fieldset>
			<legend class="title">Create an account</legend>
			<label>
				<p>Email</p>
				<input type="email" placeholder="example@email.com" />
			</label>
			<label>
				<p>Password</p>
				<input type="password" placeholder="at least 8 characters" />
			</label>
			<label>
				<p>Password Confirmation</p>
				<input type="password" placeholder="passwords should match" />
			</label>
			<button class="btn-primary" type="button">Create my account</button>
		</fieldset>
	</form>
	<ComponentReview />
</section>

<style lang="scss">
	section {
		@include content-width(1400px);
		padding: size(4);
		display: grid;
		align-items: center;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(1fr);
		grid-template-areas:
			'signup'
			'ratings'
			'rating-1'
			'rating-2'
			'rating-3';
		gap: size(8);
		width: 100%;
		justify-content: space-between;
		position: relative;
	}
	@media (min-width: 900px) {
		section {
			padding: 0;
			grid-template-columns: 1fr 1fr 1fr;
			grid-template-rows: repeat(1fr);
			grid-template-areas:
				'signup signup ratings'
				'rating-1 rating-2 rating-3';
		}
	}
	@media (min-width: 1400px) {
		section {
			gap: size(16);
			grid-template-columns: max-content 1fr 1fr 1fr;
			grid-template-rows: max-content 1fr;
			grid-template-areas:
				'signup ratings ratings ratings'
				'signup rating-1 rating-2 rating-3';
		}
	}
	.bg {
		position: absolute;
		z-index: -1;
		top: calc(0px - size(48));
	}
	form {
		@include width-max-centered;
		grid-area: signup;
		height: max-content;
		input {
			width: 100%;
		}
		.btn-primary {
			margin-top: size(4);
		}
	}
	form {
		padding: size(8);
		border-radius: size(8);
		backdrop-filter: blur(1em);
		background-color: surface(9, 0.8);
	}
</style>
