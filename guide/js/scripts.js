
$( function () {

	var url = window.location.pathname;
	var page = url.substring( url.lastIndexOf( '/' ) + 1 )
	var pagename = page.replace( '.html', '' );
	var section = pagename.substring( 0, pagename.indexOf( '-' ) );
	var subsection = pagename.substring( pagename.indexOf( '-' ) + 1 );

	// Agregar clase .active al item del menu del navbar.

	$( '.doc-navbar .navbar__items a[ href="' + page + '" ]' ).parent().addClass( 'active' );

	if ( ! $( '.doc-navbar .navbar__items .navbar__item:first' ).hasClass( 'active' ) )
		$( '.doc-navbar .navbar__items .navbar__item:last' ).addClass( 'active' );

	// Agregar la clase .active al item de la lista del sidebar menu que coincida con el anchor.

	$( '.doc-sidebar a[ href="' + page + '" ]' ).parent().addClass( 'active' );

	// jQuery Collapse

	$( '#doc-accordion' ).collapse( {

		query: '[ data-toggle="collapse" ]',
		accordion: true,
		persist: true,

		open: function () {

			this.addClass( 'open' )
				.css( { height: this.children().outerHeight() } );

		},

		close: function () {

			this.css( { height: 0 } )
				.removeClass( 'open' );

		}

	} );

	let expandedItem = $( '.doc-sidebar .collapse[ aria-hidden="false" ]' )

	$( '.doc-sidebar .collapse[ aria-hidden="false" ]' )
		.addClass( 'open' )
		.css( { height: expandedItem.children().outerHeight() } );

	fsMenuToggle();
	switchNightMode();
	mobileMenuToggle();

} );

function fsMenuToggle() {

	$( '#open-fsmenu' ).click( function () {

		if ( ! $( '[class*="-fsmenu"]' ).hasClass( 'open' ) ) {

			$( 'body' ).css( 'overflow', 'hidden' );
			$( '[class*="-fsmenu"]' ).addClass( 'open' );

		} else {

			fsMenuClose();

		}

	} );

	$( '#close-fsmenu, #lbl-night-mode' ).click( function () {

		fsMenuClose();

	} );

}

function fsMenuClose() {

	$( 'body' ).css( 'overflow', 'initial' );
	$( '[class*="-fsmenu"]' ).removeClass( 'open' );

}

function switchNightMode() {

	if ( ! ( 'localStorage' in window ) ) return;

	var nightMode = localStorage.getItem( 'nightMode' );

	if ( nightMode ) {

		$( '#switch-night-mode' ).prop( 'checked', true );

	}

	switchNightModeStart( '#switch-night-mode' );

	$( '#switch-night-mode' ).change( function () {

		switchNightModeStart( $( this ) );

	} );

}

function switchNightModeStart( element ) {

	if ( $( element ).is( ':checked' ) ) {

		$( 'html' ).addClass( 'night fsmooth' );

		localStorage.setItem( 'nightMode', true );

	} else {

		$( 'html' ).removeClass( 'night fsmooth' );

		localStorage.removeItem( 'nightMode' );

	}

}

function updateMobileMenuWrapSize() {

	let wrap = $( '.doc-mobile-menu' ).closest( '.sg-canvas' );

	wrap.css( 'overflow', 'hidden' );

	let bigWrap = wrap.width() * 2.5;

	$( '.burger__circle' ).css( {
		'width': bigWrap,
		'height': bigWrap
	} );

}

function mobileMenuToggle() {

	updateMobileMenuWrapSize();

	$( window ).resize( function () {

		updateMobileMenuWrapSize();

	} );

	$( '#burger' ).click( function () {

		if ( ! $( 'body' ).hasClass( 'mobile-menu-open' ) ) {

			$( 'body' )
				// .css( 'overflow', 'hidden' )
				.addClass( 'mobile-menu-open' );

		} else {

			$( 'body' )
				// .css( 'overflow', 'initial' )
				.removeClass( 'mobile-menu-open' );

		}

	} );

}
