



$(document).ready(function(){
	// Stopping default iOS scroll/copy behavior.
	document.getElementById('wrap').addEventListener('touchmove', function(event) {
		event.preventDefault();
		event.stopPropagation();
	}, false);
	var newScrollObject = {
		pTag: {
			element: $("#pTag"),
			speed: 2
		},
		nav: {
			element: $("#nav"),
			speed: 0.5
		}
	};
	$("#alertMe").parelax(newScrollObject);
});

