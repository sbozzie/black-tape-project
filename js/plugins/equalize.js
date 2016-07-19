
var equalize = function() {
	var disableOnMaxWidth = 991;

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
