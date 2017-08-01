# Styleguide options

### Head

	<meta name='viewport' content='width=device-width, initial-scale=1' />

	<link rel='stylesheet' href='css/styledown.css' />
	<link rel='stylesheet' href='../dist/all.css' />
	
	<script src='js/styledown.js'></script>

	<style type="text/css">
		body {
			font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
		}

		h1, h2, h3, h4, h5, h6 {
			font-weight: 300;
		}

		.sg-canvas {
			*zoom: 1;
		}

		.sg-canvas:before,
		.sg-canvas:after {
			content: ' ';
			display: table;
		}

		.sg-canvas:after {
			clear: both;
		}

		.color-swatch {
			width: 50px;
			height: 25px;
		}

		.h-100px {
			height: 100px;
		}

		.sg-example .row + .row {
			margin-top: 1rem;
		}
	</style>

### Body

	<div class='row cols-center'>
		<div class='col-xs-12 col-md-10 col-lg-9 col-xl-8'>
			<div class='sg-container' sg-content>
				<h1>CSS Starter Kit</h1>

				<p>
					<b>DISCLAIMER - This is a very early stage work in progress project</b>
				</p>

				<p>
					CSS Starter Kit is a collection of css classes to help you create and deploy web projects quickly.
				</p>

				<p>
					CSS Starter Kit is currently under development and in its very early stages. Check back often to see how it's progressing.
				</p>

				<div class="row">
					<div class="col-sm-4">
						<h3>
							Layout
						</h3>

						<ul class="lst-unstyled">
							<li>
								<a href="layout.html#flex-grid">Flex grid</a>
							</li>
							<li>
								<a href="layout.html#horizontal-modifiers">Horizontal modifiers</a>
								<ul class="lst-unstyled">
									<li>
										<a href="layout.html#columns-to-left">Columns to left</a>
									</li>
									<li>
										<a href="layout.html#columns-to-center">Columns to center</a>
									</li>
									<li>
										<a href="layout.html#space-between-columns">Space between columns</a>
									</li>
									<li>
										<a href="layout.html#space-around-columns">Space around columns</a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<div class="col-sm-4">
						<h3>
							Elements
						</h3>

						<ul class="lst-unstyled">
							<li>
								<a href="elements.html#buttons">Buttons</a>
								<ul class="lst-unstyled">
									<li>
										<a href="elements.html#button">Button</a>
									</li>
									<li>
										<a href="elements.html#primary-button">Primary button</a>
									</li>
									<li>
										<a href="elements.html#secondary-button">Secondary button</a>
									</li>
									<li>
										<a href="elements.html#link-button">Link button</a>
									</li>
									<li>
										<a href="elements.html#pill-button">Pill button</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="elements.html#lists">Lists</a>
								<ul class="lst-unstyled">
									<li>
										<a href="elements.html#unstyled-list">Unstyled list</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="elements.html#tables">Tables</a>
							</li>
						</ul>
					</div>
					<div class="col-sm-4">
						<h3>
							Helpers
						</h3>

						<ul class="lst-unstyled">
							<li>
								<a href="helpers.html#borders">Borders</a>
								<ul class="lst-unstyled">
									<li>
										<a href="helpers.html#four-borders">Four borders</a>
									</li>
									<li>
										<a href="helpers.html#top-border">Top border</a>
									</li>
									<li>
										<a href="helpers.html#right-border">Right border</a>
									</li>
									<li>
										<a href="helpers.html#bottom-border">Bottom border</a>
									</li>
									<li>
										<a href="helpers.html#left-border">Left border</a>
									</li>
									<li>
										<a href="helpers.html#right-and-left-border">Right and left border</a>
									</li>
									<li>
										<a href="helpers.html#top-and-bottom-border">Top and bottom border</a>
									</li>
									<li>
										<a href="helpers.html#remove-borders">Remove borders</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="helpers.html#border-radius">Border radius</a>
								<ul class="lst-unstyled">
									<li>
										<a href="helpers.html#rounded-four-corners">Rounded four corners</a>
									</li>
									<li>
										<a href="helpers.html#rounded-top-right-corner">Rounded top right corner</a>
									</li>
									<li>
										<a href="helpers.html#rounded-bottom-right-corner">Rounded bottom right corner</a>
									</li>
									<li>
										<a href="helpers.html#rounded-bottom-left-corner">Rounded bottom left corner</a>
									</li>
									<li>
										<a href="helpers.html#rounded-top-left-corner">Rounded top left corner</a>
									</li>
									<li>
										<a href="helpers.html#rounded-top-corners">Rounded top corners</a>
									</li>
									<li>
										<a href="helpers.html#rounded-right-corners">Rounded right corners</a>
									</li>
									<li>
										<a href="helpers.html#rounded-bottom-corners">Rounded bottom corners</a>
									</li>
									<li>
										<a href="helpers.html#rounded-left-corners">Rounded left corners</a>
									</li>
									<li>
										<a href="helpers.html#remove-rounded-corners">Remove rounded corners</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="helpers.html#clearfix">Clearfix</a>
							</li>
							<li>
								<a href="helpers.html#colors">Colors</a>
							</li>
							<li>
								<a href="helpers.html#floats">Floats</a>
								<ul class="lst-unstyled">
									<li>
										<a href="helpers.html#float-left">Float left</a>
									</li>
									<li>
										<a href="helpers.html#float-right">Float right</a>
									</li>
									<li>
										<a href="helpers.html#don-t-float">Don't float</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="helpers.html#font-style">Font style</a>
							</li>
							<li>
								<a href="helpers.html#font-weight">Font weight</a>
								<ul class="lst-unstyled">
									<li>
										<a href="helpers.html#font-weight-thin">Font weight thin</a>
									</li>
									<li>
										<a href="helpers.html#font-weight-extra-light">Font weight extra-light</a>
									</li>
									<li>
										<a href="helpers.html#font-weight-light">Font weight light</a>
									</li>
									<li>
										<a href="helpers.html#font-weight-regular">Font weight regular</a>
									</li>
									<li>
										<a href="helpers.html#font-weight-medium">Font weight medium</a>
									</li>
									<li>
										<a href="helpers.html#font-weight-semi-bold">Font weight semi-bold</a>
									</li>
									<li>
										<a href="helpers.html#font-weight-bold">Font weight bold</a>
									</li>
									<li>
										<a href="helpers.html#font-weight-extra-bold">Font weight extra-bold</a>
									</li>
									<li>
										<a href="helpers.html#font-weight-black">Font weight black</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="helpers.html#margins">Margins</a>
							</li>
							<li>
								<a href="helpers.html#paddings">Paddings</a>
							</li>
							<li>
								<a href="helpers.html#text-alignment">Text alignment</a>
								<ul class="lst-unstyled">
									<li>
										<a href="helpers.html#center-aligned-text">Center aligned text</a>
									</li>
									<li>
										<a href="helpers.html#left-aligned-text">Left aligned text</a>
									</li>
									<li>
										<a href="helpers.html#right-aligned-text">Right aligned text</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="helpers.html#text-selection">Text selection</a>
								<ul class="lst-unstyled">
									<li>
										<a href="helpers.html#selecting-all-text-with-one-click">Selecting all text with one click</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="helpers.html#text-strike">Text strike</a>
							</li>
							<li>
								<a href="helpers.html#text-transform">Text transform</a>
								<ul class="lst-unstyled">
									<li>
										<a href="helpers.html#capitalized-text">Capitalized text</a>
									</li>
									<li>
										<a href="helpers.html#lowercased-text">Lowercased text</a>
									</li>
									<li>
										<a href="helpers.html#uppercased-text">Uppercased text</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="helpers.html#width-and-height">Width and height</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="row">
				</div>
			</div>
		</div>
	</div>
