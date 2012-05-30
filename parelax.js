(function($){
	$.fn.parelax = function(options, stop){
		if(typeof stop == "undefined"){stop = -9999999}
		// Storing scope of the jquery object that called the plugin
		var that = this;
		// The object that does all the work
		var px = {
			// Keeping track of what position the touch event began
			touchStartPositionY: null,
			touchStartPositionX: null,
			// Offset of the element
			storedOffset: null,
			newOffset: null,
			// Handles everything that occurs when the touch event begins
			elementTouchStart: function(event){
				var touch = event.originalEvent.targetTouches[0];
				px.touchStartPositionY = touch.pageY;
				px.touchStartPositionX = touch.pageX;
				px.newOffset = that.offset().top;
				event.preventDefault();
				event.stopPropagation();
			},
			// Handles movement during the touch event
			elementTouchMove: function(event){
				var touch = event.originalEvent.targetTouches[0];
				// Keeps track of the current touch position 
				var currentPositionY = touch.pageY;
				// Compares the initial touch pos, the current touch pos, current element offset, and initial element offset
				var touchProgress = currentPositionY - px.touchStartPositionY + px.newOffset - px.storedOffset;
				// Make sure they aren't scrolling past boundaries of the element
				if(touchProgress <= 0 && touchProgress >= -stop){
					that.css({
						// Move the element, via a CSS transform, up and down the page
						'-webkit-transition-duration': '0s',
						'-webkit-transform': 'translate3d(0px,' + touchProgress + 'px,0px)'
					});
					for(var i in options){
						options[i].element.css({
							// Move the element, via a CSS transform, up and down the page
							'-webkit-transition-duration': '0s',
							'-webkit-transform': 'translate3d(0px,' + touchProgress*options[i].speed + 'px,0px)'
						});
					}
				}
				event.preventDefault();
				event.stopPropagation();
			},
			init: function(){
				this.storedOffset = that.offset().top;
				that.on('touchmove',this.elementTouchMove);
				that.on('touchstart',this.elementTouchStart);
				document.ontouchmove = function(e){e.preventDefault()};
			}
		};
		px.init();
	};
})(jQuery);