# Styleguide options

### Head

	meta(name='viewport', content='width=device-width, initial-scale=1')

	link(rel='stylesheet', href='http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css')
	link(rel='stylesheet', href='../dist/csssk.css')
	link(rel='stylesheet', href='css/styledown.css')
	link(rel='stylesheet', href='css/doc.css')

	script().
		;(function (window, document, undefined) {
			'use strict';

			if (!('localStorage' in window)) return;
			
			var nightMode = localStorage.getItem('nightMode');
			if (!nightMode) return;
			
			document.documentElement.classList.add('night', 'fsmooth');
		})(window, document);

### Body

	div.container-fluid
		div.cols
			div.col
				nav.doc-navbar.navbar.maxmd-navbar-responsive.navbar--fixed
					input(type='checkbox', id='doc-navbar-toggle').collapse-toggle
					div.navbar__brand
						a(href='index.html').navbar__link CSS Starter Kit
					label(for='doc-navbar-toggle', id='open-fsmenu').navbar__toggler.md-d-none Menu
					div.navbar__collapse.collapse.maxmd-d-none
						ul.navbar__menu
							li.navbar__item
								a(href='index.html').navbar__link Preface
							li.navbar__item
								a(href='layout-flex-grid.html').navbar__link Documentation

		div.cols
			div.doc-main.xs-col-12.md-col-10.xl-col-11
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
												a(href='layout-flex-grid.html') Flex grid
											li
												a(href='layout-gutter.html') Gutter
											li
												a(href='layout-modifier-horizontal.html') Horizontal modifier
											li
												a(href='layout-modifier-vertical.html') Vertical modifier
											li
												a(href='layout-offset.html') Offset
											li
												a(href='layout-order.html') Order
											li
												a(href='layout-grid.html') Grid

							div.col-12
								div
									input(id='doc-sidebar-collapse-toggle-2', name='doc-sidebar-collapse', type='radio').collapse-toggle
									label(for='doc-sidebar-collapse-toggle-2').collapse__toggler.h5 Elements
									div.collapse
										ul.ls-unstyled
											li
												a(href='elements-base.html') Base
											li
												a(href='elements-form.html') Form
											li
												a(href='elements-button.html') Button
											li
												a(href='elements-button-group.html') Button group
											li
												a(href='elements-input-group.html') Input group
											li
												a(href='elements-switch.html') Switch
											li
												a(href='elements-list.html') List
											li
												a(href='elements-table.html') Table

							div.col-12
								div
									input(id='doc-sidebar-collapse-toggle-3', name='doc-sidebar-collapse', type='radio').collapse-toggle
									label(for='doc-sidebar-collapse-toggle-3').collapse__toggler.h5 Helpers
									div.collapse
										ul.ls-unstyled
											li
												a(href='helpers-border-radius.html') Border radius
											li
												a(href='helpers-border-style.html') Border style
											li
												a(href='helpers-border-width.html') Border width
											li
												a(href='helpers-border.html') Border
											li
												a(href='helpers-clearfix.html') Clearfix
											li
												a(href='helpers-color.html') Color
											li
												a(href='helpers-display.html') Display
											li
												a(href='helpers-float.html') Float
											li
												a(href='helpers-font-size.html') Font size
											li
												a(href='helpers-font-weight.html') Font weight
											li
												a(href='helpers-margin.html') Margin
											li
												a(href='helpers-opacity.html') Opacity
											li
												a(href='helpers-padding.html') Padding
											li
												a(href='helpers-position.html') Position
											li
												a(href='helpers-text-align.html') Text align
											li
												a(href='helpers-text-transform.html') Text transform
											li
												a(href='helpers-text.html') Text
											li
												a(href='helpers-visibility.html') Visibility
											li
												a(href='helpers-width.html') Width

							div.col-12
								div
									input(id='doc-sidebar-collapse-toggle-4', name='doc-sidebar-collapse', type='radio').collapse-toggle
									label(for='doc-sidebar-collapse-toggle-4').collapse__toggler.h5 Components
									div.collapse
										ul.ls-unstyled
											li
												a(href='components-card.html') Card
											li
												a(href='components-collapse.html') Collapse
											li
												a(href='components-drawer.html') Drawer
											li
												a(href='components-menu.html') Menu
											li
												a(href='components-navbar.html') Navbar
											li
												a(href='components-navmenu.html') Navmenu
											li
												a(href='components-tabs.html') Tabs

								p.m-top-16
									input(id='switch-night-mode', type='checkbox').switch.switch--sm
									label(for='switch-night-mode', id='lbl-night-mode')
										span
											i(title='Night mode', id='icon-night-mode').ion-ios-moon-outline

	script(src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js')
	script(src='js/styledown.js')
	script(src='js/scripts.js')
