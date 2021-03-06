//= BREAKPOINT - 992px
//if (window.innerWidth <= 991) {} else {};

//= SAVE SCROLLBAR WIDTH
var scrollbarWidth = window.innerWidth - document.body.clientWidth;
console.log('scrollBar: ' + scrollbarWidth);

//= SAVE DOCUMENT WIDTH
var document_width = $(window).width();
var real_document_width = document_width + scrollbarWidth;
console.log('windowWidth: ' + real_document_width);

//= SAVE DOCUMENT HEIGHT
var document_height = $(window).height();
console.log('windowHeight: ' + document_height);

//= DOCUMENT READY
$(document).ready(function() {

	//= WINDOW LOAD
	$(window).load(function() {

		//= SCROLL TOP
		$('#jScrollTo').click(function() {
			$('#jScrollToLocation').velocity('scroll', {
				duration: 600,
				offset: 0,
				easing: 'ease'
			});
		});

		//= SAME HEIGHT / EQUALIZE
		if ($('html').hasClass('no-flexbox')) {
			equalize();
		};

	}); //END window load

	//= WINDOW RESIZE
	$(window).resize(function() {

		//= WINDOW WIDTH RESIZE WORKAROUND
		if (document_width !== $(window).width()) {

			//= SAME HEIGHT / EQUALIZE
			if ($('html').hasClass('no-flexbox')) {
				if (timeout) {
					clearTimeout(timeout);
					timeout = null;
				};

				timeout = setTimeout(equalize, 0);
			};

			//= RESET DOCUMENT WIDTH
			document_width = $(window).width();
			scrollbarWidth = window.innerWidth - document.body.clientWidth;
			real_document_width = document_width + scrollbarWidth;
			console.log('windowWidth: ' + real_document_width);

		}; //END window width resize workaround

		//= WINDOW HEIGHT RESIZE WORKAROUND
		if (document_height !== $(window).height()) {

			//= RESET DOCUMENT WIDTH
			document_height = $(window).height();
			console.log('windowHeight: ' + document_height);

		}; //END window height resize workaround

	});

	$(window).smartresize(function() {

	}); //END window resize

	//= WINDOW SCROLL
	$(window).scroll(function() {

	});

	$(window).smartscroll(function() {

	}); //END window scroll

}); //END document ready
