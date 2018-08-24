
$( function () {

	$( '.doc-main .collapse' )
		.attr( 'data-collapsed', false )
		.data( 'collapsed', false )
		.not( '.show' )
		.attr( 'data-collapsed', true )
		.data( 'collapsed', true );

	function collapseSection( el ) {

		$( el )
			.removeClass( 'show' )
			.attr( 'data-collapsed', true )
			.data( 'collapsed', true );

	}

	function expandSection( el ) {

		$( el )
			.addClass( 'show' )
			.attr( 'data-collapsed', false )
			.data( 'collapsed', false );

	}

	$( '.doc-main [ data-toggle="collapse" ]' ).on( 'click', function( event ) {

		event.preventDefault();

		let _this = $( this );
		let target = _this.data( 'target' ) ? _this.data( 'target' ) : _this.attr( 'href' );
		var section = $( target );
		var isCollapsed = section.data( 'collapsed' );

		if ( isCollapsed ) {

			if ( ! section.hasClass( 'collapse--multiple' ) ) {

				let childrens = [];

				if ( section.data( 'parent' ) ) {

					const parent = section.data( 'parent' );

					childrens = _this.closest( parent ).find( '[ data-toggle="collapse" ]' ).not( _this );

				} else {

					childrens = _this.parent().children( '[ data-toggle="collapse" ]' ).not( _this );

				}

				$( childrens ).each( function () {

					let children = $( this ).data( 'target' ) ? $( this ).data( 'target' ) : $( this ).attr( 'href' );

					if ( ! $( children ).data( 'collapsed' ) ) {

						collapseSection( $( children ) );

					}

				} );

			}

			expandSection( section );

		} else {

			if ( ! section.hasClass( 'collapse--multiple' ) ) {

				let childrens = _this;

				$( childrens ).each( function () {

					let children = $( this ).data( 'target' ) ? $( this ).data( 'target' ) : $( this ).attr( 'href' );

					if ( ! $( children ).data( 'collapsed' ) ) {

						collapseSection( $( children ) );

					}

				} );

			} else {

				collapseSection( section );

			}

		}

	} );

} );
