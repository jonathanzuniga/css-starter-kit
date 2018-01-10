$(function() {
	var url = window.location.pathname;
	var page = url.substring(url.lastIndexOf('/') + 1)
	var pagename = page.replace('.html', '');

	// Comparar cada texto de .collapse__toggler y si es el mismo checar el radio button.
	$('.collapse__toggler').each(function() {
		if ($(this).text().trim().toLowerCase() == pagename)
			$(this).prev('.collapse-toggle').prop('checked', true);
	});

	// Obtener el anchor de la url.
	var hash = window.location.hash.substr(1);

	// Agregar la clase .active al item de la lista del sidebar menu que coincida con el anchor.
	$('a[href*="#' + hash + '"').parent().addClass('active');

	fsMenuToggle();
	switchNightMode();

	if (window.location.hash)
		smoothScroll(window.location.hash);
	
	$('.doc-sidebar a').click(function() {
		var href = $(this).attr('href').split('#');
		var anchor = href[1];
		if (page == href[0])
			smoothScroll('#' + anchor);
	});
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

	$('[class*="-fsmenu"] a').click(function() {
		fsMenuClose();
	});
}

function fsMenuClose() {
	$('body').css('overflow', 'initial');
	$('[class*="-fsmenu"]').removeClass('open');
	$('.navbar__toggler').text('Menu');
}

function switchNightMode() {
	switchNightModeStart('#switch-night-mode');
	$('#switch-night-mode').change(function() {
		switchNightModeStart($(this));
	});
}

function switchNightModeStart(element) {
	if ($(element).is(':checked'))
		$('body').addClass('night txt-smooth');
	else
		$('body').removeClass('night txt-smooth');
}

function smoothScroll($url) {
	$('html, body').animate({
		scrollTop: $($url).offset().top - 80
	}, 500);
}
