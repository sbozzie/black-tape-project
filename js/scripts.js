// debouncing function from John Hann
// http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/

//= RESIZE
(function($, sr) {
	var debounce = function(func, threshold, execAsap) {
		var timeout;

		return function debounced() {
			var obj = this,
				args = arguments;

			function delayed() {
				if (!execAsap)
					func.apply(obj, args);
				timeout = null;
			};

			if (timeout)
				clearTimeout(timeout);
			else if (execAsap)
				func.apply(obj, args);

			timeout = setTimeout(delayed, threshold || 100);
		};
	}

	// smartresize
	jQuery.fn[sr] = function(fn) {
		return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
	};

})(jQuery, 'smartresize');

//= SCROLL
(function($, sr) {
	var debounce = function(func, threshold, execAsap) {
		var timeout;

		return function debounced() {
			var obj = this,
				args = arguments;

			function delayed() {
				if (!execAsap)
					func.apply(obj, args);
				timeout = null;
			}

			if (timeout)
				clearTimeout(timeout);
			else if (execAsap)
				func.apply(obj, args);

			timeout = setTimeout(delayed, threshold || 100);
		};
	};

	// smartscroll
	jQuery.fn[sr] = function(fn, threshhold) {
		return fn ? this.bind('scroll', debounce(fn, threshhold)) : this.trigger(sr);
	};

})(jQuery, 'smartscroll');
﻿
var equalize = function() {
	var disableOnMaxWidth = 768;

	var grouped = {};
	var elements = $('*[data-same-height]');

	elements.css('height', '');

	elements.each(function() {
		var el = $(this);
		var id = el.attr('data-same-height');

		if (!grouped[id]) {
			grouped[id] = [];
		}

		grouped[id].push(el);
	});

	$.each(grouped, function(key) {
		var elements = $('*[data-same-height="' + key + '"]');

		elements.css('height', '');

		var winWidth = window.innerWidth;

		if (winWidth <= disableOnMaxWidth) {
			return;
		}

		var maxHeight = 0;

		elements.each(function() {
			var eleq = $(this);
			maxHeight = Math.max(eleq.outerHeight(), maxHeight);
		});

		elements.css('height', maxHeight + "px");
	});
};

var timeout = null;
