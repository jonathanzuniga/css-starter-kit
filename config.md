# Styleguide options

### Head

	meta(name='viewport', content='width=device-width, initial-scale=1')

	link(rel='stylesheet', href='css/styledown.css')
	link(rel='stylesheet', href='../dist/all.css')

	script(src='js/styledown.js')

	style(type='text/css').
		body {
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
		}

		h1, h2, h3, h4, h5, h6,
		.h1, .h2, .h3, .h4, .h5, .h6 {
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

### Body

	div.container-fluid
		div.row
			div.xs-col-12.md-col-3.xl-col-2.sidebar
				div.sidebar__content
					h1 CSS Starter Kit

					p
						b DISCLAIMER - This is a very early stage work in progress project

					p CSS Starter Kit is a collection of css classes to help you create and deploy web projects quickly.

					p CSS Starter Kit is currently under development and in its very early stages. Check back often to see how it's progressing.

					div.row
						div.xs-col-12.sm-col-6.md-col-12
							h3 Layout

							ul.ls-unstyled
								li
									a(href='layout.html#flex-grid') Flex grid
									ul.ls-unstyled
										li
											a(href='layout.html#container') Container
										li
											a(href='layout.html#fluid-container') Container fluid
										li
											a(href='layout.html#rows-and-columns') Rows and columns
										li
											a(href='layout.html#responsive-columns') Responsive columns
								li
									a(href='layout.html#gutters') Gutters
								li
									a(href='layout.html#horizontal-modifiers') Horizontal modifiers
									ul.ls-unstyled
										li
											a(href='layout.html#aligns-columns-to-left') Aligns columns to left
										li
											a(href='layout.html#aligns-columns-to-center') Aligns columns to center
										li
											a(href='layout.html#aligns-columns-to-right') Aligns columns to right
										li
											a(href='layout.html#space-between-columns') Space between columns
										li
											a(href='layout.html#space-around-columns') Space around columns
								li
									a(href='layout.html#vertical-modifiers') Vertical modifiers
									ul.ls-unstyled
										li
											a(href='layout.html#aligns-columns-to-top') Aligns columns to top
										li
											a(href='layout.html#aligns-columns-to-middle') Aligns columns to middle
										li
											a(href='layout.html#aligns-columns-to-bottom') Aligns columns to bottom
										li
											a(href='layout.html#aligns-column-to-top') Aligns column to top
										li
											a(href='layout.html#aligns-column-to-middle') Aligns column to middle
										li
											a(href='layout.html#aligns-column-to-bottom') Aligns column to bottom
								li
									a(href='layout.html#offsets') Offsets
									ul.ls-unstyled
										li
											a(href='layout.html#offsetting-columns') Offsetting columns

						div.xs-col-12.sm-col-6.md-col-12
							h3 Elements

							ul.ls-unstyled
								li
									a(href='elements.html#content') Content
									ul.ls-unstyled
										li
											a(href='elements.html#blockquote') Blockquote
										li
											a(href='elements.html#bold-and-italic') Bold and italic
										li
											a(href='elements.html#code') Code
										li
											a(href='elements.html#code-block') Code block
										li
											a(href='elements.html#heading') Heading
										li
											a(href='elements.html#list') List
										li
											a(href='elements.html#small') Small
								li
									a(href='elements.html#buttons') Buttons
									ul.ls-unstyled
										li
											a(href='elements.html#link-button') Link button
										li
											a(href='elements.html#pill-button') Pill button
										li
											a(href='elements.html#gradient-button') Gradient button
										li
											a(href='elements.html#button-size') Button size
										li
											a(href='elements.html#expand-button') Expand button
								li
									a(href='elements.html#button-group') Button group
									ul.ls-unstyled
										li
											a(href='elements.html#normal-button-group') Normal button group
										li
											a(href='elements.html#expand-button-group') Expand button group
										li
											a(href='elements.html#button-group-size') Button group size
								li
									a(href='elements.html#forms') Forms
									ul.ls-unstyled
										li
											a(href='elements.html#input') Input
										li
											a(href='elements.html#input-size') Input size
										li
											a(href='elements.html#line-input') Line input
								li
									a(href='elements.html#input-group') Input group
									ul.ls-unstyled
										li
											a(href='elements.html#button-addons') Button addons
										li
											a(href='elements.html#mixed-addons') Mixed addons
										li
											a(href='elements.html#input-group-size') Input group size
								li
									a(href='elements.html#lists') Lists
									ul.ls-unstyled
										li
											a(href='elements.html#unstyled-list') Unstyled list
								li
									a(href='elements.html#tables') Tables
									ul.ls-unstyled
										li
											a(href='elements.html#table') Table
										li
											a(href='elements.html#bordered-table') Bordered table
										li
											a(href='elements.html#responsive-table') Responsive table
										li
											a(href='elements.html#scrolling-table') Scrolling table

						div.xs-col-12.sm-col-6.md-col-12
							h3 Helpers

							ul.ls-unstyled
								li
									a(href='helpers.html#borders') Borders
									ul.ls-unstyled
										li
											a(href='helpers.html#four-borders') Four borders
										li
											a(href='helpers.html#top-border') Top border
										li
											a(href='helpers.html#right-border') Right border
										li
											a(href='helpers.html#bottom-border') Bottom border
										li
											a(href='helpers.html#left-border') Left border
										li
											a(href='helpers.html#right-and-left-border') Right and left border
										li
											a(href='helpers.html#top-and-bottom-border') Top and bottom border
										li
											a(href='helpers.html#remove-borders') Remove borders
								li
									a(href='helpers.html#border-radius') Border radius
									ul.ls-unstyled
										li
											a(href='helpers.html#rounded-four-corners') Rounded four corners
										li
											a(href='helpers.html#rounded-top-right-corner') Rounded top right corner
										li
											a(href='helpers.html#rounded-bottom-right-corner') Rounded bottom right corner
										li
											a(href='helpers.html#rounded-bottom-left-corner') Rounded bottom left corner
										li
											a(href='helpers.html#rounded-top-left-corner') Rounded top left corner
										li
											a(href='helpers.html#rounded-top-corners') Rounded top corners
										li
											a(href='helpers.html#rounded-right-corners') Rounded right corners
										li
											a(href='helpers.html#rounded-bottom-corners') Rounded bottom corners
										li
											a(href='helpers.html#rounded-left-corners') Rounded left corners
										li
											a(href='helpers.html#remove-rounded-corners') Remove rounded corners
								li
									a(href='helpers.html#clearfix') Clearfix
								li
									a(href='helpers.html#colors') Colors
								li
									a(href='helpers.html#float') Float
									ul.ls-unstyled
										li
											a(href='helpers.html#float-left') Float left
										li
											a(href='helpers.html#float-right') Float right
										li
											a(href='helpers.html#don-t-float') Don't float
										li
											a(href='helpers.html#responsive-float') Responsive float
										li
											a(href='helpers.html#element-to-the-left-side') Element to the left side
										li
											a(href='helpers.html#element-to-the-right-side') Element to the right side
								li
									a(href='helpers.html#hiding') Hiding
									ul.ls-unstyled
										li
											a(href='helpers.html#hide') Hide
										li
											a(href='helpers.html#hide-at-maximum-size') Hide at maximum size
										li
											a(href='helpers.html#hide-at-minimum-size') Hide at minimum size
								li
									a(href='helpers.html#sizing') Sizing
								li
									a(href='helpers.html#spacing') Spacing
								li
									a(href='helpers.html#text') Text
									ul.ls-unstyled
										li
											a(href='helpers.html#font-weight-thin') Font weight thin
										li
											a(href='helpers.html#font-weight-extra-light') Font weight extra-light
										li
											a(href='helpers.html#font-weight-light') Font weight light
										li
											a(href='helpers.html#font-weight-regular') Font weight regular
										li
											a(href='helpers.html#font-weight-medium') Font weight medium
										li
											a(href='helpers.html#font-weight-semi-bold') Font weight semi-bold
										li
											a(href='helpers.html#font-weight-bold') Font weight bold
										li
											a(href='helpers.html#font-weight-extra-bold') Font weight extra-bold
										li
											a(href='helpers.html#font-weight-black') Font weight black
										li
											a(href='helpers.html#italic-text') Italic text
										li
											a(href='helpers.html#font-small') Font small
										li
											a(href='helpers.html#font-large') Font large
								li
									a(href='helpers.html#text-alignment') Text alignment
									ul.ls-unstyled
										li
											a(href='helpers.html#center-aligned-text') Center aligned text
										li
											a(href='helpers.html#left-aligned-text') Left aligned text
										li
											a(href='helpers.html#right-aligned-text') Right aligned text
										li
											a(href='helpers.html#responsive-text-alignment') Responsive text alignment
								li
									a(href='helpers.html#text-transform') Text transform
									ul.ls-unstyled
										li
											a(href='helpers.html#capitalized-text') Capitalized text
										li
											a(href='helpers.html#lowercased-text') Lowercased text
										li
											a(href='helpers.html#uppercased-text') Uppercased text
								li
									a(href='helpers.html#other-text-helpers') Other text helpers
									ul.ls-unstyled
										li
											a(href='helpers.html#highlighting-text') Highlighting text
										li
											a(href='helpers.html#selecting-all-text-with-one-click') Selecting all text with one click
										li
											a(href='helpers.html#text-strike') Text strike
										li
											a(href='helpers.html#drop-cap') Drop cap
										li
											a(href='helpers.html#small-caps') Small caps
										li
											a(href='helpers.html#txt-indent') Indent text
										li
											a(href='helpers.html#divide-the-content-in-columns') Divide the content in columns

						div.xs-col-12.sm-col-6.md-col-12
							h3 Components

							ul.ls-unstyled
								li
									a(href='components.html#cards') Cards
								li
									a(href='components.html#navbar') Navbar
									ul.ls-unstyled
										li
											a(href='components.html#right-align-navbar-menu') Right align navbar menu
										li
											a(href='components.html#responsive-navbar-menu') Responsive navbar menu

			div.xs-col-12.md-col-9.xl-col-10.main
				div.row.cols-center
					div.xl-col-10
						div(sg-content).sg-container
