# Styleguide options

### Head

	meta(name='viewport', content='width=device-width, initial-scale=1')

	link(rel='stylesheet', href='css/styledown.css')
	link(rel='stylesheet', href='../dist/all.css')

	style(type='text/css').
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

		//- .sidebar h1, 
		//- .sidebar h2,
		//- .sidebar h3 {
		//- 	border-bottom: solid 1px rgba(0, 0, 0, 0.1);
		//- 	margin-bottom: 1.25rem;
		//- 	padding-bottom: 1.25rem;
		//- }

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

		.sidebar h3 ~ ul > li,
		.sidebar ul {
			margin-bottom: 0.5rem;
		}

		.sidebar .active a {
			color: #333;
		}

		.night .sidebar .active a {
			color: #fff;
		}

		.sg-block {
			border-top-color: #dbdbdc;
		}

		.night .sg-block {
			border-top-color: #3c3c3d;
		}

		//- .night code.sg {
		//- 	color: #579;
		//- }

		//- .night code.sg:not(:first-child) {
		//- 	background: rgba(250, 250, 250, 0.025);
		//- 	color: #357;
		//- }

		.night .sg-expando::before {
			background-color: rgba(255, 255, 255, 0.14);
		}

		.night .sg-expando:hover::before, 
		.night .sg-expando:focus::before {
			background-color: rgba(255, 255, 255, 0.7);
		}

		.night .sg-expando:active::before {
			background: #111;
			color: #fff;
		}

		.night .sg-code {
			background: #fafaff !important;
		}

		//- .navbar {
		//- 	background-color: rgba(0, 0, 0, 0.05);
		//- }

