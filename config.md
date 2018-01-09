# Styleguide options

### Head

	meta(name='viewport', content='width=device-width, initial-scale=1')

	link(rel='stylesheet', href='css/styledown.css')
	link(rel='stylesheet', href='../dist/all.css')

	style(type='text/css').
		.doc-navbar {
			background-color: #f3f3f3;
		}

		.night .doc-navbar {
			background-color: #0a0a0b;
		}

		.doc-sidebar {
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

		.doc-color-swatch {
			border-radius: 50%;
			width: 48px;
			height: 48px;
		}

		.doc-h-100px {
			height: 100px;
		}

		.sg-block:last-of-type {
			border-bottom: none;
		}

		@media (min-width: 1024px) {
			.doc-sidebar {
				/* Make it sticky. */
				max-height: 100vh;
				position: -webkit-sticky;
				position: sticky;
				top: 0;
			}

			.doc-sidebar__content {
				max-height: 100vh;
				overflow-x: hidden;
				overflow-y: auto;
				position: relative;
			}
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

		.doc-drawer {
			position: absolute;
		}

		.doc-sidebar .collapse__toggler:hover {
			cursor: pointer;
		}

		.doc-sidebar .collapse__toggler, 
		.doc-sidebar .ls-unstyled a {
			display: block;
			padding: 0.25rem 0;
		}

### Body

	div.container-fluid
		div.row
			div.col
				nav.doc-navbar.navbar.maxmd-navbar-responsive.fixed.ac-txtc
					div.navbar__brand
						a(href='layout.html').navbar__link CSS Starter Kit
					a(href='#!', id='open-fsmenu').navbar__toggler.md-hide Menu
					div.navbar__collapse
						ul.navbar__menu
							li.navbar__item
								a(href='layout.html').navbar__link Documentation
							li.navbar__item
								a(href='index.html').navbar__link About

		div.row
			div.main.xs-col-12.md-col-9.xl-col-10
				div.main__content.row.cols-center.p-top-20
					div.md-col-12.xl-col-10
						div(sg-content).sg-container

			div.doc-sidebar.xs-col-12.md-col-3.xl-col-2.maxmd-fsmenu
				div.doc-sidebar__content.row.p-top-20
					div.col
						div.row.ac-txtc
							div.xs-col-12.sm-col-6.md-col-12
								div
									input(id='doc-sidebar-collapse-toggle-1', name='doc-sidebar-collapse', type='radio').collapse-toggle
									label(for='doc-sidebar-collapse-toggle-1').collapse__toggler.h5 Layout
									div.collapse
										ul.ls-unstyled
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
								div
									input(id='doc-sidebar-collapse-toggle-2', name='doc-sidebar-collapse', type='radio').collapse-toggle
									label(for='doc-sidebar-collapse-toggle-2').collapse__toggler.h5 Elements
									div.collapse
										ul.ls-unstyled
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
								div
									input(id='doc-sidebar-collapse-toggle-3', name='doc-sidebar-collapse', type='radio').collapse-toggle
									label(for='doc-sidebar-collapse-toggle-3').collapse__toggler.h5 Helpers
									div.collapse
										ul.ls-unstyled
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
								div
									input(id='doc-sidebar-collapse-toggle-4', name='doc-sidebar-collapse', type='radio').collapse-toggle
									label(for='doc-sidebar-collapse-toggle-4').collapse__toggler.h5 Components
									div.collapse
										ul.ls-unstyled
											li
												a(href='components.html#card') Card
											li
												a(href='components.html#collapse') Collapse
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

								p.m-top-10
									input(id='switch-night-mode', type='checkbox').switch.switch--sm
									label(for='switch-night-mode', id='lbl-night-mode')
										span Night mode

	script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')
	script(src='js/styledown.js')
	script(src='js/scripts.js')
