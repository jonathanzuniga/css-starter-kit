# Styleguide options

### Head

	meta( name='viewport', content='width=device-width, initial-scale=1' )

	link( rel='stylesheet', href='https://unpkg.com/ionicons@4.4.2/dist/css/ionicons.min.css' )
	link( rel='stylesheet', href='../dist/csssk.css' )
	link( rel='stylesheet', href='css/styledown.css' )
	link( rel='stylesheet', href='css/doc.css' )

	script().
		;( function ( window, document, undefined ) {

			'use strict';

			if ( ! ( 'localStorage' in window ) ) return;

			var nightMode = localStorage.getItem( 'nightMode' );

			if ( ! nightMode ) return;

			document.documentElement.classList.add( 'night', 'fsmooth' );

		} )( window, document );

### Body

	header.doc-header
		div.cntr
			div.row
				div.col
					nav.doc-navbar.navbar.md-navbar--expand.maxmd-jc-space-between
						div.navbar__brand
							div.navbar__item
								a( href='index.html' ).p-left-0 CSS Starter Kit
						div.navbar__toggler
							div.navbar__item.navbar__item--icn
								a( href="#!", id='open-fsmenu', data-target='#doc-navbar-collapse', data-toggle='collapse' ).p-right-0
									i.icon.ion-md-menu.navbar__icn
						div( id='doc-navbar-collapse' ).navbar__collapse.maxmd-d-none
							div.navbar__items
									a( href='index.html' ).navbar__item Preface
									a( href='layout-flex-grid.html' ).navbar__item Documentation

	div.cntr
		div.row
			div.doc-main.xs-col-12.md-col-10
				div.doc-main__content.row
					div.md-col-12.xl-col-12
						div( sg-content).sg-container

			div.doc-sidebar.xs-col-12.md-col-2.maxmd-fsmenu
				div.doc-sidebar__content.row
					div.col
						div( id='doc-accordion' ).row.maxmd-ta-center
							div.col-12.md-d-none
								p
									button( id='close-fsmenu' ).btn.btn--link.close-fsmenu
										i.icon.ion-md-close

							div.col-12
								h3( data-target='#doc-accordion-collapse-layout', data-toggle='collapse' ).h5.ac-c Layout
								div( id='doc-accordion-collapse-layout', data-parent='#doc-accordion' ).maxmd-jc-center.collapse.show
									ul.ls
										li
											a( href='layout-flex-grid.html' ) Flex grid
										li
											a( href='layout-flex-direction.html' ) Flex direction
										li
											a( href='layout-flex-grow.html' ) Flex grow
										li
											a( href='layout-grid.html' ) Grid
										li
											a( href='layout-gutter.html' ) Gutter
										li
											a( href='layout-modifier-horizontal.html' ) Horizontal modifier
										li
											a( href='layout-modifier-vertical.html' ) Vertical modifier
										li
											a( href='layout-offset.html' ) Offset
										li
											a( href='layout-order.html' ) Order

							div.col-12
								h3( data-target='#doc-accordion-collapse-elements', data-toggle='collapse' ).h5.ac-c Elements
								div( id='doc-accordion-collapse-elements', data-parent='#doc-accordion' ).maxmd-jc-center.collapse
									ul.ls
										li
											a( href='elements-base.html' ) Base
										li
											a( href='elements-box.html' ) Box
										li
											a( href='elements-button.html' ) Button
										li
											a( href='elements-button-group.html' ) Button group
										li
											a( href='elements-file-area.html' ) File area
										li
											a( href='elements-form.html' ) Form
										li
											a( href='elements-input-group.html' ) Input group
										li
											a( href='elements-item-group.html' ) Item group
										li
											a( href='elements-list.html' ) List
										li
											a( href='elements-switch.html' ) Switch
										li
											a( href='elements-table.html' ) Table
										li
											a( href='elements-toolbar.html' ) Toolbar

							div.col-12
								h3( data-target='#doc-accordion-collapse-helpers', data-toggle='collapse' ).h5.ac-c Helpers
								div( id='doc-accordion-collapse-helpers', data-parent='#doc-accordion' ).maxmd-jc-center.collapse
									ul.ls
										li
											a( href='helpers-border.html' ) Border
										li
											a( href='helpers-border-radius.html' ) Border radius
										li
											a( href='helpers-border-style.html' ) Border style
										li
											a( href='helpers-border-width.html' ) Border width
										li
											a( href='helpers-box-shadow.html' ) Box shadow
										li
											a( href='helpers-clearfix.html' ) Clearfix
										li
											a( href='helpers-color.html' ) Color
										li
											a( href='helpers-display.html' ) Display
										li
											a( href='helpers-float.html' ) Float
										li
											a( href='helpers-font-size.html' ) Font size
										li
											a( href='helpers-font-weight.html' ) Font weight
										li
											a( href='helpers-margin.html' ) Margin
										li
											a( href='helpers-opacity.html' ) Opacity
										li
											a( href='helpers-padding.html' ) Padding
										li
											a( href='helpers-position.html' ) Position
										li
											a( href='helpers-text.html' ) Text
										li
											a( href='helpers-text-align.html' ) Text align
										li
											a( href='helpers-text-transform.html' ) Text transform
										li
											a( href='helpers-visibility.html' ) Visibility
										li
											a( href='helpers-width.html' ) Width

							div.col-12
								h3( data-target='#doc-accordion-collapse-components', data-toggle='collapse' ).h5.ac-c Components
								div( id='doc-accordion-collapse-components', data-parent='#doc-accordion' ).maxmd-jc-center.collapse
									ul.ls
										li
											a( href='components-card.html' ) Card
										li
											a( href='components-collapse.html' ) Collapse
										li
											a( href='components-drawer.html' ) Drawer
										li
											a( href='components-menu.html' ) Menu
										li
											a( href='components-modal.html' ) Modal
										li
											a( href='components-navbar.html' ) Navbar
										li
											a( href='components-navmenu.html' ) Navmenu
										li
											a( href='components-tabs.html' ) Tabs

							div.col-12
								div.item-group.ai-center.maxmd-jc-center
									div.item.fxg-0
										div.doc-switch-night-mode.sw.sw--sm
											input( id='switch-night-mode', type='checkbox' )
											label( for='switch-night-mode', id='lbl-night-mode' )
									div.item.fxg-0
										span
											i( title='Night mode', id='icon-night-mode' ).ion-ios-moon.doc-icn

	script( src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js' )
	script( src='js/jquery.collapse.js' )
	script( src='js/jquery.collapse_storage.js' )
	script( src='js/styledown.js' )
	script( src='js/scripts.js' )
	script( src='js/components/collapse.js' )
	script( src='js/components/modal.js' )
