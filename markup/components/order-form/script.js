!function(a){"use strict";a(function(){a.mask&&a('.b-order-form input[type="tel"]').mask("+7 999 999-99-99"),a(".b-order-form input.i-required").blur(function(){a(this).removeClass("i-required")}),a(".b-order-form form").submit(function(b){b.preventDefault();var c=a(this);a.ajax({url:c.attr("action"),type:c.attr("method"),dataType:"json",data:c.serialize(),success:function(b){b&&"Y"==b.STATUS&&(c.closest(".b-order-form").find("h2").remove(),c.closest(".b-order-form").addClass("i-success").css({width:c.closest(".b-order-form").outerWidth(),height:c.closest(".b-order-form").outerHeight()}).append('<h2 class="b-order-form__message">'+b.MESSAGE+"</h2>"),setTimeout(function(){a(".b-order-form__message").addClass("i-show")},100),c.remove())},error:function(){}})})})}(jQuery);