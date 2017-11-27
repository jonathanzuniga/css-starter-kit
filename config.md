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

		//- .sidebar h1 {
		//- 	margin-top: -0.25rem;
		//- }

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
				nav.navbar.navbar-responsive.bd-bottom.fixed.ac-txtc
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
						h1.h2.bd-bottom.m-bottom-5.p-bottom-5.maxsm-hide CSS Starter Kit

						p
							b DISCLAIMER - This is a very early stage work in progress project

						p CSS Starter Kit is a collection of css classes to help you create and deploy web projects quickly.

						p CSS Starter Kit is currently under development and in its very early stages. Check back often to see how it's progressing.

						div.row
							div.xs-col-12.sm-col-6.md-col-12
								h6.txt-uc Layout

								ul.nav.flex-col
									li
										a(href='layout.html#flex-grid') Flex grid
									li
										a(href='layout.html#grid') Grid
									li
										a(href='layout.html#gutters') Gutters
									li
										a(href='layout.html#horizontal-modifiers') Horizontal modifiers
									li
										a(href='layout.html#vertical-modifiers') Vertical modifiers
									li
										a(href='layout.html#offsets') Offsets

							div.xs-col-12.sm-col-6.md-col-12
								h6.txt-uc Elements

								ul.nav.flex-col
									li
										a(href='elements.html#content') Content
									li
										a(href='elements.html#forms') Forms
									li
										a(href='elements.html#buttons') Buttons
									li
										a(href='elements.html#button-group') Button group
									li
										a(href='elements.html#input-group') Input group
									li
										a(href='elements.html#lists') Lists
									li
										a(href='elements.html#tables') Tables

							div.xs-col-12.sm-col-6.md-col-12
								h6.txt-uc Helpers

								ul.nav.flex-col
									li
										a(href='helpers.html#borders') Borders
									li
										a(href='helpers.html#border-radius') Border radius
									li
										a(href='helpers.html#clearfix') Clearfix
									li
										a(href='helpers.html#colors') Colors
									li
										a(href='helpers.html#float') Float
									li
										a(href='helpers.html#hiding') Hiding
									li
										a(href='helpers.html#sizing') Sizing
									li
										a(href='helpers.html#spacing') Spacing
									li
										a(href='helpers.html#text') Text
									li
										a(href='helpers.html#text-alignment') Text alignment
									li
										a(href='helpers.html#text-transform') Text transform
									li
										a(href='helpers.html#other-text-helpers') Other text helpers

							div.xs-col-12.sm-col-6.md-col-12
								h6.txt-uc Components

								ul.nav.flex-col
									li
										a(href='components.html#cards') Cards
									li
										a(href='components.html#navbar') Navbar
									li
										a(href='components.html#navmenu') Navmenu
						
						p.m-top-4.m-bottom-4 
							input(id='switch-night-mode', type='checkbox').switch.switch--sm
							label(for='switch-night-mode', id='lbl-night-mode')
								span Night mode

	script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')
	script(src='js/styledown.js')
	script(src='js/scripts.js')
