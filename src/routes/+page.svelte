<section class="hero">
	<div class="content">
		<div class="left">
			<h1>
				Using the
				<br /><span>Theme generator</span>
			</h1>
			<div class="btn-group">
				<a href="#why" class="btn-primary">How do I use this?</a>
				<a href="#get-started" class="btn-secondary">Get Started</a>
			</div>
		</div>
		<div class="right">
			<img src="http://picsum.photos/300/600" alt="using the theme generator" />
		</div>
	</div>
</section>
<hr />
<section id="why">
	<h3 class="title">Why another CSS approach?</h3>
	<div class="card-group">
		<div class="card">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><title>check-circle-outline</title><path
					d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z"
				/></svg
			>
			<h4 class="subtitle">Consistency</h4>
			<p>This library aims to make your styling consistent across your site.</p>
		</div>
		<div class="card">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><title>circle-edit-outline</title><path
					d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z"
				/></svg
			>
			<h4 class="subtitle">Adapting to change</h4>
			<p>Designs change. Making these changes should not be complex or unpredictable.</p>
		</div>
		<div class="card">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
				><title>simple-icons</title><path
					d="M18.25 17C18.25 17.88 18.07 18.74 17.71 19.53H16.31C17.71 17.15 16.91 14.09 14.53 12.69C13.76 12.24 12.89 12 12 12C9.24 12 7 9.76 7 7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7H15.75C15.75 4.93 14.07 3.25 12 3.25C9.93 3.25 8.25 4.93 8.25 7C8.25 9.07 9.93 10.75 12 10.75C15.45 10.75 18.25 13.56 18.25 17M6.29 19.53C5.93 18.74 5.75 17.87 5.75 17H7C7 17.93 7.25 18.79 7.69 19.53H6.29M18.25 20.75V22H5.75V20.75H9.5V15.75H8.25V14.5H15.75V15.75H14.5V20.75H18.25M13.25 15.75H10.75V20.75H13.25V15.75M14.44 7.07C14.4 8.4 13.33 9.47 12 9.5C10.62 9.46 9.53 8.32 9.57 6.94C9.6 5.61 10.67 4.53 12 4.5C13.38 4.54 14.47 5.68 14.44 7.07M13.25 7C13.25 6.31 12.69 5.75 12 5.75C11.31 5.75 10.75 6.31 10.75 7C10.75 7.69 11.31 8.25 12 8.25C12.69 8.25 13.25 7.69 13.25 7Z"
				/></svg
			>
			<h4 class="subtitle">It's simple</h4>
			<p>Reduced complexity by using CSS as it's designed to be used.</p>
		</div>
	</div>
</section>
<section class="grid">
	{#each { length: 9 } as _}
		<div>
			<div />
		</div>
	{/each}
</section>
<hr class="before-form" />
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
    <div class="reviews card">
        <h4 class="title">Fake User Review</h4>
        

    </div>
</section>

<style lang="scss">
	:root {
		--page-width: 900px;
	}

	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		background: linear-gradient(#aaa, #fff);
		.content {
			display: flex;
			justify-content: space-between;
			width: 100%;
			max-width: var(--page-width);
			flex-wrap: wrap;
			margin: auto;
		}

		& > div {
			display: flex;
			align-items: center;
		}
		.left {
			flex: 1 1 0;
			justify-content: center;
			h1 {
				font-size: 50px;
				line-height: 1.2em;
				letter-spacing: -2px;
				margin-bottom: size(4);
				span {
					font-weight: 500;
					font-size: 60px;
				}
			}
			.btn-group {
				gap: size(8);
			}
		}
		.right img {
			border-radius: size(8);
			box-shadow: 0.25rem 0.25rem 2rem 0.2rem #00000080;
		}
	}
	section#why,
	section.grid,
	section#form {
		max-width: var(--page-width);
		margin: auto;
	}
	section#why {
		padding-top: size(32);
		h3 {
			margin-bottom: size(8);
		}
		.card {
			padding: size(8);
			.subtitle {
				margin-bottom: size(4);
			}
			svg {
				padding: size(8);
				padding-top: size(4);
				width: 100%;
			}

			&:hover {
				box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 16px 0px;
				transform: translate3d(0, 2px, 0);
				.title,
				.subtitle {
					border-bottom-color: primary(5);
				}
				svg {
					fill: primary(5);
				}
			}
			&,
			svg,
			.title,
			.subtitle {
				transition: all 235ms ease-in-out;
			}
		}
	}
	.card-group {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: size(16);
		margin-bottom: size(32);
	}
	section.grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-template-areas:
			'one one two three three three'
			'one one four four five five'
			'six seven four four five five'
			'six eight eight nine five five';
		height: 600px;
		gap: size(4);
		& > div {
			box-shadow: 0.125rem 0.125rem 0.25rem #00000080;
			border-radius: size(8);
			height: 100%;
			background: linear-gradient(45deg, surface(8), surface(9));
		}
		& > div:nth-child(1) {
			grid-area: one;
			background: linear-gradient(45deg, primary(6), primary(4));
		}
		& > div:nth-child(2) {
			grid-area: two;
			background: linear-gradient(45deg, secondary(6), secondary(4));
		}
		& > div:nth-child(3) {
			grid-area: three;
		}
		& > div:nth-child(4) {
			grid-area: four;
		}
		& > div:nth-child(5) {
			grid-area: five;
			background: primary(5);
		}
		& > div:nth-child(6) {
			grid-area: six;
		}
		& > div:nth-child(7) {
			grid-area: seven;
		}
		& > div:nth-child(8) {
			grid-area: eight;
			background: primary(5);
		}
		& > div:nth-child(9) {
			grid-area: nine;
		}
	}
	.before-form {
		margin: size(32) 0;
	}
	section#form {
		display: flex;
		width: 100%;
		justify-content: space-between;
		position: relative;
		.bg {
			position: absolute;
			z-index: -1;
			top: 0;
		}
		form {
			padding: size(8);
			border-radius: size(8);
			backdrop-filter: blur(0.2em);
			background-color: surface(9, 0.9);
			input {
				width: 100%;
			}
			.btn-primary {
				margin-top: size(4);
			}
		}
	}
</style>
