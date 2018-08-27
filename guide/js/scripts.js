
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

} );

function fsMenuToggle() {

	$( '#open-fsmenu' ).click( function () {

		if ( ! $( '[class*="-fsmenu"]' ).hasClass( 'open' ) ) {

			$( 'body' ).css( 'overflow', 'hidden' );
			$( '[class*="-fsmenu"]' ).addClass( 'open' );
			$( this ).text( 'Close' );

		} else {

			fsMenuClose();

		}

	} );

	$( '[class*="-fsmenu"] li a, #lbl-night-mode' ).click( function () {

		fsMenuClose();

	} );

}

function fsMenuClose() {

	$( 'body' ).css( 'overflow', 'initial' );
	$( '[class*="-fsmenu"]' ).removeClass( 'open' );
	$( '#navbar__toggler' ).text( 'Menu' );

}

function switchNightMode() {

	if ( ! ( 'localStorage' in window ) ) return;

	var nightMode = localStorage.getItem( 'nightMode' );

	if ( nightMode ) {

		$( '#switch-night-mode' ).prop( 'checked', true );
		$( '#icon-night-mode' ).removeClass( 'ion-md-moon' ).addClass( 'ion-md-moon' );

	}

	switchNightModeStart( '#switch-night-mode' );

	$( '#switch-night-mode' ).change( function () {

		switchNightModeStart( $( this ) );

	} );

}

function switchNightModeStart( element ) {

	if ( $( element ).is( ':checked' ) ) {

		$( 'html' ).addClass( 'night fsmooth' );
		$( '#icon-night-mode' ).removeClass( 'ion-md-moon' ).addClass( 'ion-md-moon' );

		localStorage.setItem( 'nightMode', true );

	} else {

		$( 'html' ).removeClass( 'night fsmooth' );
		$( '#icon-night-mode' ).removeClass( 'ion-md-moon' ).addClass( 'ion-md-moon' );

		localStorage.removeItem( 'nightMode' );
	}

}
