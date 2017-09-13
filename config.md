# Styleguide options

### Head

	<meta name='viewport' content='width=device-width, initial-scale=1' />

	<link rel='stylesheet' href='css/styledown.css' />
	<link rel='stylesheet' href='../dist/all.css' />
	
	<script src='js/styledown.js'></script>

	<style type="text/css">
		body {
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
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

		.sg-block:last-of-type {
			border-bottom: none;
		}

		.sidebar {
			font-size: 14px;
		}

		@media (min-width: 1024px) {
			.sidebar {
				/* Make it sticky. */
				max-height: 100vh;
				position: -webkit-sticky;
				position: sticky;
				top: 0;
			}

			.sidebar__content {
				max-height: 100vh;
				overflow-x: hidden;
				overflow-y: auto;
			}
		}

		.sidebar h1, 
		.sidebar h2,
		.sidebar h3 {
			border-bottom: solid 1px rgba(0, 0, 0, 0.1);
			margin-bottom: 1.25rem;
			padding-bottom: 1.25rem;
		}

		.sidebar h1 {
			margin-top: -0.25rem;
		}

		.sidebar h2,
		.sidebar h3 {
			margin-top: 1.25rem;
		}

		.sidebar__content div[class*="col-"] > .ls-unstyled > li > a {
			font-weight: bold;
		}

		.sidebar__content,
		.main {
			padding-top: 2.5rem;
			padding-bottom: 2.5rem;
		}

		.navbar {
			background-color: rgba(61, 70, 77, 0.1);
		}
	</style>

### Body

	<div class='container-fluid'>
		<div class="row">
			<div class="xs-col-12 md-col-3 xl-col-2 sidebar">
				<div class="sidebar__content">
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
						<div class="xs-col-12 sm-col-6 md-col-12">
							<h3>Layout</h3>

							<ul class="ls-unstyled">
								<li>
									<a href="layout.html#flex-grid">Flex grid</a>
									<ul class="ls-unstyled">
										<li>
											<a href="layout.html#container">Container</a>
										</li>
										<li>
											<a href="layout.html#fluid-container">Container fluid</a>
										</li>
										<li>
											<a href="layout.html#rows-and-columns">Rows and columns</a>
										</li>
										<li>
											<a href="layout.html#responsive-columns">Responsive columns</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="layout.html#gutters">Gutters</a>
									<ul class="ls-unstyled">
										<li>
											<a href="layout.html#double-size-gutters">Double size gutters</a>
										</li>
										<li>
											<a href="layout.html#regular-plus-half-size-gutters">Regular plus half size gutters</a>
										</li>
										<li>
											<a href="layout.html#half-size-gutters">Half size gutters</a>
										</li>
										<li>
											<a href="layout.html#remove-gutters">Remove gutters</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="layout.html#horizontal-modifiers">Horizontal modifiers</a>
									<ul class="ls-unstyled">
										<li>
											<a href="layout.html#aligns-columns-to-left">Aligns columns to left</a>
										</li>
										<li>
											<a href="layout.html#aligns-columns-to-center">Aligns columns to center</a>
										</li>
										<li>
											<a href="layout.html#aligns-columns-to-right">Aligns columns to right</a>
										</li>
										<li>
											<a href="layout.html#space-between-columns">Space between columns</a>
										</li>
										<li>
											<a href="layout.html#space-around-columns">Space around columns</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="layout.html#vertical-modifiers">Vertical modifiers</a>
									<ul class="ls-unstyled">
										<li>
											<a href="layout.html#aligns-columns-to-top">Aligns columns to top</a>
										</li>
										<li>
											<a href="layout.html#aligns-columns-to-middle">Aligns columns to middle</a>
										</li>
										<li>
											<a href="layout.html#aligns-columns-to-bottom">Aligns columns to bottom</a>
										</li>
										<li>
											<a href="layout.html#aligns-column-to-top">Aligns column to top</a>
										</li>
										<li>
											<a href="layout.html#aligns-column-to-middle">Aligns column to middle</a>
										</li>
										<li>
											<a href="layout.html#aligns-column-to-bottom">Aligns column to bottom</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="layout.html#offsets">Offsets</a>
									<ul class="ls-unstyled">
										<li>
											<a href="layout.html#offsetting-columns">Offsetting columns</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="xs-col-12 sm-col-6 md-col-12">
							<h3>Elements</h3>

							<ul class="ls-unstyled">
								<li>
									<a href="elements.html#content">Content</a>
									<ul class="ls-unstyled">
										<li>
											<a href="elements.html#blockquote">Blockquote</a>
										</li>
										<li>
											<a href="elements.html#bold-and-italic">Bold and italic</a>
										</li>
										<li>
											<a href="elements.html#code">Code</a>
										</li>
										<li>
											<a href="elements.html#code-block">Code block</a>
										</li>
										<li>
											<a href="elements.html#heading">Heading</a>
										</li>
										<li>
											<a href="elements.html#list">List</a>
										</li>
										<li>
											<a href="elements.html#small">Small</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="elements.html#buttons">Buttons</a>
									<ul class="ls-unstyled">
										<li>
											<a href="elements.html#link-button">Link button</a>
										</li>
										<li>
											<a href="elements.html#pill-button">Pill button</a>
										</li>
										<li>
											<a href="elements.html#gradient-button">Gradient button</a>
										</li>
										<li>
											<a href="elements.html#button-size">Button size</a>
										</li>
										<li>
											<a href="elements.html#expanded-button">Expanded button</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="elements.html#forms">Forms</a>
									<ul class="ls-unstyled">
										<li>
											<a href="elements.html#input">Input</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="elements.html#input-group">Input group</a>
									<ul class="ls-unstyled">
										<li>
											<a href="elements.html#button-addons">Button addons</a>
										</li>
										<li>
											<a href="elements.html#mixed-addons">Mixed addons</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="elements.html#lists">Lists</a>
									<ul class="ls-unstyled">
										<li>
											<a href="elements.html#unstyled-list">Unstyled list</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="elements.html#tables">Tables</a>
									<ul class="ls-unstyled">
										<li>
											<a href="elements.html#table">Table</a>
										</li>
										<li>
											<a href="elements.html#bordered-table">Bordered table</a>
										</li>
										<li>
											<a href="elements.html#responsive-table">Responsive table</a>
										</li>
										<li>
											<a href="elements.html#scrolling-table">Scrolling table</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="xs-col-12 sm-col-6 md-col-12">
							<h3>Helpers</h3>

							<ul class="ls-unstyled">
								<li>
									<a href="helpers.html#borders">Borders</a>
									<ul class="ls-unstyled">
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
									<ul class="ls-unstyled">
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
									<a href="helpers.html#float">Float</a>
									<ul class="ls-unstyled">
										<li>
											<a href="helpers.html#float-left">Float left</a>
										</li>
										<li>
											<a href="helpers.html#float-right">Float right</a>
										</li>
										<li>
											<a href="helpers.html#don-t-float">Don't float</a>
										</li>
										<li>
											<a href="helpers.html#responsive-float">Responsive float</a>
										</li>
										<li>
											<a href="helpers.html#element-to-the-left-side">Element to the left side</a>
										</li>
										<li>
											<a href="helpers.html#element-to-the-right-side">Element to the right side</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="helpers.html#hiding">Hiding</a>
									<ul class="ls-unstyled">
										<li>
											<a href="helpers.html#hide">Hide</a>
										</li>
										<li>
											<a href="helpers.html#hide-at-maximum-size">Hide at maximum size</a>
										</li>
										<li>
											<a href="helpers.html#hide-at-minimum-size">Hide at minimum size</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="helpers.html#sizing">Sizing</a>
								</li>
								<li>
									<a href="helpers.html#spacing">Spacing</a>
								</li>
								<li>
									<a href="helpers.html#text">Text</a>
									<ul class="ls-unstyled">
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
										<li>
											<a href="helpers.html#italic-text">Italic text</a>
										</li>
										<li>
											<a href="helpers.html#font-small">Font small</a>
										</li>
										<li>
											<a href="helpers.html#font-large">Font large</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="helpers.html#text-alignment">Text alignment</a>
									<ul class="ls-unstyled">
										<li>
											<a href="helpers.html#center-aligned-text">Center aligned text</a>
										</li>
										<li>
											<a href="helpers.html#left-aligned-text">Left aligned text</a>
										</li>
										<li>
											<a href="helpers.html#right-aligned-text">Right aligned text</a>
										</li>
										<li>
											<a href="helpers.html#responsive-text-alignment">Responsive text alignment</a>
										</li>
									</ul>
								</li>
								<li>
									<a href="helpers.html#text-transform">Text transform</a>
									<ul class="ls-unstyled">
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
									<a href="helpers.html#other-text-helpers">Other text helpers</a>
									<ul class="ls-unstyled">
										<li>
											<a href="helpers.html#highlighting-text">Highlighting text</a>
										</li>
										<li>
											<a href="helpers.html#selecting-all-text-with-one-click">Selecting all text with one click</a>
										</li>
										<li>
											<a href="helpers.html#text-strike">Text strike</a>
										</li>
										<li>
											<a href="helpers.html#drop-caps">Drop caps</a>
										</li>
										<li>
											<a href="helpers.html#small-caps">Small caps</a>
										</li>
										<li>
											<a href="helpers.html#content-indented">Content indented</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="xs-col-12 sm-col-6 md-col-12">
							<h3>Components</h3>

							<ul class="ls-unstyled">
								<li>
									<a href="components.html#cards">Cards</a>
								</li>
								<li>
									<a href="components.html#navbar">Navbar</a>
									<ul class="ls-unstyled">
										<li>
											<a href="components.html#right-align-navbar-menu">Right align navbar menu</a>
										</li>
										<li>
											<a href="components.html#responsive-navbar-menu">Responsive navbar menu</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="xs-col-12 md-col-9 xl-col-10 main">
				<div class="row cols-center">
					<div class="lg-col-10">
						<div class='sg-container' sg-content>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
