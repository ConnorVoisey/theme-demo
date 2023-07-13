<section>
	{#each { length: 9 } as _}
		<div>
			<div />
		</div>
	{/each}
</section>

<style lang="scss">
	section {
		@include content-width;
		padding-top: size(32);
		display: grid;
		gap: size(4);
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr;
		grid-template-areas:
			'one one two three three three'
			'one one four four five five'
			'six seven four four five five'
			'six eight eight nine five five';
		height: 600px;
		& > div {
			box-shadow: 0.125rem 0.125rem 0.25rem #00000080;
			border-radius: size(8);
			height: 100%;
			background: linear-gradient(45deg, surface(8), surface(9));
		}

		// coloring and grid area for each tile
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
</style>
