!function(a){"use strict";a(function(){function b(){k=window.matchMedia("( min-width: 992px )").matches?"md":window.matchMedia("( min-width: 768px )").matches?"sm":"xs",j!==k&&(j=k,c())}function c(){if(f="","md"===j)for(i=Math.ceil(e.length/3),h=0;h<i;h++){for(f+="<div>\n",f+='<div class="row">\n',g=0;g<3;g++)f+='<div class="col-md-4"></div>\n';f+="</div>\n",f+="</div>\n"}else if("sm"===j)for(i=Math.ceil(e.length/2),h=0;h<i;h++){for(f+="<div>\n",f+='<div class="row">\n',g=0;g<2;g++)f+='<div class="col-sm-6"></div>\n';f+="</div>\n",f+="</div>\n"}else for(i=e.length,l=.7,h=0;h<i;h++){for(f+="<div>\n",f+='<div class="row">\n',g=0;g<1;g++)f+='<div class="col-xs-12"></div>\n';f+="</div>\n",f+="</div>\n"}d.data("fotorama")&&d.data("fotorama").destroy(),d.html(f),d.find('[ class *= "col-" ]').each(function(b){var c=a(this);c.append(e.eq(b))}),d.fotorama({ratio:l,loop:!0,width:"100%",arrows:!0,click:!1})}var d=a(".b-ideas .fotorama"),e=d.find(".b-ideas-card"),f="",g=0,h=0,i=3,j="",k="",l=!1;a(window).resize(b),b()})}(jQuery);