
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

	// Comparar cada texto de [ data-toggle="collapse" ] y si es el mismo agregar la clase show.

	$( '.doc-sidebar [ data-toggle="collapse" ]' ).each( function () {

		if ( $( this ).text().trim().toLowerCase() == section ) {

			$( '.collapse' ).removeClass( 'show' );
			$( this ).next( '.collapse' ).addClass( 'show' );

		}

	} );

	// Agregar la clase .active al item de la lista del sidebar menu que coincida con el anchor.

	$( '.doc-sidebar a[ href="' + page + '" ]' ).parent().addClass( 'active' );

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

	$( '[class*="-fsmenu"] a, #lbl-night-mode' ).click( function () {

		fsMenuClose();

	} );

}

function fsMenuClose() {

	$( 'body' ).css( 'overflow', 'initial' );
	$( '[class*="-fsmenu"]' ).removeClass( 'open' );
	$( '.navbar__toggler' ).text( 'Menu' );

}

function switchNightMode() {

	if ( ! ( 'localStorage' in window ) ) return;

	var nightMode = localStorage.getItem( 'nightMode' );

	if ( nightMode ) {

		$( '#switch-night-mode' ).prop( 'checked', true );
		$( '#icon-night-mode' ).removeClass( 'ion-ios-moon-outline' ).addClass( 'ion-ios-moon' );

	}

	switchNightModeStart( '#switch-night-mode' );

	$( '#switch-night-mode' ).change( function () {

		switchNightModeStart( $( this ) );

	} );

}

function switchNightModeStart( element ) {

	if ( $( element ).is( ':checked' ) ) {

		$( 'html' ).addClass( 'night fsmooth' );
		$( '#icon-night-mode' ).removeClass( 'ion-ios-moon-outline' ).addClass( 'ion-ios-moon' );

		localStorage.setItem( 'nightMode', true );

	} else {

		$( 'html' ).removeClass( 'night fsmooth' );
		$( '#icon-night-mode' ).removeClass( 'ion-ios-moon' ).addClass( 'ion-ios-moon-outline' );

		localStorage.removeItem( 'nightMode' );
	}

}
