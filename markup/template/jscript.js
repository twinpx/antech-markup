function onYouTubeIframeAPIReady(){function a(a){return function(){a.find(".b-video-button2").addClass("i-visible")}}function b(a){return function(b){b.data===YT.PlayerState.PAUSED?a.find("b-video-banner2__cover").removeClass("i-play"):b.data===YT.PlayerState.PLAYING?a.find("b-video-banner2__cover").addClass("i-play"):b.data===YT.PlayerState.ENDED&&(a.find(".b-video-banner2__cover").removeClass("i-play").show(),a.find(".b-video-banner2__ill").addClass("i-show"))}}if($("body").hasClass("i-video-ready"))for(var c=0;c<playerIdArray.length;c++){var d=$("#"+playerIdArray[c]),e=$(".b-video-banner2:eq("+c+")");playerArray[c]=new YT.Player(playerIdArray[c],{height:"641",width:"100%",videoId:d.data("video-id"),events:{onReady:a(e),onStateChange:b(e)},playerVars:{rel:0,controls:0,showinfo:0}})}else setTimeout(function(){onYouTubeIframeAPIReady()},500)}!function(a){"use strict";a(function(){function b(){a("html").addClass("i-menu-open"),a("body").css({paddingRight:f+"px"}),a(".b-header-fixed").css({paddingRight:f+"px"})}function c(){a("body").attr({style:""}),a(".b-header-fixed").attr({style:""})}function d(a){setTimeout(function(){a.addClass("i-move")},e(100,1500))}function e(a,b){return Math.floor(Math.random()*(b-a+1))+a}a(".b-header__menu").click(function(c){c.preventDefault(),a("html").addClass("i-menu-open"),b()}),a(".b-header__search").click(function(c){c.preventDefault(),a("html").addClass("i-menu-open"),b(),setTimeout(function(){a("#title-search-input").focus()},100)}),a(".b-header-menu__close").click(function(b){b.preventDefault(),a("html").removeClass("i-menu-open"),c()}),a("#cartModal").on("shown.bs.modal",function(){a("html").addClass("i-cart-modal-open")}),a(document).bind("click",function(b){a(b.target).is(".modal-backdrop")&&a("html").hasClass("i-cart-modal-open")&&a("#cartModal").modal("hide")}).bind("keyup",function(b){27===b.keyCode&&a("html").hasClass("i-menu-open")&&a(".b-header-menu__close").click()});var f=window.innerWidth-a(document).width();a(".b-modal-user").delegate(".b-signin-button div","click",function(){a(".b-modal-user").removeClass("i-visible").addClass("i-hidden"),a(".b-modal-signin, .b-modal-social").removeClass("i-hidden").addClass("i-visible"),a(".b-modal-signin .form-control").val(""),a(".b-modal-signin input:first").focus()}),a.mask&&a(".b-request-form input.form-control").mask("+7 999 999-99-99"),a(".nav-tabs a").click(function(b){b.preventDefault(),a(".nav-tabs a").removeClass("active"),a(this).addClass("active").tab("show")});var g,h=a(".b-call-me"),i=a(".b-call-me__form"),j=a(".b-call-me__counter"),k=a(".b-call-me__feedback"),l=(a(".b-call-me__thankyou"),a(".b-call-me__once-more")),m=a(".b-call-me__callback");h.on("shown.bs.modal",function(a){i.find(".form-control").focus()}),h.on("hidden.bs.modal",function(a){h.removeClass("i-form").removeClass("i-counter").removeClass("i-feedback").removeClass("i-thankyou").removeClass("i-once-more").removeClass("i-callback").find("input").val(""),h.find("textarea").text(""),g&&clearInterval(g)}),a.mask&&i.find('input[ type="tel" ]').mask("+7 999 999-99-99"),i.find("form").submit(function(b){var c=a(this);b.preventDefault(),a.ajax({url:c.attr("action"),type:c.attr("method"),dataType:"json",data:c.serialize(),success:function(b){if(j.length){h.addClass("i-counter");var c=j.data("num");j.text(c--),g=setInterval(function(){j.text(c--),c<0&&(clearInterval(g),h.removeClass("i-counter").addClass("i-feedback"),b&&b.ID&&k.find("form").append('<input type="hidden" name="CB_ID" value="'+b.ID+'">'))},1e3)}else m.length&&(a("#callMeHour").text(i.find("select:eq(0)").val()),a("#callMeMinute").text(i.find("select:eq(1)").val()),h.addClass("i-callback"))},error:function(){}})}),k.find("form").submit(function(b){var c=a(this);b.preventDefault(),a.ajax({url:c.attr("action"),type:c.attr("method"),dataType:"json",data:c.serialize(),success:function(a){h.removeClass("i-feedback").addClass("i-thankyou")},error:function(a,b,c){window.colsole&&(console.log(a),console.log(b),console.log(c))}})}),k.find("a").click(function(a){a.preventDefault(),h.removeClass("i-feedback").addClass("i-once-more")}),l.find(".btn").click(function(a){a.preventDefault(),h.removeClass("i-once-more")}),a(window).bind("scroll",function(b){a(".b-checkbox-block").not(".i-move").each(function(){var b=a(this),c=b.offset().top+b.outerHeight(),e=c-document.documentElement.clientHeight;window.pageYOffset>e&&d(b)})}),a(".b-gallery .fotorama").on("fotorama:ready",function(b,c){setTimeout(function(){if(window.devicePixelRatio>1){var b=a(".b-gallery-picture");b.each(function(b){var c=a(this),d=c.attr("data-big-image");d&&""!==d&&c.css("backgroundImage","url("+d+")")})}},10),a(this).find("a").click(function(a){a.stopPropagation()})}),a(window).bind("scroll",function(b){a(".b-menu-list").not(".i-animate").each(function(){var b=a(this);b.find(".col-sm-4:first").each(function(){var c=a(this),d=c.offset().top+c.outerHeight(),e=0;window.matchMedia("(max-width: 767px)").matches&&(e=250);var f=d-document.documentElement.clientHeight-e;window.pageYOffset>f&&b.addClass("i-animate")})})}),a("#order-link").click(function(b){b.preventDefault(),a.scrollTo(a("#order-block").offset().top-120,500)}),a("#payment-link").click(function(b){b.preventDefault(),a.scrollTo(a("#payment-block").offset().top-120,500),a("#payment-block .accordion-toggle").click()}),a("#warranty-link").click(function(b){b.preventDefault(),a.scrollTo(a("#warranty-block").offset().top-120,500),a("#warranty-block .accordion-toggle").click()}),a("#delivery-link").click(function(b){b.preventDefault(),a.scrollTo(a("#delivery-block").offset().top-120,500),a("#delivery-block .accordion-toggle").click()}),a(".b-video-banner .fotorama").on("fotorama:ready",function(b,c){function d(b){var d=a(b);c.show(c.activeIndex),d.addClass("i-play"),setTimeout(function(){d.hide()},1e3),a(".b-video-banner .fotorama").data("fotorama").stopAutoplay()}function e(){window.matchMedia("(max-width: 767px)").matches?c.resize({height:586}):window.matchMedia("(max-width: 1024px)").matches?c.resize({height:679}):c.resize({height:614})}a(".b-video-banner").mouseover(function(){a(".b-video-banner .fotorama").data("fotorama").stopAutoplay()}).mouseout(function(){a("#b-video-cover").hasClass("i-play")||a(".b-video-banner .fotorama").data("fotorama").startAutoplay(3e3)}),document.getElementById("b-video-button")&&(document.getElementById("b-video-button").onclick=function(a){a.stopPropagation(),d("#b-video-cover"),player.playVideo()},document.getElementById("b-video-button").addEventListener("touchend",function(a){a.preventDefault(),a.stopPropagation(),d("#b-video-cover"),player.playVideo()},!1)),document.getElementById("b-video-button2")&&(document.getElementById("b-video-button2").onclick=function(a){a.stopPropagation(),d("#b-video-cover2"),player2.playVideo()},document.getElementById("b-video-button2").addEventListener("touchend",function(a){a.preventDefault(),a.stopPropagation(),d("#b-video-cover2"),player2.playVideo()},!1)),document.getElementById("b-video-cover")&&(document.getElementById("b-video-cover").onclick=function(a){a.stopPropagation()}),document.getElementById("b-video-cover2")&&(document.getElementById("b-video-cover2").onclick=function(a){a.stopPropagation()}),a(this).on("fotorama:show",function(b,c,d){a(".b-video-banner__ill, .b-video-banner2__ill").removeClass("i-show"),a("#b-video-cover").hasClass("i-play")&&(a(".b-video-banner .fotorama").data("fotorama").stopAutoplay(3e3),player.pauseVideo())}).on("fotorama:showend",function(b){a(".b-video-banner__ill, .b-video-banner2__ill").addClass("i-show")}),e(),a(window).resize(function(){e()})}),window.BX&&BX.addCustomEvent("onFrameDataReceived",function(){a(".b-video-banner .fotorama").on("fotorama:ready",function(b,c){a(".b-video-banner").mouseover(function(){a(".b-video-banner .fotorama").data("fotorama").stopAutoplay()}).mouseout(function(){a(".b-video-banner .fotorama").data("fotorama").startAutoplay(3e3)})}),document.getElementById("b-video-cover")&&(document.getElementById("b-video-cover").onclick=function(){var a=this;a.className="i-play b-video-banner__cover",setTimeout(function(){a.style.display="none"},1e3),player.playVideo()})})})}(jQuery);var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var playerIdArray=[],playerArray=[];
/*! Lazy Load 1.9.7 - MIT license - Copyright 2010-2015 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);

/*! Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.14
 */
;(function(k){'use strict';k(['jquery'],function($){var j=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};j.defaults={axis:'xy',duration:0,limit:!0};j.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(f,g,h){if(typeof g=='object'){h=g;g=0}if(typeof h=='function')h={onAfter:h};if(f=='max')f=9e9;h=$.extend({},j.defaults,h);g=g||h.duration;h.queue=h.queue&&h.axis.length>1;if(h.queue)g/=2;h.offset=both(h.offset);h.over=both(h.over);return this._scrollable().each(function(){if(f==null)return;var d=this,$elem=$(d),targ=f,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=win?$(targ):$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}var e=$.isFunction(h.offset)&&h.offset(d,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=j.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=e[pos]||0;if(h.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*h.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&h.queue){if(old!=attr[key])animate(h.onAfterFirst);delete attr[key]}});animate(h.onAfter);function animate(a){$elem.animate(attr,g,h.easing,a&&function(){a.call(this,targ,h)})}}).end()};j.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}return j})}(typeof define==='function'&&define.amd?define:function(a,b){if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));