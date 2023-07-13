<!-- start region: Ratings -->
<div class="ratings card">
	<h4 class="title">Ratings</h4>
	<div class="star-and-score">
		<ul>
			{#each { length: 5 } as _}
				<li>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path
							d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
						/>
					</svg>
				</li>
			{/each}
		</ul>
		<div class="text">
			<p>4.7 out of 5</p>
		</div>
	</div>
	<p>53 customer ratings</p>

	<div class="rating-bars">
		<h6>5 star</h6>
		<div class="bar" style="--progress: 84%" />
		<p>84%</p>
		<h6>4 star</h6>
		<div class="bar" style="--progress: 12%" />
		<p>12%</p>
		<h6>3 star</h6>
		<div class="bar" style="--progress: 3%" />
		<p>3%</p>
		<h6>1 star</h6>
		<div class="bar" style="--progress: 1%" />
		<p>1%</p>
	</div>
</div>
<!-- end region: Ratings -->

<!-- start region: Reviews -->
<div class="review review-1 card">
	<div class="header">
		<img src="http://picsum.photos/50/50" alt="avatar" />
		<h5 class="subtitle">John Real-Person</h5>
	</div>
	<p>It's good you should use it.</p>
</div>
<div class="review review-2 card">
	<div class="header">
		<img src="http://picsum.photos/50/50" alt="avatar" />
		<h5 class="subtitle">Alice Not-Fake</h5>
	</div>
	<p>It's definitely one of the ways of handling CSS.</p>
</div>
<div class="review review-3 card">
	<div class="header">
		<img src="http://picsum.photos/50/50" alt="avatar" />
		<h5 class="subtitle">Real Human</h5>
	</div>
	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, incidunt!.</p>
</div>

<!-- end region: Reviews -->

<style lang="scss">
	// --start region: Ratings
	.ratings {
		grid-area: ratings;
		@include width-max-centered;
	}
	.title {
		margin-bottom: 0;
	}
	$star-clr: #fecc48;
	.star-and-score {
		@include flex-gap(8);
		align-items: center;
		ul {
			@include flex-gap(1);
			li svg {
				width: size(8);
				fill: $star-clr;
			}
		}
	}
	.rating-bars {
		margin-top: size(4);
		margin-bottom: size(8);
		display: grid;
		grid-template-columns: max-content 1fr max-content;
		gap: size(2);
		width: 100%;
		.bar {
			background-color: surface(8);
			border-radius: size(4);
			position: relative;
			overflow: hidden;
			&::after {
                @include pseudo;
				width: var(--progress);
				height: 100%;
				background-color: $star-clr;
				box-shadow: 0 0 1.5rem 0.2rem $star-clr;
			}
		}
	}
	// --end region: rating

	// --start region: review
	.review {
		.header {
			@include flex-gap(4);
			align-items: center;
			margin-bottom: size(2);
			img {
				border-radius: 9999px;
			}
		}
	}
	// --end region: review

	.card {
		padding: size(8);
		border-radius: size(8);
		backdrop-filter: blur(1em);
		background-color: surface(9, 0.8);
	}
</style>
