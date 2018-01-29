$(function() {
	var url = window.location.pathname;
	var page = url.substring(url.lastIndexOf('/') + 1)
	var pagename = page.replace('.html', '');

	// Comparar cada texto de .collapse__toggler y si es el mismo checar el radio button.
	$('.doc-sidebar .collapse__toggler').each(function() {
		if ($(this).text().trim().toLowerCase() == pagename)
			$(this).prev('.collapse-toggle').prop('checked', true);
	});

	// Obtener el anchor de la url.
	var hash = window.location.hash.substr(1);

	// Agregar la clase .active al item de la lista del sidebar menu que coincida con el anchor.
	$('.doc-sidebar a[href$="#' + hash + '"]').parent().addClass('active');

	fsMenuToggle();
	switchNightMode();

	if (window.location.hash)
		smoothScroll(window.location.hash);
	
	$('.doc-sidebar a').click(function() {
		var href = $(this).attr('href').split('#');
		var anchor = href[1];
		if (page == href[0])
			smoothScroll('#' + anchor);

		$('.doc-sidebar li').removeClass('active');
		$(this).parent().addClass('active');
	});

	// Agregar clase .active al item del menu del navbar.
	$('.doc-navbar .navbar__link[href="' + page + '"]').parent().addClass('active');
	if (!$('.doc-navbar .navbar__item:first').hasClass('active'))
		$('.doc-navbar .navbar__item:last').addClass('active');
});

function fsMenuToggle() {
	$('#open-fsmenu').click(function() {
		if (!$('[class*="-fsmenu"]').hasClass('open')) {
			$('body').css('overflow', 'hidden');
			$('[class*="-fsmenu"]').addClass('open');
			$(this).text('Close');
		}
		else {
			fsMenuClose();
		}
	});

	$('[class*="-fsmenu"] a, #lbl-night-mode').click(function() {
		fsMenuClose();
	});
}

function fsMenuClose() {
	$('body').css('overflow', 'initial');
	$('[class*="-fsmenu"]').removeClass('open');
	$('.navbar__toggler').text('Menu');
}

function switchNightMode() {
	if (!('localStorage' in window)) return;

	var nightMode = localStorage.getItem('nightMode');
	if (nightMode) {
		$('#switch-night-mode').prop('checked', true);
		$('#icon-night-mode').removeClass('ion-ios-moon-outline').addClass('ion-ios-moon');
	}

	switchNightModeStart('#switch-night-mode');
	$('#switch-night-mode').change(function() {
		switchNightModeStart($(this));
	});
}

function switchNightModeStart(element) {
	if ($(element).is(':checked')) {
		$('html').addClass('night txt-smooth');
		$('#icon-night-mode').removeClass('ion-ios-moon-outline').addClass('ion-ios-moon');
		localStorage.setItem('nightMode', true);
	}
	else {
		$('html').removeClass('night txt-smooth');
		$('#icon-night-mode').removeClass('ion-ios-moon').addClass('ion-ios-moon-outline');
		localStorage.removeItem('nightMode');
	}
}

function smoothScroll($url) {
	$('html, body').animate({
		scrollTop: $($url).offset().top - 80
	}, 500);
}
