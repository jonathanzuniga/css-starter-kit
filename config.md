# Styleguide options

### Head

	meta(name='viewport', content='width=device-width, initial-scale=1')

	link(rel='stylesheet', href='css/styledown.css')
	link(rel='stylesheet', href='../dist/all.css')

	style(type='text/css').
		.sidebar {
			font-size: 14px;
		}

		h2 {
			margin-bottom: 1.25rem;
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
			border-radius: 50%;
			width: 48px;
			height: 48px;
		}

		.h-100px {
			height: 100px;
		}

		.sg-block:last-of-type {
			border-bottom: none;
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
				position: relative;
			}
		}

		.sidebar__content,
		.main {
			padding-top: 2.5rem;
			padding-bottom: 2.5rem;
		}

		.sg-block {
			border-top-color: #e8e9ec;
			margin: 0;
		}

		.night .sg-block {
			border-top-color: #3a3b3e;
		}

		.night .sg-expando::before {
			background-color: rgba(255, 255, 255, 0.1);
		}

		.night .sg-expando:hover::before {
			background-color: rgba(255, 255, 255, 0.4);
		}

		.night .sg-code {
			background: #fafaff !important;
		}

		.drawer {
			position: absolute;
		}

### Body

	div.container-fluid
		div.row.md-hide
			div.col
				nav.navbar.navbar-responsive.bd-bottom.fixed.ac-txtc
					div.navbar__brand
						a(href='/').navbar__link CSS Starter Kit
					a(href='#!', id='open-fsmenu').navbar__toggler Menu

		div.row
			div.main.xs-col-12.md-col-9.xl-col-10.maxmd-p-top-20
				div.main__content.row.cols-center
					div.md-col-12.xl-col-10
						div(sg-content).sg-container

			div.sidebar.xs-col-12.md-col-3.xl-col-2.maxmd-fsmenu.maxmd-p-top-12
				div.sidebar__content.row
					div.col
						h1.h2.maxmd-hide.bd-bottom.p-bottom-5.m-top-1.m-bottom-5 CSS Starter Kit

						//- p
						//- 	b DISCLAIMER - This is a very early stage work in progress project

						//- p CSS Starter Kit is a collection of css classes to help you create and deploy web projects quickly.

						//- p CSS Starter Kit is currently under development and in its very early stages. Check back often to see how it's progressing.

						//- br

						div.row
							div.xs-col-12.sm-col-6.md-col-12
								h6.txt-uc Layout

								ul.menu.menu--pills.flex-col
									li
										a(href='layout.html#flex-grid') Flex grid
									li
										a(href='layout.html#gutter') Gutter
									li
										a(href='layout.html#horizontal-modifiers') Horizontal modifiers
									li
										a(href='layout.html#vertical-modifiers') Vertical modifiers
									li
										a(href='layout.html#offset') Offset
									li
										a(href='layout.html#grid') Grid

							div.xs-col-12.sm-col-6.md-col-12
								h6.txt-uc Elements

								ul.menu.menu--pills.flex-col
									li
										a(href='elements.html#content') Content
									li
										a(href='elements.html#form') Form
									li
										a(href='elements.html#button') Button
									li
										a(href='elements.html#button-group') Button group
									li
										a(href='elements.html#input-group') Input group
									li
										a(href='elements.html#switch') Switch
									li
										a(href='elements.html#list') List
									li
										a(href='elements.html#table') Table

							div.xs-col-12.sm-col-6.md-col-12
								h6.txt-uc Helpers

								ul.menu.menu--pills.flex-col
									li
										a(href='helpers.html#border') Border
									li
										a(href='helpers.html#clearfix') Clearfix
									li
										a(href='helpers.html#color') Color
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

								ul.menu.menu--pills.flex-col
									li
										a(href='components.html#card') Card
									li
										a(href='components.html#drawer') Drawer
									li
										a(href='components.html#menu') Menu
									li
										a(href='components.html#navbar') Navbar
									li
										a(href='components.html#navmenu') Navmenu
									li
										a(href='components.html#tabs') Tabs
						
						p.m-top-4.m-bottom-4
							input(id='switch-night-mode', type='checkbox').switch.switch--sm
							label(for='switch-night-mode', id='lbl-night-mode')
								span Night mode

	script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')
	script(src='js/styledown.js')
	script(src='js/scripts.js')
