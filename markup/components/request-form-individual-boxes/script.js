!function(a){"use strict";a(function(){var b,c=a(".b-request-form"),d=a(".b-request-form__form form"),e=a(".b-request-form__counter"),f=a(".b-request-form__feedback"),g=(a(".b-request-form__thankyou"),a(".b-request-form__once-more")),h=a(".b-request-form__callback");a(".b-request-form__error");d.submit(function(g){g.preventDefault(),a.ajax({url:d.attr("action"),type:d.attr("method"),dataType:"json",data:d.serialize(),success:function(g){if(window.ga&&ga("send","event","callback","new_callback"),window.yaCounter103630&&yaCounter103630.reachGoal("new_callback"),g&&"Y"===g.STATUS.toUpperCase())if(a(".b-request-form").removeClass("i-error").addClass("i-success"),e.length){c.addClass("i-counter");var i=e.data("num");e.text(i--),b=setInterval(function(){e.text(i--),i<0&&(clearInterval(b),c.removeClass("i-counter").addClass("i-feedback"),g&&g.ID&&f.find("form").append('<input type="hidden" name="CB_ID" value="'+g.ID+'">'))},1e3)}else h.length&&(a("#requestHour").text(d.find("select:eq(0)").val()),a("#requestMinute").text(d.find("select:eq(1)").val()),c.addClass("i-callback"));else!g||"E"!==g.STATUS.toUpperCase()&&"N"!==g.STATUS.toUpperCase()||(a("#requestFormError").html(g.MESSAGE),a(".b-request-form").addClass("i-error"))},error:function(a,b,c){window.console&&(console.log(a),console.log(b),console.log(c))}})}),a(".b-request-form__success .btn").click(function(b){b.preventDefault(),a(".b-request-form").removeClass("i-success").find("input[type=tel]").val("").focus()}),a(".b-request-form__error .btn").click(function(b){b.preventDefault(),a(".b-request-form").removeClass("i-error").find("input[type=tel]").val("").focus()}),f.find("form").submit(function(b){var d=a(this);b.preventDefault(),a.ajax({url:d.attr("action"),type:d.attr("method"),dataType:"json",data:d.serialize(),success:function(a){c.removeClass("i-feedback").addClass("i-thankyou")},error:function(a,b,c){window.colsole&&(console.log(a),console.log(b),console.log(c))}})}),f.find("a").click(function(a){a.preventDefault(),c.removeClass("i-feedback").addClass("i-once-more")}),g.find(".btn").click(function(a){a.preventDefault(),c.removeClass("i-once-more").removeClass("i-success")})})}(jQuery);