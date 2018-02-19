# Styleguide options

### Head

	meta(name='viewport', content='width=device-width, initial-scale=1')

	link(rel='stylesheet', href='css/styledown.css')
	link(rel='stylesheet', href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css')
	link(rel='stylesheet', href='../dist/csssk.css')
	link(rel='stylesheet', href='css/doc.css')

	script().
		;(function (window, document, undefined) {
			'use strict';

			if (!('localStorage' in window)) return;
			
			var nightMode = localStorage.getItem('nightMode');
			if (!nightMode) return;
			
			document.documentElement.classList.add('night', 'txt-smooth');
		})(window, document);

### Body

	div.container-fluid
		div.cols
			div.col
				nav.doc-navbar.navbar.maxmd-navbar-responsive.fixed
					input(type='checkbox', id='doc-navbar-toggle').collapse-toggle
					div.navbar__brand
						a(href='index.html').navbar__link CSS Starter Kit
					label(for='doc-navbar-toggle', id='open-fsmenu').navbar__toggler.md-d-none Menu
					div.navbar__collapse.collapse.maxmd-d-none
						ul.navbar__menu
							li.navbar__item
								a(href='index.html').navbar__link Preface
							li.navbar__item
								a(href='layout.html').navbar__link Documentation

		div.cols.cols--center
			div.doc-main.xs-col-12.md-col-10.xl-col-8
				div.doc-main__content.cols
					div.md-col-12.xl-col-12
						div(sg-content).sg-container

			div.doc-sidebar.xs-col-12.md-col-2.xl-col-1.maxmd-fsmenu
				div.doc-sidebar__content.cols
					div.col
						div.cols.maxmd-ta-center
							div.col-12
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

							div.col-12
								div
									input(id='doc-sidebar-collapse-toggle-2', name='doc-sidebar-collapse', type='radio').collapse-toggle
									label(for='doc-sidebar-collapse-toggle-2').collapse__toggler.h5 Elements
									div.collapse
										ul.ls-unstyled
											li
												a(href='elements.html#base') Base
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

							div.col-12
								div
									input(id='doc-sidebar-collapse-toggle-3', name='doc-sidebar-collapse', type='radio').collapse-toggle
									label(for='doc-sidebar-collapse-toggle-3').collapse__toggler.h5 Helpers
									div.collapse
										ul.ls-unstyled
											li
												a(href='helpers.html#border-radius') Border radius
											li
												a(href='helpers.html#border-style') Border style
											li
												a(href='helpers.html#border-width') Border width
											li
												a(href='helpers.html#clearfix') Clearfix
											li
												a(href='helpers.html#color') Color
											li
												a(href='helpers.html#display') Display
											li
												a(href='helpers.html#float') Float
											li
												a(href='helpers.html#font-weight') Font weight
											li
												a(href='helpers.html#margin') Margin
											li
												a(href='helpers.html#opacity') Opacity
											li
												a(href='helpers.html#padding') Padding
											li
												a(href='helpers.html#position') Position
											li
												a(href='helpers.html#text') Text
											li
												a(href='helpers.html#text-transform') Text transform
											li
												a(href='helpers.html#other-text-helpers') Other text helpers
											li
												a(href='helpers.html#text-align') Text align
											li
												a(href='helpers.html#visibility') Visibility

							div.col-12
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

								p.m-top-16
									input(id='switch-night-mode', type='checkbox').switch.switch--sm
									label(for='switch-night-mode', id='lbl-night-mode')
										span
											i(title='Night mode', id='icon-night-mode').ion-ios-moon-outline

	script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')
	script(src='js/styledown.js')
	script(src='js/scripts.js')
