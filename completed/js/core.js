var imageObject = {
	imgOpacity : 0.5,
	preload : function(thisObj) {
		"use strict";
		if (thisObj.length > 0) {
			if (thisObj.length > 1) {
				
				var thisIndex = 0;
				
				/*
				var thisItem = 0;
				
				var thisInterval = setInterval(function() {
					
					if (thisItem >= thisObj.length) {
						clearInterval(thisInterval);
					} else {
						imageObject.proceed($(thisObj[thisItem]), thisIndex);
						
						if (thisIndex == 3) {
							thisIndex = 0;
						} else {
							thisIndex++;
						}
					}
					
					thisItem++;
					
				}, 2000);
				*/
				
				jQuery.each(thisObj, function() {
					imageObject.proceed($(this), thisIndex);
					if (thisIndex == 3) {
						thisIndex = 0;
					} else {
						thisIndex++;
					}
				});
				
				
			} else {
				imageObject.proceed(thisObj, 0);
			}
		}
	},
	proceed : function(thisObj, thisIndex) {
		"use strict";
		
		var thisSrc = thisObj.attr('data-src');
		var thisAlt = thisObj.attr('data-alt');
		
		if (thisSrc !== '') {
			
			var imgObj = new Image();
			
			$(imgObj).bind('load', function() {
				
				var thisImage = '<img src="';
				thisImage += thisSrc;
				thisImage += '" width="';
				thisImage += imgObj.width;
				thisImage += '" height="';
				thisImage += imgObj.height;
				thisImage += '" alt="';
				thisImage += thisAlt;
				thisImage += '" />';
				
				thisObj.append(thisImage);
				
				var thisImageObj = thisObj.children('img');
				
				switch(thisIndex) {
					case 0:
					thisImageObj.css({ 'opacity' : imageObject.imgOpacity })
						.animate({ 'left' : 0 }, 500);
					break;
					case 1:
					thisImageObj.css({ 'opacity' : imageObject.imgOpacity, 'left' : 0, 'top' : '-200px' })
						.animate({ 'top' : 0 }, 500);
					break;
					case 2:
					thisImageObj.css({ 'opacity' : imageObject.imgOpacity, 'left' : '200px' })
						.animate({ 'left' : 0 }, 500);
					break;
					case 3:
					thisImageObj.css({ 'opacity' : imageObject.imgOpacity, 'left' : 0, 'top' : '200px' })
						.animate({ 'top' : 0 }, 500);
					break;
				}
				
				thisObj.removeClass('loader');
				
			});
			
			imgObj.src = thisSrc;
			
		}
		
	},
	fadeHover : function(obj) {
		"use strict";
		obj.live('mouseover mouseout', function(e) {
			if (e.type === 'mouseover') {
				$(this).stop(true, true).animate({ 'opacity' : 1 }, 200, 'linear');
			} else {
				$(this).stop(true, true).animate({ 'opacity' : imageObject.imgOpacity }, 200, 'linear');
			}
		});
	}
};
$(function() {
	"use strict";
	imageObject.preload($('#images li'));
	imageObject.fadeHover($('#images li img'));
});








