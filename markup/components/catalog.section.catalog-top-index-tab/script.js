!function(a){"use strict";a(function(){function b(){e=window.matchMedia("( min-width: 768px )").matches?"sm":"xs",d!==e&&(d=e,c())}function c(){a(".catalog-top-index-tab .fotorama-tabs").each(function(){var b=a(this);b.data("fotorama")&&(b.data("fotorama").destroy(),a(".card-item",b).show()),"xs"===d&&b.fotorama()})}var d="",e="";a(window).resize(b),b(),a(".catalog-top-index-tab .from-form-block a.ttab").click(function(b){var c=a(this).parent();b.preventDefault(),a("a.ttab",c).removeClass("active"),a(this).addClass("active").tab("show"),a("#subtabTab").attr("href",a(this).attr("href")).attr("aria-controls",a(this).attr("aria-controls"))}),a(".catalog-top-index-tab .btn-group a.ttab").click(function(b){b.preventDefault(),"second"==a(this).data("tabtoglemode")&&a(".from-form-block").hide(),"first"==a(this).data("tabtoglemode")&&a(".from-form-block").show(),a("a.ttab",a(this).parent()).removeClass("active"),a(this).addClass("active").tab("show")})})}(jQuery);