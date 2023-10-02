/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	// ----------
	// main
	// ----------
	var container = document.getElementById( 'hpb-nav' ),
	    button    = container.getElementsByTagName( 'h3' )[0],
	    menu      = container.getElementsByTagName( 'ul' )[0];

	if ( undefined == button )
		return false;

	if( undefined == menu ) {
		button.style.display = 'none';
	} else {
		button.onclick = function() {
			if ( -1 == menu.className.indexOf( 'nav-menu' ))
				menu.className = 'nav-menu';

			if ( -1 != button.className.indexOf( 'toggled-on' )) {
				button.className = button.className.replace( ' toggled-on', '' );
				menu.className = menu.className.replace( ' toggled-on', '' );
			} else {
				button.className += ' toggled-on';
				menu.className += ' toggled-on';
			}
		};

		// Hide menu toggle button if menu is empty.
		if ( ! menu.childNodes.length )
			button.style.display = 'none';
	}

	// ----------
	// sub
	// ----------
	var containersub = document.getElementById( 'hpb-footerExtra1' );

	if ( undefined == containersub )
		return false;

	var buttonsub    = containersub.getElementsByTagName( 'h3' )[0],
	    menusub      = containersub.getElementsByTagName( 'ul' )[0];

	if ( undefined == buttonsub )
		return false;
		
	if( undefined == menusub ) {
		buttonsub.style.display = 'none';
	} else {
		buttonsub.onclick = function() {
			if ( -1 == menusub.className.indexOf( 'nav-menu' ))
				menusub.className = 'nav-menu';

			if ( -1 != buttonsub.className.indexOf( 'toggled-on' )) {
				buttonsub.className = buttonsub.className.replace( ' toggled-on', '' );
				menusub.className   = menusub.className.replace( ' toggled-on', '' );
			} else {
				buttonsub.className += ' toggled-on';
				menusub.className += ' toggled-on';
			}
		};

		// Hide menu toggle button if menu is empty.
		if ( ! menusub.childNodes.length )
			buttonsub.style.display = 'none';
	}
} )();