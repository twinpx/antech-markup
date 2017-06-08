function onYouTubeIframeAPIReady(){function a(a){return function(){a.find(".b-video-button2").addClass("i-visible")}}function b(a){return function(b){b.data===YT.PlayerState.PAUSED?a.find("b-video-banner2__cover").removeClass("i-play"):b.data===YT.PlayerState.PLAYING?a.find("b-video-banner2__cover").addClass("i-play"):b.data===YT.PlayerState.ENDED&&(a.find(".b-video-banner2__cover").removeClass("i-play").show(),a.find(".b-video-banner2__ill").addClass("i-show"))}}if($("body").hasClass("i-video-ready"))for(var c=0;c<playerIdArray.length;c++){var d=$("#"+playerIdArray[c]),e=$(".b-video-banner2:eq("+c+")");playerArray[c]=new YT.Player(playerIdArray[c],{height:"641",width:"100%",videoId:d.data("video-id"),events:{onReady:a(e),onStateChange:b(e)},playerVars:{rel:0,controls:0,showinfo:0}})}else setTimeout(function(){onYouTubeIframeAPIReady()},500)}!function(a){"use strict";a(function(){function b(){a("html").addClass("i-menu-open"),a("body").css({paddingRight:h+"px"}),a(".b-header-fixed").css({paddingRight:h+"px"})}function c(){a("body").attr({style:""}),a(".b-header-fixed").attr({style:""})}function d(a){return/(10|11|12|13|14|15|16|17|18|19)$/.test(a)?"товаров":/.*1$/.test(a)?"товар":/[2-4]$/.test(a)?"товара":"товаров"}function e(a){setTimeout(function(){a.addClass("i-move")},f(100,1500))}function f(a,b){return Math.floor(Math.random()*(b-a+1))+a}function g(b){function c(){d(),e()}function d(){j.$elem=a(b),j.$elem.data("FloatPhone",j),j.$close=j.$elem.find(".b-float-hint__close"),j.scrollEvent=void 0,j.scrollIntervalEvent=void 0,j.scrollIntervalId=void 0,j.showTimeoutId=void 0,j.showTime=200}function e(){f(),a(window).bind("scroll",g),j.$close.click(function(){Cookies.set("hintClose",!0,{expires:365,path:window.location.hostname}),i()})}function f(){j.showTimeoutId=setTimeout(function(){h()},j.showTime)}function g(a){j.scrollEvent=a,j.scrollIntervalEvent||(j.scrollIntervalEvent=a,clearTimeout(j.showTimeoutId),i(),j.scrollIntervalId=setInterval(function(){return j.scrollIntervalEvent!==j.scrollEvent?void(j.scrollIntervalEvent=j.scrollEvent):(clearInterval(j.scrollIntervalId),j.scrollIntervalEvent=void 0,void f())},100))}function h(){Cookies.get("hintClose")||j.$elem.addClass("i-visible")}function i(){j.$elem.removeClass("i-visible")}var j=this;c()}a(".b-header__menu").click(function(c){c.preventDefault(),a("html").addClass("i-menu-open"),b()}),a(".b-header__search").click(function(c){c.preventDefault(),a("html").addClass("i-menu-open"),b(),setTimeout(function(){a("#title-search-input").focus()},100)}),a(".b-header-menu__close").click(function(b){b.preventDefault(),a("html").removeClass("i-menu-open"),c()}),a("#cartModal").on("shown.bs.modal",function(){a("html").addClass("i-cart-modal-open")}),a(document).bind("click",function(b){a(b.target).is(".modal-backdrop")&&a("html").hasClass("i-cart-modal-open")&&a("#cartModal").modal("hide")}).bind("keyup",function(b){27===b.keyCode&&a("html").hasClass("i-menu-open")&&a(".b-header-menu__close").click()});var h=window.innerWidth-a(document).width();a(".b-modal-user").delegate(".b-signin-button div","click",function(){a(".b-modal-user").removeClass("i-visible").addClass("i-hidden"),a(".b-modal-signin, .b-modal-social").removeClass("i-hidden").addClass("i-visible"),a(".b-modal-signin .form-control").val(""),a(".b-modal-signin input:first").focus()}),a.mask&&a(".b-request-form input.form-control").mask("+7 999 999-99-99"),a(".nav-tabs a").click(function(b){b.preventDefault(),a(".nav-tabs a").removeClass("active"),a(this).addClass("active").tab("show")});var i,j=a(".b-call-me"),k=a(".b-call-me__form"),l=a(".b-call-me__counter"),m=a(".b-call-me__feedback"),n=(a(".b-call-me__thankyou"),a(".b-call-me__once-more")),o=a(".b-call-me__callback");j.on("shown.bs.modal",function(a){k.find(".form-control").focus()}),j.on("hidden.bs.modal",function(a){j.removeClass("i-form").removeClass("i-counter").removeClass("i-feedback").removeClass("i-thankyou").removeClass("i-once-more").removeClass("i-callback").find("input").val(""),j.find("textarea").text(""),i&&clearInterval(i)}),a.mask&&k.find('input[ type="tel" ]').mask("+7 999 999-99-99"),k.find("form").submit(function(b){var c=a(this);b.preventDefault(),a.ajax({url:c.attr("action"),type:c.attr("method"),dataType:"json",data:c.serialize(),success:function(b){if(window.ga&&ga("send","event","callback","new_callback"),window.yaCounter103630&&yaCounter103630.reachGoal("new_callback"),l.length){j.addClass("i-counter");var c=l.data("num");l.text(c--),i=setInterval(function(){l.text(c--),c<0&&(clearInterval(i),j.removeClass("i-counter").addClass("i-feedback"),b&&b.ID&&m.find("form").append('<input type="hidden" name="CB_ID" value="'+b.ID+'">'))},1e3)}else o.length&&(a("#callMeHour").text(k.find("select:eq(0)").val()),a("#callMeMinute").text(k.find("select:eq(1)").val()),j.addClass("i-callback"))},error:function(){}})}),m.find("form").submit(function(b){var c=a(this);b.preventDefault(),a.ajax({url:c.attr("action"),type:c.attr("method"),dataType:"json",data:c.serialize(),success:function(a){j.removeClass("i-feedback").addClass("i-thankyou")},error:function(a,b,c){window.colsole&&(console.log(a),console.log(b),console.log(c))}})}),m.find("a").click(function(a){a.preventDefault(),j.removeClass("i-feedback").addClass("i-once-more")}),n.find(".btn").click(function(a){a.preventDefault(),j.removeClass("i-once-more")}),a("body").delegate(".b-catalog-card .btn-default","click",function(b){b.preventDefault();var c=a(this);c.hasClass(".btn-disabled")||(c.addClass("btn-disabled").text("В корзине"),a.ajax({url:c.attr("href"),type:"GET",dataType:"json",success:function(b){b&&"Y"===b.STATUS?b.DATA.COUNT>0?(a("#cartModalButton").css({visibility:"visible"}),a("#cartModalCount").text(b.DATA.COUNT),a("#cartModalPrice").text(b.DATA.TOTAL_PRICE),a("#cartModalNoProducts").hide(),a("#cartModalHasProducts").text(d(b.DATA.COUNT)+" на сумму"),a(".count_in_cart").show().text(b.DATA.COUNT)):a(".count_in_cart").hide().text(b.DATA.COUNT):"E"===b.STATUS&&c.removeClass("btn-disabled").text("В корзину")},error:function(a,b,c){window.console&&(console.log(a),console.log(b),console.log(c))}}))}).delegate(".b-fav-icon","click",function(b){b.preventDefault();var c=a(this);a.ajax({url:c.attr("href"),type:"GET",dataType:"json",success:function(a){a&&a.success&&(c.addClass("i-active"),window.productsDelayInCartIDArray.push(c.closest(".b-catalog-card").data("id")))},error:function(a,b,c){window.console&&(console.log(a),console.log(b),console.log(c))}})}),a(window).bind("scroll",function(b){a(".b-checkbox-block").not(".i-move").each(function(){var b=a(this),c=b.offset().top+b.outerHeight(),d=c-document.documentElement.clientHeight;window.pageYOffset>d&&e(b)})}),Cookies.get("hintClose")||new g("#b-float-hint"),a(".b-gallery .fotorama").on("fotorama:ready",function(b,c){setTimeout(function(){if(window.devicePixelRatio>1){var b=a(".b-gallery-picture");b.each(function(b){var c=a(this),d=c.attr("data-big-image");d&&""!==d&&c.css("backgroundImage","url("+d+")")})}},10),a(this).find("a").click(function(a){a.stopPropagation()})}),a(window).bind("scroll",function(b){a(".b-menu-list").not(".i-animate").each(function(){var b=a(this);b.find(".col-sm-4:first").each(function(){var c=a(this),d=c.offset().top+c.outerHeight(),e=0;window.matchMedia("(max-width: 767px)").matches&&(e=250);var f=d-document.documentElement.clientHeight-e;window.pageYOffset>f&&b.addClass("i-animate")})})});var p=a(".b-top-menu");a(".b-top-submenu"),p.parent(),a(".b-top-header"),p.html();p.delegate("#order-link","click",function(b){b.preventDefault(),a.scrollTo(a("#order-block").offset().top-120,500),window.location.hash="order"}).delegate("#payment-link","click",function(b){b.preventDefault(),a('a[ href="#facilities"]').click(),a.scrollTo(a("#payment-block").offset().top-120,500),a("#payment-block .accordion-toggle").click(),window.location.hash="payment"}).delegate("#warranty-link","click",function(b){b.preventDefault(),a('a[ href="#facilities"]').click(),a.scrollTo(a("#warranty-block").offset().top-120,500),a("#warranty-block .accordion-toggle").click(),window.location.hash="warranty"}).delegate("#delivery-link","click",function(b){b.preventDefault(),a('a[ href="#facilities"]').click(),a.scrollTo(a("#delivery-block").offset().top-120,500),a("#delivery-block .accordion-toggle").click(),window.location.hash="delivery"}).delegate(".b-top-menu__icon","click",function(b){a(".b-top-submenu").slideToggle(),a(this).toggleClass("i-open"),b.preventDefault()});var q=window.location.hash;a(q).length?a.scrollTo(a(q).offset().top-200,500):"#expert"===q?(a.scrollTo(a("#economy").offset().top-200,500),a('a[href="#page1"]').click()):"#razrabotka"===q?(a.scrollTo(a("#economy").offset().top-200,500),a('a[href="#page2"]').click()):"#model"===q?(a.scrollTo(a("#economy").offset().top-200,500),a('a[href="#page3"]').click()):"#sroki"===q?(a('a[href="#accordionFAQ3"]').click(),a.scrollTo(a("#accordionFAQ3").offset().top-300,500)):"#order"===q?a("#order-link").click():"#payment"===q?a("#payment-link").click():"#warranty"===q?a("#warranty-link").click():"#delivery"===q&&a("#delivery-link").click(),a(".b-top-submenu__up, .b-top-submenu__close svg").click(function(){a(".b-top-submenu").slideUp(),a(".b-top-menu__icon").removeClass("i-open")}),a(".b-video-banner .fotorama").on("fotorama:ready",function(b,c){function d(b){var d=a(b);c.show(c.activeIndex),d.addClass("i-play"),setTimeout(function(){d.hide()},1e3),a(".b-video-banner .fotorama").data("fotorama").stopAutoplay()}function e(){window.matchMedia("(max-width: 767px)").matches?c.resize({height:586}):window.matchMedia("(max-width: 1024px)").matches?c.resize({height:679}):c.resize({height:614})}a(".b-video-banner").mouseover(function(){a(".b-video-banner .fotorama").data("fotorama").stopAutoplay()}).mouseout(function(){a("#b-video-cover").hasClass("i-play")||a(".b-video-banner .fotorama").data("fotorama").startAutoplay(3e3)}),document.getElementById("b-video-button")&&(document.getElementById("b-video-button").onclick=function(a){a.stopPropagation(),d("#b-video-cover"),player.playVideo()},document.getElementById("b-video-button").addEventListener("touchend",function(a){a.preventDefault(),a.stopPropagation(),d("#b-video-cover"),player.playVideo()},!1)),document.getElementById("b-video-button2")&&(document.getElementById("b-video-button2").onclick=function(a){a.stopPropagation(),d("#b-video-cover2"),player2.playVideo()},document.getElementById("b-video-button2").addEventListener("touchend",function(a){a.preventDefault(),a.stopPropagation(),d("#b-video-cover2"),player2.playVideo()},!1)),document.getElementById("b-video-cover")&&(document.getElementById("b-video-cover").onclick=function(a){a.stopPropagation()}),document.getElementById("b-video-cover2")&&(document.getElementById("b-video-cover2").onclick=function(a){a.stopPropagation()}),a(this).on("fotorama:show",function(b,c,d){a(".b-video-banner__ill, .b-video-banner2__ill").removeClass("i-show"),a("#b-video-cover").hasClass("i-play")&&(a(".b-video-banner .fotorama").data("fotorama").stopAutoplay(3e3),player.pauseVideo())}).on("fotorama:showend",function(b){a(".b-video-banner__ill, .b-video-banner2__ill").addClass("i-show")}),e(),a(window).resize(function(){e()})}),window.BX&&BX.addCustomEvent("onFrameDataReceived",function(){a(".b-video-banner .fotorama").on("fotorama:ready",function(b,c){a(".b-video-banner").mouseover(function(){a(".b-video-banner .fotorama").data("fotorama").stopAutoplay()}).mouseout(function(){a(".b-video-banner .fotorama").data("fotorama").startAutoplay(3e3)})}),document.getElementById("b-video-cover")&&(document.getElementById("b-video-cover").onclick=function(){var a=this;a.className="i-play b-video-banner__cover",setTimeout(function(){a.style.display="none"},1e3),player.playVideo()})})})}(jQuery);var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var playerIdArray=[],playerArray=[];
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (i = 0; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*! Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.14
 */
;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:0,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));
!function(a,b){"use strict";return"function"==typeof define&&define.amd?void define(["jquery"],function(c){return b(a,c,!1)}):void b(a,a.jQuery||a.Zepto||a.ender||a.$,!0)}(this,function(a,b,c){"use strict";var d;return d={options:{timeout:null,meter:b(".scroolly"),body:document},theCSSPrefix:"",theDashedCSSPrefix:"",isMobile:!1,isInitialized:!1,animFrame:null,direction:0,scrollTop:0,scrollCenter:0,scrollBottom:0,docHeight:0,docMiddle:0,winHeight:b(window).height()},d.scrollLayout={},d._isObject=function(a){return"object"==typeof a},d._isArray=function(a){return a instanceof Array},d._isNumber=function(a){return a instanceof Number||"number"==typeof a},d._isString=function(a){return a instanceof String||"string"==typeof a},d._default=function(a,b,c){void 0===c&&(c=null);var e=(b+"").split(".");if(a&&(d._isObject(a)||d._isArray(a))){var f,g=a;for(var h in e){if(f=e[h],!d._isObject(g)&&!d._isArray(g)||void 0===g[f])return c;g=g[f]}return g}return c},d.parseCoords=function(a){var b=a.split(/\s*=\s*/),c=b[0]||"doc-top",e=d.parseCoord(c),f=b[1]||e.anchor,g=d.parseCoord(f);return[e,g]},d.parseCoord=function(a){var b=/((vp|doc|el|con)-)?(top|center|bottom)?/i,c="(\\+|-)?\\s*(\\d+)(\\%|vp|doc|el|con)?",d=new RegExp(c,"gi"),e=a.match(b),f=a.match(d);if(!e&&!f)return!1;var g=e[1]?e[2]:"vp",h=e[3]||"top",i=[];if(f){d=new RegExp(c,"i");for(var j,k,l,m,n,o=0;o<f.length;o++)j=f[o],k=j.match(d),l=k[1]&&"-"===k[1]?-1:1,m=k[2]&&parseInt(k[2])*l||0,n="px",k[3]&&(n="%"===k[3]?g:k[3]),i.push({offset:m,subject:n})}return{original:a,subject:g,anchor:h,offsets:i}},d.calculateCoord=function(a,b,c){d._isString(a)&&(a=d.parseCoord(a));var e=0;if("vp"===a.subject)switch(a.anchor){case"top":e=d.scrollTop;break;case"center":e=d.scrollCenter;break;case"bottom":e=d.scrollBottom}else if("doc"===a.subject)switch(a.anchor){case"top":e=0;break;case"center":e=d.docMiddle;break;case"bottom":e=d.docHeight}else{var f="con"===a.subject?c:b,g=f.outerHeight(),h=f.offset().top,i=h+g,j=h+Math.floor(g/2);switch(a.anchor){case"top":e=h;break;case"center":e=j;break;case"bottom":e=i}}var k,l,m,n;for(k=0;k<a.offsets.length;k++){if(l=a.offsets[k],m=l.offset,"px"!==l.subject){switch(n=0,l.subject){case"vp":n=d.winHeight;break;case"doc":n=d.docHeight;break;case"el":n=b.outerHeight();break;case"con":n=c.outerHeight()}m=Math.ceil(l.offset/100*n)}e+=m}return e},d.cmpCoords=function(a,b,c){return d.calculateCoord(a[0],b,c)-d.calculateCoord(a[1],b,c)},d.isRuleInActiveWidthRange=function(a){var c,e,f,g=d._default(a,"minWidth",0),h=d._default(a,"maxWidth","infinity"),i=d._default(d.options,"meter"),j=b(window).width();return i.length?(c=i.length?parseInt(i.css("min-width")):0,e=i.length?i.css("max-width"):"none",e="none"===e?"infinity":parseInt(e),f=c>=g&&("infinity"===h||h>=e)):j>g&&("infinity"===h||h>=j)},d.isRuleActive=function(a,b,c){var e=d.isRuleInActiveWidthRange(a);if(!e)return!1;var f=d._default(a,"direction",0),g=d.direction;if(f&&(f>0&&0>g||0>f&&g>=0))return!1;var h=d._default(a,"from","0"),i=d._default(a,"to","finish"),j=d.cmpCoords(h,b,c);if(j>0)return!1;var k=d.cmpCoords(i,b,c);return 0>=k?!1:{offset:-j,length:k-j}},d.addItem=function(a,c,e,f){if(!c.length)return!1;f=f||"self";var g,h,i,j,k,l,m;m=function(a,b,c,e){var f,g,h=b/c,i=d._default(e,"cssFrom"),j=d._default(e,"cssTo"),k={};for(var l in i)f=i[l],g=d._default(j,l,f),k[l]=d.getTransitionValue(f,g,h);a.css(d.extendCssWithPrefix(k))};for(var n in e)g=e[n],h=!f,i=d._default(g,"from","doc-top"),(d._isString(i)||d._isNumber(i))&&(i=d.parseCoords(""+i),g.from=i),j=d._default(g,"to","doc-bottom"),(d._isString(j)||d._isNumber(j))&&(j=d.parseCoords(""+j),g.to=j),k=d._default(g,"cssFrom"),l=d._default(g,"cssTo"),k&&l&&(g.cssOnScroll=m);if(c.length>1)return c.each(function(c){for(var g,h,i=[],j=null,k=0;k<e.length;k++)g=e[k],h={},b.extend(h,g),i.push(h);f&&(j="self"===f?f:f.length>1&&c<f.length?b(f[c]):f),d.addItem(a+"-"+c,b(this),i,j)}),!0;var o=d._default(d.scrollLayout,a);return o?o.rules.concat(e):d.scrollLayout[a]={element:c,container:f,rules:e},!0},d.factory=function(a,b,c,e){return d.init(),a.length&&b?(e=e||a[0].tagName+"_"+Object.keys(d.scrollLayout).length,void d.addItem(e,a,b,c,!1)):!1},d.stickItem=function(a,b,c){d.stickItemXY(a,b,c instanceof Array?c:[c])},d.stickItemXY=function(a,c,e){e=e||[];var f,g,h,i,j,k,l,m,n=[];for(var o in e)f=e[o],g=d._default(f,"$bottomContainer",b("body")),h=d._default(f,"mode"),i=d._default(f,"offsetTop",0),j=d._default(f,"offsetBottom",0),k=d._default(f,"minWidth",0),l=d._default(f,"maxWidth","infinity"),m=d._default(f,"static",!1),"next"===g?(h=h||"margin",g=b(c).next()):"parent"!==g&&g||(h=h||"padding",g=b(c).parent()),m?n.push({source:"sticky",alias:"static",minWidth:k,maxWidth:l,bottomContainer:g}):(n.push({source:"sticky",alias:"top",minWidth:k,maxWidth:l,offsetTop:i,offsetBottom:j,bottomContainer:g,mode:h}),n.push({source:"sticky",alias:"fixed",minWidth:k,maxWidth:l,offsetTop:i,offsetBottom:j,bottomContainer:g,mode:h}),n.push({source:"sticky",alias:"bottom",minWidth:k,maxWidth:l,offsetTop:i,offsetBottom:j,bottomContainer:g,mode:h}));d.addItem(a,b(c),n)},d.processStickyItemRange=function(a,c){c=c||{};var e=d._default(c,"bottomContainer",b("body")),f=(d._default(c,"mode"),d._default(c,"offsetTop",0)),g=d._default(c,"offsetBottom",0),h=parseInt(a.css("margin-top"))+a.height()+parseInt(a.css("margin-bottom"));"border-box"===a.css("box-sizing")&&(h+=parseInt(a.css("padding-top"))+parseInt(a.css("padding-bottom")));var i=parseInt(e.css("margin-top"))+e.height()+parseInt(e.css("margin-bottom"));"border-box"===e.css("box-sizing")&&(i+=parseInt(e.css("padding-top"))+parseInt(e.css("padding-bottom")));var j=Math.round(a.offset().top-parseInt(a.css("margin-top"))),k=Math.round(e.offset().top+(i-h-g));switch(c.alias){case"top":c.from=0,c.to=j-f,c.css={position:"absolute",top:j+"px"},c.itemHeight=h;break;case"fixed":c.from=j-f,c.to=k,c.css={position:"fixed",top:f+"px"},c.itemHeight=h;break;case"bottom":c.from=k,c.css={position:"absolute",top:k+f+"px"},c.itemHeight=h;break;case"static":c.from=0,c.css={position:"",top:""},c.itemHeight=0}return c},d.onResize=function(){d.winHeight=b(window).height(),d.docHeight=d.body.height(),d.docMiddle=Math.floor(d.docHeight/2);var a=!1;for(var c in d.scrollLayout){var e,f,g,h=d.scrollLayout[c];for(var i in h.rules)e=h.rules[i],f=d.isRuleInActiveWidthRange(e),a|=f,f&&void 0===e.from&&(b(h.element).css("position",""),b(h.element).css("top",""),e.bottomContainer&&e.bottomContainer.css("margin-top",""),g=d._default(e,"source"),"sticky"===g&&(h.rules[i]=d.processStickyItemRange(h.element,e)))}return a&&(d.scrollLayout=d.scrollLayout,setTimeout(function(){d.onScroll(!0)},0)),!0},d.getProgress=function(a,b){var c=a/b;return{offset:a,length:b,relative:c,left:b-a,leftRelative:1-c}},d.getTransitionFloatValue=function(a,b,c){return 0>=c?a:c>=1?b:a+(b-a)*c},d.getTransitionIntValue=function(a,b,c){return Math.round(d.getTransitionFloatValue(a,b,c))},d.hashColor2rgb=function(a){var b=a.match(/^#([0-9a-f]{3})$/i);return b?[17*parseInt(b[1].charAt(0),16),17*parseInt(b[1].charAt(1),16),17*parseInt(b[1].charAt(2),16)]:(b=a.match(/^#([0-9a-f]{6})$/i))?[parseInt(b[1].substr(0,2),16),parseInt(b[1].substr(2,2),16),parseInt(b[1].substr(4,2),16)]:[0,0,0]},d.rgb2HashColor=function(){var a,b,c="#";for(var d in arguments)a=arguments[d],b=a.toString(16),16>a&&(b="0"+b),c+=b;return c},d.getTransitionColorValue=function(a,b,c){if(0>=c)return a;if(c>=1)return b;var e=d.hashColor2rgb(a),f=d.hashColor2rgb(b),g=d.getTransitionIntValue(e[0],f[0],c),h=d.getTransitionIntValue(e[1],f[1],c),i=d.getTransitionIntValue(e[2],f[2],c);return d.rgb2HashColor(g,h,i)},d.getTransitionValue=function(a,b,c){if(0>=c)return a;if(c>=1)return b;var e=0;if(d._isNumber(a)&&d._isNumber(b))return d.getTransitionFloatValue(a,a,c);var f=/(\d*\.\d+)|(\d+)|(#[0-9a-f]{6})|(#[0-9a-f]{3})/gi,g=(""+b).match(f);return(""+a).replace(f,function(a,b,f,h,i){var j=g[e];return e++,f&&f.length?/\d*\.\d+/.test(j)?d.getTransitionFloatValue(parseFloat(a),parseFloat(j),c):d.getTransitionIntValue(parseInt(a),parseInt(j),c):b&&b.length?d.getTransitionFloatValue(parseFloat(a),parseFloat(j),c):h&&h.length||i&&i.length?d.getTransitionColorValue(a,j,c):a})},d.onScroll=function(a){var b=d.body.scrollTop();if(!a&&b===d.scrollTop)return!1;var c=d.scrollTop,e=d.direction;d.scrollTop=b,d.scrollBottom=b+d.winHeight,d.scrollCenter=b+Math.floor(d.winHeight/2),d.direction=b-c;var f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=!(d.direction===e||d.direction<0&&0>e||d.direction>0&&e>0);for(k in d.scrollLayout){for(f=d.scrollLayout[k],g=f.rules.length,h=[],i=[],j=[],l=0;g>l;l++)o=f.rules[l],p=d._default(o,"minWidth",0),q=d._default(o,"maxWidth","infinity"),r="self"===f.container?f.element:f.container,o.checkin=d.isRuleActive(o,f.element,r),o.class=o.class||"scroll-pos-"+o.alias+" window-width-"+p+"-to-"+q,o.checkin?(j.push(l),o.isActive||(o.isActive=!0,h.push(l))):o.isActive&&(o.isActive=!1,i.push(l)),f.rules[l]=o;for(n=0;n<i.length;n++)l=i[n],o=f.rules[l],f.element.removeClass(o.class),o.cssOnScroll&&(m=o.length||0,o.cssOnScroll(f.element,b>c?m:0,m,o)),o.onScroll&&(m=o.length||0,o.onScroll(f.element,b>c?m:0,m,o)),o.onCheckOut&&o.onCheckOut(f.element,o),o.onTopOut&&c>b?o.onTopOut(f.element,o):o.onBottomOut&&b>c&&o.onBottomOut(f.element,o);for(n=0;n<h.length;n++)l=h[n],o=f.rules[l],o.css&&f.element.css(d.extendCssWithPrefix(o.css)),o.addClass&&f.element.addClass(o.addClass),o.removeClass&&f.element.removeClass(o.removeClass),f.element.addClass(o.class),s=d._default(o,"bottomContainer"),t=d._default(o,"mode"),u=d._default(o,"itemHeight"),s&&t&&u&&s.css(t+"-top",u+"px"),o.onCheckIn&&o.onCheckIn(f.element,o),o.onTopIn&&b>c?o.onTopIn(f.element,o):o.onBottomIn&&c>b&&o.onBottomIn(f.element,o),o.length=o.checkin.length;for(n=0;n<j.length;n++)l=j[n],o=f.rules[l],o.cssOnScroll&&o.cssOnScroll(f.element,o.checkin.offset,o.checkin.length,o),o.onScroll&&o.onScroll(f.element,o.checkin.offset,o.checkin.length,o),v&&o.onDirectionChanged&&o.onDirectionChanged(f.element,d.direction,o);d.scrollLayout[k]=f}},d.detectCSSPrefix=function(){var a=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(window.getComputedStyle){var b=window.getComputedStyle(document.body,null);for(var c in b)if(d.theCSSPrefix=c.match(a)||+c===c&&b[c].match(a),d.theCSSPrefix)break;if(!d.theCSSPrefix)return void(d.theCSSPrefix=d.theDashedCSSPrefix="");d.theCSSPrefix=d.theCSSPrefix[0],"-"===d.theCSSPrefix.slice(0,1)?(d.theDashedCSSPrefix=d.theCSSPrefix,d.theCSSPrefix={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[d.theCSSPrefix]):d.theDashedCSSPrefix="-"+d.theCSSPrefix.toLowerCase()+"-"}},d.cssPrefix=function(a){return d.theDashedCSSPrefix+a},d.extendCssWithPrefix=function(a){var c,e,f,g,h,i={};for(c in a)e=/^-(moz-|webkit-|o-|ms-)?/i,f=c.match(e),g=c.slice(1),f&&!f[1]&&(h=a[c],i[g]=h,i[d.cssPrefix(g)]=h,delete a[c]);return b.extend(a,i),a},d.now=Date.now||function(){return+new Date},d.getRAF=function(){var a=window.requestAnimationFrame||window[d.theCSSPrefix.toLowerCase()+"RequestAnimationFrame"],b=d.now();return a||(a=function(a){var c=d.now()-b,e=Math.max(0,1e3/60-c);return window.setTimeout(function(){b=d.now(),a()},e)}),a},d.getCAF=function(){var a=window.cancelAnimationFrame||window[d.theCSSPrefix.toLowerCase()+"CancelAnimationFrame"];return(d.isMobile||!a)&&(a=function(a){return window.clearTimeout(a)}),a},d.animLoop=function(){d.onScroll(),d.animFrame=window.requestAnimFrame(d.animLoop)},d.init=function(a){return d.isInitialized?!1:(b.extend(d.options,a),d.isMobile=d._default(d.options,"isMobile",/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||window.opera)),d.detectCSSPrefix(),d.body=b(d.options.body),window.requestAnimFrame=d.getRAF(),window.cancelAnimFrame=d.getCAF(),d.timesCalled=0,b(document).ready(function(){b(window).resize(d.onResize).resize(),d.animLoop()}),void(d.isInitialized=!0))},d.destroy=function(){window.cancelAnimFrame(d.animFrame)},d.factorySticky=function(a,b,c){return c=c||a[0].tagName+"_"+Object.keys(d.scrollLayout).length,d.stickItemXY(c,a,b instanceof Array?b:[b])?c:!1},c&&(b.scroolly=d,b.fn.scroolly=function(a,b,c){return d.factory(this,a,b,c),this},b.fn.scroollySticky=function(a,b){return d.init(),this.length?d.factorySticky(this,a,b):!1}),d});