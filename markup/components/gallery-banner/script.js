!function(a){"use strict";a(function(){a(".b-gallery-banner .fotorama").on("fotorama:ready",function(b,c){var d=a(this);a(".b-video-banner2").each(function(b){var d=a(this),e=(d.find(".b-video-banner2__cover"),d.find(".b-video-button2"));d.find(".b-video-button2-text");e.bind("click",function(a){a.stopPropagation(),c.show(b),c.stopAutoplay()})}),d.on("fotorama:show",function(b,c,d){if(a(".b-video-banner2__ill").removeClass("i-show"),a(".b-video-banner2__cover").hasClass("i-play")){c.stopAutoplay(3e3);for(var e=0;e<playerArray.length;e++)playerArray[e].pauseVideo()}}).on("fotorama:showend",function(b){a(".b-video-banner2:eq("+c.activeIndex+") .b-video-banner2__ill").addClass("i-show")}),a(".b-gallery-banner").mouseover(function(){c.stopAutoplay()}).mouseout(function(){a(".b-gallery-banner .b-video-banner2__cover").hasClass("i-play")||c.startAutoplay(3e3)})})})}(jQuery);