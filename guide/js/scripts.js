$( function () {

	var url = window.location.pathname;
	var page = url.substring( url.lastIndexOf( '/' ) + 1 )
	var pagename = page.replace( '.html', '' );
	var section = pagename.substring( 0, pagename.indexOf( '-' ) );
	var subsection = pagename.substring( pagename.indexOf( '-' ) + 1 );

	// Comparar cada texto de .collapse__toggler y si es el mismo checar el radio button.

	$( '.doc-sidebar .collapse__toggler' ).each( function () {

		if ( $( this ).text().trim().toLowerCase() == section )
			$( this ).prev( '.collapse-toggle' ).prop( 'checked', true );

	} );

	// Agregar la clase .active al item de la lista del sidebar menu que coincida con el anchor.

	$( '.doc-sidebar a[href="' + page + '"]' ).parent().addClass( 'active' );

	sbCollapse();
	fsMenuToggle();
	switchNightMode();

	// Agregar clase .active al item del menu del navbar.

	$( '.doc-navbar .navbar__link[href="' + page + '"]' ).parent().addClass( 'active' );

	if ( ! $( '.doc-navbar .navbar__item:first' ).hasClass( 'active' ) )
		$( '.doc-navbar .navbar__item:last' ).addClass( 'active' );

	// Launch and close standard modal.

	$( '#eg-btn-open-std-modal, #eg-std-modal .btn, #eg-std-modal .modal__overlay' ).click( function () {

		$( '#eg-std-modal' ).toggleClass( 'show' );

	} );

} );

function sbCollapse() {

	$( '.doc-sidebar .collapse' ).each( function () {

		var collapse_height = $( this ).css( {
			'height': 'auto',
			'max-height': 'none',
			'overflow': 'auto'
		} ).height();

		$( this )
			.data( 'collapse-open-height', collapse_height )
			.removeAttr( 'style' )
			.css( 'height', $( this ).height() );

	} );

	$( '.doc-sidebar .collapse__toggler' ).click( function () {

		$( '.doc-sidebar .collapse-toggle' ).prop( 'checked', false );
		$( '.doc-sidebar .collapse' ).css( 'height', 0 );

		$( this )
			.next( '.collapse' )
			.css( 'height', $( this )
				.next( '.collapse' )
				.data( 'collapse-open-height' ) );

	} );

}

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
