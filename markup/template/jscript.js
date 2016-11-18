function onYouTubeIframeAPIReady(){player=new YT.Player("b-video-player",{height:"390",width:"640",videoId:"7DBxtut7Mpw",events:{onReady:function(){document.getElementById("b-video-button").className="i-visible"},onStateChange:onPlayerStateChange}})}function onPlayerStateChange(a){a.data===YT.PlayerState.PAUSED?$("#b-video-cover").removeClass("i-play"):a.data===YT.PlayerState.PLAYING&&$("#b-video-cover").addClass("i-play")}!function(a){"use strict";a(function(){function b(){a("html").addClass("i-menu-open"),a("body").css({paddingRight:f+"px"}),a(".b-header-fixed").css({paddingRight:f+"px"})}function c(){a("body").attr({style:""}),a(".b-header-fixed").attr({style:""})}function d(a){setTimeout(function(){a.addClass("i-move")},e(100,1500))}function e(a,b){return Math.floor(Math.random()*(b-a+1))+a}a(".b-header__menu").click(function(c){c.preventDefault(),a("html").addClass("i-menu-open"),b()}),a(".b-header__search").click(function(c){c.preventDefault(),a("html").addClass("i-menu-open"),b(),setTimeout(function(){a("#title-search-input").focus()},100)}),a(".b-header-menu__close").click(function(b){b.preventDefault(),a("html").removeClass("i-menu-open"),c()}),a("#cartModal").on("shown.bs.modal",function(){a("html").addClass("i-cart-modal-open")}),a(document).bind("click",function(b){a(b.target).is(".modal-backdrop")&&a("html").hasClass("i-cart-modal-open")&&a("#cartModal").modal("hide")}).bind("keyup",function(b){27===b.keyCode&&a("html").hasClass("i-menu-open")&&a(".b-header-menu__close").click()});var f=window.innerWidth-a(document).width();a(".b-modal-user").delegate(".b-signout-icon","click",function(b){b.preventDefault();var c=a(this);a.ajax({url:c.attr("href"),type:"GET",dataType:"json",success:function(b){b&&b.html&&a(".b-modal-user").html(b.html)},error:function(a,b,c){window.console&&(console.log(a),console.log(b),console.log(c))}})}).delegate(".b-signin-button div","click",function(){a(".b-modal-user").removeClass("i-visible").addClass("i-hidden"),a(".b-modal-signin, .b-modal-social").removeClass("i-hidden").addClass("i-visible"),a(".b-modal-signin .form-control").val(""),a(".b-modal-signin input:first").focus()}),a(".b-request-form input.form-control").mask("+7 999 999-99-99"),a(".nav-tabs a").click(function(b){b.preventDefault(),a(".nav-tabs a").removeClass("active"),a(this).addClass("active").tab("show")}),a(window).bind("scroll",function(b){a(".b-checkbox-block").not(".i-move").each(function(){var b=a(this),c=b.offset().top+b.outerHeight(),e=c-document.documentElement.clientHeight;window.pageYOffset>e&&d(b)})}),a(".b-gallery .fotorama").on("fotorama:ready",function(b,c){setTimeout(function(){if(window.devicePixelRatio>1){var b=a(".b-gallery-picture");b.each(function(b){var c=a(this),d=c.attr("data-big-image");d&&""!==d&&c.css("backgroundImage","url("+d+")")})}},10)}),a(window).bind("scroll",function(b){a(".b-menu-list").not(".i-animate").each(function(){var b=a(this);b.find(".col-sm-4:first").each(function(){var c=a(this),d=c.offset().top+c.outerHeight(),e=0;window.matchMedia("(max-width: 767px)").matches&&(e=250);var f=d-document.documentElement.clientHeight-e;window.pageYOffset>f&&b.addClass("i-animate")})})}),a(".b-video-banner .fotorama").on("fotorama:ready",function(b,c){function d(){window.matchMedia("(max-width: 767px)").matches?c.resize({height:300}):window.matchMedia("(max-width: 1024px)").matches?c.resize({height:500}):c.resize({height:668})}a(".b-video-banner").mouseover(function(){a(".b-video-banner .fotorama").data("fotorama").stopAutoplay()}).mouseout(function(){a("#b-video-cover").hasClass("i-play")||a(".b-video-banner .fotorama").data("fotorama").startAutoplay(3e3)}),document.getElementById("b-video-button")&&(document.getElementById("b-video-button").onclick=function(b){b.stopPropagation();var d=a("#b-video-cover");c.show(0),d.addClass("i-play"),setTimeout(function(){d.hide()},1e3),a(".b-video-banner .fotorama").data("fotorama").stopAutoplay(),player.playVideo()},document.getElementById("b-video-button").addEventListener("touchend",function(b){b.preventDefault(),b.stopPropagation();var d=a("#b-video-cover");c.show(0),d.addClass("i-play"),setTimeout(function(){d.hide()},1e3),a(".b-video-banner .fotorama").data("fotorama").stopAutoplay(),player.playVideo()},!1)),document.getElementById("b-video-cover")&&(document.getElementById("b-video-cover").onclick=function(a){a.stopPropagation()}),a(this).on("fotorama:show",function(b,c,d){a(".b-video-banner__ill").removeClass("i-show"),a("#b-video-cover").hasClass("i-play")&&(a(".b-video-banner .fotorama").data("fotorama").stopAutoplay(3e3),player.pauseVideo())}).on("fotorama:showend",function(b){a(".b-video-banner__ill").addClass("i-show")}),d(),a(window).resize(function(){d()})}),window.BX&&BX.addCustomEvent("onFrameDataReceived",function(){a(".b-video-banner .fotorama").on("fotorama:ready",function(b,c){a(".b-video-banner").mouseover(function(){a(".b-video-banner .fotorama").data("fotorama").stopAutoplay()}).mouseout(function(){a(".b-video-banner .fotorama").data("fotorama").startAutoplay(3e3)})}),document.getElementById("b-video-cover")&&(document.getElementById("b-video-cover").onclick=function(){var a=this;a.className="i-play b-video-banner__cover",setTimeout(function(){a.style.display="none"},1e3),player.playVideo()})})})}(jQuery);var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var player;
/*! Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.14
 */
;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:0,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));