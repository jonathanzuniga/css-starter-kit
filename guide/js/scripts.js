$(function() {
	// your current click function
	$('body').on('click', '.sidebar a', function(e) {
		var href = $(this).attr('href');
		var anchor = href.split('#');
		if (document.location.href.indexOf(anchor[0]) >= 0) {
			//- e.preventDefault();

			$('html, body').animate({
				scrollTop: $($('#' + anchor[1])).offset().top + 'px'
			}, 300, 'swing');
		} else {
			e.preventDefault();

			$.ajaxSetup({
				cache: true,
				dataType: 'html',
				mimeType: 'text/html'
			});
			
			$('.main').load(anchor[0] + ' .main__content', function() {
				window.history.pushState('data', 'CSS Starter Kit Guide', href);

				function ready(fn) {
					fn();
				}

				// create expando buttons
				ready(function () {
					var codes = document.querySelectorAll('.sg-example .sg-code');

					for (var i = codes.length-1; i >= 0; i--) {
						var code = codes[i];
						var parent = code.parentNode;
						addButton(parent, code);
					}
				});

				function addButton (parent, code) {
					// hide the <pre>
					code.className += ' sg-hidden';

					// create the <button>
					var btn = document.createElement('button');
					btn.className = 'sg-expando sg-expando-reveal';
					parent.appendChild(btn);

					btn.addEventListener('click', function () {
						if (~code.className.indexOf('sg-hidden')) {
							code.className = code.className.replace('sg-hidden', 'sg-visible');
							btn.className  = btn.className.replace('sg-expando-reveal', 'sg-expando-contract');
						} else {
							code.className = code.className.replace('sg-visible', 'sg-hidden');
							btn.className  = btn.className.replace('sg-expando-contract', 'sg-expando-reveal');
						}
					});
				}

				if (document.location.href.indexOf(anchor[1]) >= 0) {
					$('html, body').animate({
						scrollTop: $($('.main #' + anchor[1])).offset().top + 'px'
					}, 300, 'swing');
				}
			});
		}

		$('.sidebar a[href$="#' + anchor[1] + '"]').parent().addClass('active');
		$('.sidebar a').not('a[href$="#' + anchor[1] + '"]').parent().removeClass('active');

		navbarMenuClose();
	});

	var href = document.location.href;
	var anchor = href.split('#');
	if (anchor[1]) {
		$('.sidebar a[href$="#' + anchor[1] + '"]').parent().addClass('active');
		$('.sidebar a').not('a[href$="#' + anchor[1] + '"]').parent().removeClass('active');
	}

	navbarScrolled();
	navbarMenuToggle();
	switchNightMode();
});

function navbarScrolled() {
	// Caches a jQuery object containing the navbar element.
	var navbar = $('.navbar.fixed');
	// $('.sidebar').add(window).scroll(function() {
	// 	var scroll = $(this).scrollTop();
	// 	if (scroll >= 2) {
	// 		navbar.addClass('scrolled');
	// 	} else {
	// 		navbar.removeClass('scrolled');
	// 	}
	// });
}

function navbarMenuToggle() {
	$('#open-fsmenu').click(function() {
		if (!$('[class*="-fsmenu"]').hasClass('open')) {
			$('body').css('overflow', 'hidden');
			$('[class*="-fsmenu"]').addClass('open');
			$(this).text('Close');
		}
		else {
			navbarMenuClose();
		}
	});
}

function navbarMenuClose() {
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