### Body

	div.container-fluid
		div.row.sm-hide
			div.col
				nav.navbar.navbar-responsive.bd-bottom.fixed
					div.navbar__brand
						a(href='/').navbar__link CSS Starter Kit
					a(href='#!', id='open-fsmenu').navbar__toggler Menu

		div.row
			div.main.xs-col-12.md-col-9.xl-col-10.maxsm-p-top-20
				div.main__content.row.cols-center
					div.md-col-12.xl-col-10
						div(sg-content).sg-container

			div.sidebar.xs-col-12.md-col-3.xl-col-2.maxsm-fsmenu.maxsm-p-top-12
				div.sidebar__content.row
					div.col
						h1.bd-bottom.m-bottom-5.p-bottom-5.maxsm-hide CSS Starter Kit

						p
							b DISCLAIMER - This is a very early stage work in progress project

						p CSS Starter Kit is a collection of css classes to help you create and deploy web projects quickly.

						p CSS Starter Kit is currently under development and in its very early stages. Check back often to see how it's progressing.

						p 
							input(id='switch-night-mode', type='checkbox').switch.switch--sm
							label(for='switch-night-mode', id='lbl-night-mode')
								span Night mode

						div.row
							div.xs-col-12.sm-col-6.md-col-12
								h3.bd-bottom.m-bottom-5.p-bottom-5 Layout

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
										a(href='layout.html#grid') Grid
										ul.ls-unstyled
											li
												a(href='layout.html#grid-with-flexible-sizes') Grid with flexible sizes
											li
												a(href='layout.html#responsive-grid') Responsive grid

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
								h3.bd-bottom.m-bottom-5.p-bottom-5 Elements

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
										a(href='elements.html#forms') Forms
										ul.ls-unstyled
											li
												a(href='elements.html#label') Label
											li
												a(href='elements.html#input') Input
											li
												a(href='elements.html#input-size') Input size
											li
												a(href='elements.html#line-input') Line input
											li
												a(href='elements.html#textarea') Textarea
											li
												a(href='elements.html#checkbox-and-radio') Checkbox and radio
											li
												a(href='elements.html#select-menu') Select menu
											li
												a(href='elements.html#select-menu-size') Select menu size
											li
												a(href='elements.html#file-area') File area
											li
												a(href='elements.html#switch') Switch
											li
												a(href='elements.html#switch-size') Switch size
											li
												a(href='elements.html#toolbar') Toolbar
									li
										a(href='elements.html#buttons') Buttons
										ul.ls-unstyled
											li
												a(href='elements.html#standard-button') Standard button
											li
												a(href='elements.html#link-button') Link button
											li
												a(href='elements.html#pill-button') Pill button
											li
												a(href='elements.html#gradient-button') Gradient button
											li
												a(href='elements.html#button-size') Button size
											li
												a(href='elements.html#expand-button') Expanded button
											li
												a(href='elements.html#active-button') Active button
											li
												a(href='elements.html#disabled-button') Disabled button
											li
												a(href='elements.html#toggle-button') Toggle button
									li
										a(href='elements.html#button-group') Button group
										ul.ls-unstyled
											li
												a(href='elements.html#normal-button-group') Normal button group
											li
												a(href='elements.html#expand-button-group') Expanded button group
											li
												a(href='elements.html#button-group-size') Button group size
											li
												a(href='elements.html#toggle-state') Toggle state
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
											li
												a(href='elements.html#striped-table') Striped table

							div.xs-col-12.sm-col-6.md-col-12
								h3.bd-bottom.m-bottom-5.p-bottom-5 Helpers

								ul.ls-unstyled
									li
										a(href='helpers.html#borders') Borders
										ul.ls-unstyled
											li
												a(href='helpers.html#border') Border
											li
												a(href='helpers.html#remove-border') Remove border
											li
												a(href='helpers.html#responsive-border') Responsive border
											li
												a(href='helpers.html#responsive-remove-border') Responsive remove border
									li
										a(href='helpers.html#border-radius') Border radius
										ul.ls-unstyled
											li
												a(href='helpers.html#rounded-four-corners') Rounded corners
											li
												a(href='helpers.html#rounded-top-right-corner') Rounded top right corner
											li
												a(href='helpers.html#rounded-bottom-right-corner') Rounded bottom right corner
											li
												a(href='helpers.html#rounded-bottom-left-corner') Rounded bottom left corner
											li
												a(href='helpers.html#rounded-top-left-corner') Rounded top left corner
											li
												a(href='helpers.html#remove-rounded-corners') Remove rounded corners
									li
										a(href='helpers.html#clearfix') Clearfix
									li
										a(href='helpers.html#colors') Colors
										ul.ls-unstyled
											li
												a(href='helpers.html#link-color-to-text-color') Link color to text color
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
												a(href='helpers.html#hide-at-size') Hide at size
									li
										a(href='helpers.html#sizing') Sizing
									li
										a(href='helpers.html#spacing') Spacing
										ul.ls-unstyled
											li
												a(href='helpers.html#margin') Margin
											li
												a(href='helpers.html#responsive-margin') Responsive margin
											li
												a(href='helpers.html#padding') Padding
											li
												a(href='helpers.html#responsive-padding') Responsive padding
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
												a(href='helpers.html#strikethrough-text') Strikethrough text
											li
												a(href='helpers.html#highlighting-text') Highlighting text
											li
												a(href='helpers.html#small-font') Small font
											li
												a(href='helpers.html#large-font') Large font
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
												a(href='helpers.html#selecting-all-text-with-one-click') Selecting all text with one click
											li
												a(href='helpers.html#drop-cap') Drop cap
											li
												a(href='helpers.html#small-caps') Small caps
											li
												a(href='helpers.html#indent-txt') Indent text
											li
												a(href='helpers.html#divide-the-content-in-columns') Divide the content in columns

							div.xs-col-12.sm-col-6.md-col-12
								h3.bd-bottom.m-bottom-5.p-bottom-5 Components

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
											li
												a(href='components.html#open-responsive-navbar-menu') Open responsive navbar menu
											li
												a(href='components.html#responsive-navbar-grid-menu') Responsive navbar grid menu
											li
												a(href='components.html#navbar-brand-in-the-center') Navbar brand in the center
											li
												a(href='components.html#navbar-optional-classes') Navbar optional classes
									li
										a(href='components.html#navmenu') Navmenu
										ul.ls-unstyled
											li
												a(href='components.html#full-screen-menu') Full screen menu


	script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')
	script(src='js/styledown.js')
	script(src='js/scripts.js')
