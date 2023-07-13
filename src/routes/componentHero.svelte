<section>
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
			<img src="http://picsum.photos/400/600" alt="using the theme generator" />
		</div>
	</div>
</section>

<style lang="scss">
	// background
	section {
		min-height: 100vh;
		display: flex;
		align-items: center;
		background: linear-gradient(#aaa, #fff);
	}

	// container div
	.content {
		@include flex-gap(32);
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		margin: auto;
	}

	// left div (text and buttons)
	.left {
		flex: 1 1 0;
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
			gap: size(16);
		}
	}
	// right div (img)
	img {
		border-radius: size(8);
		box-shadow: 0.25rem 0.25rem 2rem 0.2rem #00000080;
	}
</style>
