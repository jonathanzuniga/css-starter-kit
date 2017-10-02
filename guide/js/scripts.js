// // To top right away
// if (window.location.hash) scroll(0,0);

// // void some browsers issue
// setTimeout(function() { scroll(0,0); }, 1);

$(function() {
	// $('.sidebar__content').scroll(function() {
	// 	sessionStorage.scrollTop = $(this).scrollTop();
	// });

	// your current click function
	$('body').on('click', '.sidebar a', function(e) {
		var page = $(this).attr('href');
		var anchor = page.split('#');
		if (document.location.href.indexOf(anchor[0]) >= 0) {
			//- e.preventDefault();

			$('html, body').animate({
				scrollTop: $($('#' + anchor[1])).offset().top + 'px'
			}, 300, 'swing');
		} else {
			e.preventDefault();

		// 	//- loadMain(anchor[0], anchor[1]);

			$.ajaxSetup({
				cache: true,
				dataType: 'html',
				mimeType: 'text/html'
			});
			
			$('.main').load(anchor[0] + ' .main__content', function() {
				window.history.pushState('data', 'CSS Starter Kit Guide', page);

				if (document.location.href.indexOf(anchor[1]) >= 0) {
					$('html, body').animate({
						scrollTop: $($('.main #' + anchor[1])).offset().top + 'px'
					}, 300, 'swing');
				}

  function ready(fn) {
      document.attachEvent('onreadystatechange', function() {
        if (document.readyState === 'interactive') fn();
      });
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

				// $.ajaxSetup({
				// 	cache: true,
				// 	dataType: 'script'
				// });

				// $.getScript('js/styledown.js');
			});
		}
	});

	// *only* if we have anchor on the url
	// if (window.location.hash) {
	// 	$('.sidebar__content').animate({
	// 		scrollTop: sessionStorage.scrollTop + 'px'
	// 	}, 300, 'swing');

	// 	// $('html, body').scrollTop($(window.location.hash).offset().top);

	// 	// smooth scroll to the anchor id
	// 	$('html, body').animate({
	// 		scrollTop: $(window.location.hash).offset().top + 'px'
	// 	}, 300, 'swing');

	// 	// $('.sidebar__content').animate({
	// 	// 	scrollTop: $('.sidebar a[href*="' + window.location.hash + '"]').offset().top + 'px'
	// 	// }, 300, 'swing');
	// }

	// scrollSpy();
	// $(window).scroll(function() {
	// 	scrollSpy();
	// });
});

//- function loadMain(url, anchor) {
//- 	$.ajax({
//- 		type: 'post',
//- 		url: url + ' .main > div',
//- 		dataType: 'html',
//- 		mimeType: 'text/html',
//- 		success: function(html) {
//- 			window.history.pushState('data', 'CSS Starter Kit Guide', url);

//- 			$('.main').html(html + ' .main > div');

//- 			if (document.location.href.indexOf(anchor) >= 0) {
//- 				$('html, body').animate({
//- 					scrollTop: $($('.main #' + anchor)).offset().top + 'px'
//- 				}, 300, 'swing');
//- 			}
//- 		}
//- 	});
//- }

function scrollSpy() {
	var page, a_texts, first_time;
	if (first_time == null) {
		page = location.pathname.substring(location.pathname.lastIndexOf('/') + 1);
		a_texts = $('.sidebar').find('a[href*="' + page + '"]').map(function() {
			return $(this)[0].hash.substr(1);
		}).get();
		first_time = 1;
	}

	var sections = a_texts;
	var current = sections[0];
	for (var i = 0; i < sections.length; i++) {
		if ($('.main').find('#' + sections[i]).length) {
			if ($('.main').find('#' + sections[i]).offset().top <= ($(window).scrollTop() + 32))
				current = sections[i];
		}
	}

	$('.sidebar a[href*="#' + current + '"]').parent().addClass('active');
	$('.sidebar a').not('a[href*="#' + current + '"]').parent().removeClass('active');
}
