
$( function () {

	// Source: https://css-tricks.com/using-css-transitions-auto-dimensions/

	function collapseSection( element ) {

		// get the height of the element's inner content, regardless of its actual size

		var sectionHeight = $( element )[ 0 ].scrollHeight;

		// on the next frame (as soon as the previous style change has taken effect),
		// explicitly set the element's height to its current pixel height, so we
		// aren't transitioning out of 'auto'

		requestAnimationFrame( function () {

			$( element ).css( 'height', sectionHeight + 'px' );

			// on the next frame (as soon as the previous style change has taken effect),
			// have the element transition to height: 0

			requestAnimationFrame( function () {

				$( element ).css( 'height', 0 );

			} );

		} );

		// mark the section as "currently collapsed"

		$( element ).data( 'collapsed', true );
		$( element ).removeClass( 'show' );

	}

	function expandSection( element ) {

		// get the height of the element's inner content, regardless of its actual size

		var sectionHeight = $( element )[ 0 ].scrollHeight;

		// have the element transition to the height of its inner content

		$( element ).css( 'height', sectionHeight + 'px' );

		// when the next css transition finishes (which should be the one we just triggered)

		$( element ).on( 'transitionend', function( e ) {

			// remove this event listener so it only gets triggered once

			$( element ).off( 'transitionend', arguments.callee );

			// remove "height" from the element's inline styles, so it can return to its initial value

			$( element ).css( 'height', 'auto' );

		} );

		// mark the section as "currently not collapsed"

		$( element ).data( 'collapsed', false );
		$( element ).addClass( 'show' );

	}

	$( '[ data-toggle="collapse" ]' ).on( 'click', function( event ) {

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

						console.log( children );

						collapseSection( $( children ) );

						$( children ).attr( 'data-collapsed', true );

					}

				} );

			}

			expandSection( section );

			section.attr( 'data-collapsed', false );

		} else {

			if ( ! section.hasClass( 'collapse--multiple' ) ) {

				let childrens = _this;

				$( childrens ).each( function () {

					let children = $( this ).data( 'target' ) ? $( this ).data( 'target' ) : $( this ).attr( 'href' );

					if ( ! $( children ).data( 'collapsed' ) ) {

						collapseSection( $( children ) );

						$( children ).attr( 'data-collapsed', true );

					}

				} );

			} else {

				collapseSection( section );

				section.attr( 'data-collapsed', true );

			}

		}

	} );

	$( '.collapse' )
		.css( 'display', 'block' )
		.attr( 'data-collapsed', false )
		.not( '.show' )
		.css( 'height', 0 )
		.attr( 'data-collapsed', true );

} );
