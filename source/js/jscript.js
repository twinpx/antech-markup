( function($) {

'use strict';

  $( function() {
  

$( '.b-header__menu' ).click( function(e) {
  e.preventDefault();
  $( 'html' ).addClass( 'i-menu-open' );
  openMenu();
});

$( '.b-header__search' ).click( function(e) {
  e.preventDefault();
  $( 'html' ).addClass( 'i-menu-open' );
  openMenu();
  setTimeout( function() {$( '#title-search-input' ).focus();}, 100);
});

$( '.b-header-menu__close' ).click( function(e) {
  e.preventDefault();
  $( 'html' ).removeClass( 'i-menu-open' );
  closeMenu();
});

$('#cartModal').on('shown.bs.modal', function () {
  $( 'html' ).addClass( 'i-cart-modal-open' );
});

$( document ).bind( 'click', function(e){
  if ( $(e.target).is( '.modal-backdrop' ) && $('html').hasClass( 'i-cart-modal-open' )) {
    $('#cartModal').modal('hide');
  }
}).bind( 'keyup', function(e) {
  if (e.keyCode === 27 && $('html').hasClass('i-menu-open')) {
    $('.b-header-menu__close').click();
  }
});

var scrollBarWidth = window.innerWidth - $(document).width();

function openMenu() {
  $( 'html' ).addClass( 'i-menu-open' );
  $( 'body' ).css({ paddingRight: scrollBarWidth + 'px' });
  $( '.b-header-fixed' ).css({ paddingRight: scrollBarWidth + 'px' });
}

function closeMenu() {
  $( 'body' ).attr({ style: '' });
  $( '.b-header-fixed' ).attr({ style: '' });
}

/*$( '.b-modal-signin form' ).submit( function(e) {
  e.preventDefault();
  
  var $form = $( this );
  
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    dataType: "json",
    data: $form.serialize(),
    success: function(data) {
      if ( data && data.html ) {
        $( '.b-modal-user' ).html( data.html );
        $( '.b-modal-signin .text-danger' ).text('');
        $( '.b-modal-user' ).removeClass( 'i-hidden' ).addClass( 'i-visible' );
        $( '.b-modal-social, .b-modal-signin' ).removeClass( 'i-visible' ).addClass( 'i-hidden' );
      } else if ( data && data.error ) {
        $( '.b-modal-signin .text-danger' ).text( data.error );
      }
    },
    error: function(a,b,c) {
      if ( window.console ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
});*/

$( '.b-modal-user' )/*.delegate( '.b-signout-icon', 'click', function(e) {
  e.preventDefault();
  
  var $link = $( this );
  
  $.ajax({
    url: $link.attr("href"),
    type: 'GET',
    dataType: "json",
    success: function(data) {
      if ( data && data.html ) {
        $( '.b-modal-user' ).html( data.html );
      }
    },
    error: function(a,b,c) {
      if ( window.console ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
  
})*/.delegate( '.b-signin-button div', 'click', function() {
  $( '.b-modal-user' ).removeClass( 'i-visible' ).addClass( 'i-hidden' );
  $( '.b-modal-signin, .b-modal-social' ).removeClass( 'i-hidden' ).addClass( 'i-visible' );
  $( '.b-modal-signin .form-control' ).val('');
  $( '.b-modal-signin input:first' ).focus();
});

if ( $.mask ) {
  $( '.b-request-form input.form-control' ).mask("+7 999 999-99-99");
}

$('.nav-tabs a').click(function (e) {
  e.preventDefault();
  $('.nav-tabs a').removeClass( 'active' );
  $(this).addClass( 'active' ).tab('show');
});




if ( $.mask ) {
  $( '.b-call-me-block .form-control' ).mask("+7 999 999-99-99");
}

/*$( '.b-call-me-block .form-control' ).keyup( function() {
  if ( $(this).val() !== '' ) {
    $( '.b-call-me-block .btn-disabled' ).removeClass( 'btn-disabled' );
  }
});*/

$( '.b-call-me-block form' ).submit( function(e) {
  var $this = $( this );
  
  e.preventDefault();
  
  $.ajax({
    url: $this.attr("action"),
    type: $this.attr("method"),
    dataType: "json",
    data: $this.serialize(),
    
    success: function(data) {
      /*if ( window.ga ) {
        ga('send', 'event', 'callback', 'new_callback');
      }
      if ( window.yaCounter103630 ) {
        yaCounter103630.reachGoal('new_callback');
      }*/
      //counter
      $( '.b-call-me-block' ).addClass( 'i-success' );
    },
    error: function() {}
  });
});
var $callMe = $( '.b-call-me' ),
    $form = $( '.b-call-me__form' ),
    $counter = $( '.b-call-me__counter' ),
    $feedback = $( '.b-call-me__feedback' ),
    $thankyou = $( '.b-call-me__thankyou' ),
    $onceMore = $( '.b-call-me__once-more' ),
    $callback = $( '.b-call-me__callback' ),
    counterInterval;

$callMe.on('shown.bs.modal', function (e) {
  $form.find( '.form-control' ).focus();
});

$callMe.on('hidden.bs.modal', function (e) {

  $callMe
    .removeClass( 'i-form' )
    .removeClass( 'i-counter' )
    .removeClass( 'i-feedback' )
    .removeClass( 'i-thankyou' )
    .removeClass( 'i-once-more' )
    .removeClass( 'i-callback' )
    .find( 'input' ).not('[type=hidden]').val('');
    
  $callMe.find( 'textarea' ).text('');
  
  if ( counterInterval ) {
    clearInterval( counterInterval );
  }
});

if ( $.mask ) {
  $form.find( 'input[ type="tel" ]' ).mask("+7 999 999-99-99");
}
    
$form.find( 'form' ).submit( function(e) {
  var $this = $( this );
  e.preventDefault();
  $.ajax({
    url: $this.attr("action"),
    type: $this.attr("method"),
    dataType: "json",
    data: $this.serialize(),
    success: function(data) {
      if ( window.ga ) {
        ga('send', 'event', 'callback', 'new_callback');
      }
      if ( window.yaCounter103630 ) {
        yaCounter103630.reachGoal('new_callback');
      }
      //counter
      if ( $counter.length ) {
        $callMe.addClass( 'i-counter' );
        var counter = $counter.data( 'num' );
        $counter.text( counter-- );
        counterInterval = setInterval( function() {
          $counter.text( counter-- );
          if ( counter < 0 ) {
            clearInterval( counterInterval );
            $callMe.removeClass( 'i-counter' ).addClass( 'i-feedback' );
            if ( data && data.ID ) {
              $feedback.find( 'form' ).append( '<input type="hidden" name="CB_ID" value="' + data.ID + '">' );
            }
          }
        }, 1000 );
      //callback
      } else if ( $callback.length ) {
        $( '#callMeHour' ).text( $form.find( 'select:eq(0)' ).val());
        $( '#callMeMinute' ).text( $form.find( 'select:eq(1)' ).val());
        $callMe.addClass( 'i-callback' );
      }
    },
    error: function() {}
  });
});

$feedback.find( 'form' ).submit( function(e) {
  var $this = $( this );
  e.preventDefault();
  $.ajax({
    url: $this.attr("action"),
    type: $this.attr("method"),
    dataType: "json",
    data: $this.serialize(),
    success: function(data) {
      //thankyou
      $callMe.removeClass( 'i-feedback' ).addClass( 'i-thankyou' );
    },
    error: function(a,b,c) {
      if ( window.colsole ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
});

$feedback.find( 'a' ).click( function(e) {
  e.preventDefault();
  $callMe.removeClass( 'i-feedback' ).addClass( 'i-once-more' );
});

$onceMore.find( '.btn' ).click( function(e) {
  e.preventDefault();
  $callMe.removeClass( 'i-once-more' );
});
$( 'body' )
.delegate( '.b-catalog-card .btn-default', 'click', function(e) {
  e.preventDefault();
  var $button = $( this );
  if ( $button.hasClass( '.btn-disabled' )) {
    return;
  }
  $button.addClass( 'btn-disabled' ).text( '\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435' );
  
  $.ajax({
    url: $button.attr( 'href' ),
    type: 'GET',
    dataType: "json",
    success: function(data) {
      if ( data && data.STATUS === 'Y' ) {
        if ( data.DATA.COUNT > 0 ) {
          $( '#cartModalButton' ).css({ visibility: "visible" });
          $( '#cartModalCount' ).text( data.DATA.COUNT );
          $( '#cartModalPrice' ).text( data.DATA.TOTAL_PRICE );
          $( '#cartModalNoProducts' ).hide();
          $( '#cartModalHasProducts' ).text( store(data.DATA.COUNT) + ' \u043D\u0430 \u0441\u0443\u043C\u043C\u0443' );
          $( '.count_in_cart' ).show().text( data.DATA.COUNT );
        } else {
          $( '.count_in_cart' ).hide().text( data.DATA.COUNT );
        }
      } else if ( data.STATUS === 'E' ) {
        $button.removeClass( 'btn-disabled' ).text( '\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443' );
      }
    },
    error: function(a, b, c) {
      if ( window.console ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
})
.delegate( '.b-fav-icon', 'click', function(e) {
  e.preventDefault();
  var $button = $( this );
  
  $.ajax({
    url: $button.attr( 'href' ),
    type: 'GET',
    dataType: "json",
    success: function(data) {
      if ( data && data.success ) {
        $button.addClass( 'i-active' );
        window.productsDelayInCartIDArray.push( $button.closest( '.b-catalog-card' ).data( 'id' ));
      }
    },
    error: function(a, b, c) {
      if ( window.console ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
});

function store( num ) {
  if (/(10|11|12|13|14|15|16|17|18|19)$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440\u043E\u0432';}
  else if (/.*1$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440';}
  else if (/[2-4]$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440\u0430';}
  else {return '\u0442\u043E\u0432\u0430\u0440\u043E\u0432';}
}
$( window ).bind( 'scroll', function(e) {
  $( '.b-checkbox-block' ).not( '.i-move' ).each( function() {
    var $block = $( this );
    var bottom = $block.offset().top + $block.outerHeight();
    var scrollToScreen = bottom - document.documentElement.clientHeight;
    if( window.pageYOffset > scrollToScreen ) {
      moveI( $block );
    }
  });
});

function moveI( $block ) {
  setTimeout( function() { $block.addClass( 'i-move' ); }, getRandomInt(100, 1500));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function FloatHint( elem ) {

    function c() {
        d();
        e();
    }
    
    function d() {
        self.$elem = $( elem );
        self.$elem.data( "FloatPhone", self );
        self.$close = self.$elem.find( '.b-float-hint__close' );
        self.scrollEvent = undefined;
        self.scrollIntervalEvent = undefined;
        self.scrollIntervalId = undefined;
        self.showTimeoutId = undefined;
        self.showTime = 200;
    }
    
    function e() {
        f();
        $(window).bind("scroll", g);
        self.$close.click( function() {
          Cookies.set( 'hintClose', true, { expires: 365, path: window.location.hostname });
          i();
        });
    }
    
    function f() {
        self.showTimeoutId = setTimeout(function() {
            h();
        }, self.showTime);
    }
    
    function g(a) {
        self.scrollEvent = a;
        if ( !self.scrollIntervalEvent ) {
          self.scrollIntervalEvent = a;
          clearTimeout(self.showTimeoutId);
          i();
          self.scrollIntervalId = setInterval(function() {
              return self.scrollIntervalEvent !== self.scrollEvent ? void(self.scrollIntervalEvent = self.scrollEvent) : (clearInterval(self.scrollIntervalId),
                  self.scrollIntervalEvent = void 0,
                  void f());
          }, 100);
        }
    }
    
    function h() {
      if ( !Cookies.get( 'hintClose' )) {
        self.$elem.addClass("i-visible");
      }
    }
    
    function i() {
        self.$elem.removeClass("i-visible");
    }
    var self = this;
    c();
}

if ( !Cookies.get( 'hintClose' )) {
  new FloatHint("#b-float-hint");
}
$('.b-gallery .fotorama').on('fotorama:ready', function (e, fotorama) {
  setTimeout( function() {
    if (window.devicePixelRatio > 1) {
      var $lowresImages = $('.b-gallery-picture');

      $lowresImages.each(function(i) {
        var $img = $( this ), highres = $img.attr('data-big-image');
        if( highres && highres !== '' ) {
          $img.css('backgroundImage', 'url(' + highres + ')');
        }
      });
    }
  }, 10);
  
  $( this ).find( 'a' ).click( function(e) {
    e.stopPropagation();
    //alert('');
  });
});
$( window ).bind( 'scroll', function(e) {
  $( '.b-menu-list' ).not( '.i-animate' ).each( function() {
    var $menu = $( this );
    $menu.find( '.col-sm-4:first, .col-sm-3:first' ).each( function() {
      var $col = $( this );
      var bottom = $col.offset().top + $col.outerHeight();
      var extra = 0;
      if( window.matchMedia("(max-width: 767px)").matches ) {
        extra = 250;
      }
      var scrollToScreen = bottom - document.documentElement.clientHeight - extra;
      if( window.pageYOffset > scrollToScreen ) {
        $menu.addClass( 'i-animate' );
      }
    });
  });
});



var $menu = $( '.b-top-menu' );
var $submenu = $( '.b-top-submenu' );
var $container = $menu.parent();
var $header = $( '.b-top-header' );

var menuHTML = $menu.html();

$menu.delegate( '#order-link', 'click', function(e) {
  e.preventDefault();
  $.scrollTo( $('#order-block').offset().top - 120, 500 );
  window.location.hash = 'order';
  
}).delegate( '#payment-link', 'click', function(e) {
  e.preventDefault();
  $( 'a[ href="#facilities"]' ).click();
  $.scrollTo( $('#payment-block').offset().top - 120, 500 );
  $('#payment-block .accordion-toggle').click();
  window.location.hash = 'payment';
  
}).delegate( '#warranty-link', 'click', function(e) {
  e.preventDefault();
  $( 'a[ href="#facilities"]' ).click();
  $.scrollTo( $('#warranty-block').offset().top - 120, 500 );
  $('#warranty-block .accordion-toggle').click();
  window.location.hash = 'warranty';
  
}).delegate( '#delivery-link', 'click', function(e) {
  e.preventDefault();
  $( 'a[ href="#facilities"]' ).click();
  $.scrollTo( $('#delivery-block').offset().top - 120, 500 );
  $('#delivery-block .accordion-toggle').click();
  window.location.hash = 'delivery';
  
}).delegate( '.b-top-menu__icon', 'click', function(e) {
  $( '.b-top-submenu' ).slideToggle();
  $( this ).toggleClass( 'i-open' );
  e.preventDefault();
});

var hash = window.location.hash;

if ( $( hash ).length ) {
  $.scrollTo( $( hash ).offset().top - 200, 500 );
} else {
  if ( hash === '#expert' ) {
    $.scrollTo( $( '#economy' ).offset().top - 200, 500 );
    $( 'a[href="#page1"]' ).click();
    
  } else if ( hash === '#razrabotka' ) {
    $.scrollTo( $( '#economy' ).offset().top - 200, 500 );
    $( 'a[href="#page2"]' ).click();
    
  } else if ( hash === '#model' ) {
    $.scrollTo( $( '#economy' ).offset().top - 200, 500 );
    $( 'a[href="#page3"]' ).click();
    
  } else if ( hash === '#sroki' ) {
    $( 'a[href="#accordionFAQ3"]' ).click();
    $.scrollTo( $( '#accordionFAQ3' ).offset().top - 300, 500 );
    
  } else if ( hash === '#order' ) {
    $( '#order-link' ).click();
    
  } else if ( hash === '#payment' ) {
    $( '#payment-link' ).click();
    
  } else if ( hash === '#warranty' ) {
    $( '#warranty-link' ).click();
    
  } else if ( hash === '#delivery' ) {
    $( '#delivery-link' ).click();
    
  }
}

//catalog menu
/*moveA();

$( window ).resize( function() {
  moveA();
});

function moveA() {

  $menu.html( menuHTML );
  $submenu.empty();
  
  while ( ($container.width() - $header.width() - $menu.width()) < 0 ) {
    $menu.find( 'a:last' ).prependTo( $submenu );
    $submenu.prepend( ' ' );
  }
  
  if ( !$submenu.find( 'a' ).length ) {
    $( '.b-top-menu__icon' ).hide();
  } else {
    $( '.b-top-menu__icon' ).show();
  }
}*/
$( '.b-top-submenu__up, .b-top-submenu__close svg' ).click( function() {
  $( '.b-top-submenu' ).slideUp();
  $( '.b-top-menu__icon' ).removeClass( 'i-open' );
});

if ( $( '.b-top-submenu' ).length ) {

  $( window ).bind( 'scroll', function(e) {
    
    var headerBorder = $( '.b-header-fixed' ).height() + $( '.b-header-fixed' ).offset().top;
    var submenuBorder = $( '.b-top-submenu' ).offset().top - $( window ).scrollTop() - 20;
    var windowHeight = $( window ).height();
    var arrowBorder = $( '.b-top-submenu' ).offset().top + $( '.b-top-submenu' ).height() - $( window ).scrollTop() + windowHeight - 200;
    
    if ( headerBorder > submenuBorder ) {
      if ( windowHeight > arrowBorder ) {
        $( '.b-top-submenu__close svg' ).hide();
      } else {
        $( '.b-top-submenu__close svg' ).show();
      }
    } else {
      $( '.b-top-submenu__close svg' ).hide();
    }
    
  });
  
}
//see /js/src/bottom.js
  
$('.b-video-banner .fotorama').on('fotorama:ready', function (e, fotorama) {
  $( '.b-video-banner' ).mouseover( function() {
    $('.b-video-banner .fotorama').data('fotorama').stopAutoplay();
  }).mouseout( function() {
    if ( !$( '#b-video-cover' ).hasClass( 'i-play' )) {
      $('.b-video-banner .fotorama').data('fotorama').startAutoplay( 3000 );
    }
  });
  
  function bannerVideoPlay( id ) {
    var $cover = $( id );
    fotorama.show( fotorama.activeIndex );
    $cover.addClass( "i-play" );
    setTimeout( function() { $cover.hide(); }, 1000 );
    $('.b-video-banner .fotorama').data('fotorama').stopAutoplay();
  }
  
  if (document.getElementById( 'b-video-button' )) {
    document.getElementById( 'b-video-button' ).onclick=function(e) {
      e.stopPropagation();
      bannerVideoPlay( '#b-video-cover' );
      player.playVideo(); 
    };
    document.getElementById( 'b-video-button' )
      .addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        bannerVideoPlay( '#b-video-cover' );
      player.playVideo();
    }, false);
  }
  
  if (document.getElementById( 'b-video-button2' )) {
    document.getElementById( 'b-video-button2' ).onclick=function(e) {
      e.stopPropagation();
      bannerVideoPlay( '#b-video-cover2' );
      player2.playVideo();
    };
    document.getElementById( 'b-video-button2' )
      .addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        bannerVideoPlay( '#b-video-cover2' );
        player2.playVideo();
    }, false);
  }
  
  if (document.getElementById( 'b-video-cover' )) {
    document.getElementById( 'b-video-cover' ).onclick=function(e) {
      e.stopPropagation();
    };
  }
  
  if (document.getElementById( 'b-video-cover2' )) {
    document.getElementById( 'b-video-cover2' ).onclick=function(e) {
      e.stopPropagation();
    };
  }
  
  $( this ).on( 'fotorama:show', function (e, fotorama, extra) {
    $( '.b-video-banner__ill, .b-video-banner2__ill' ).removeClass( 'i-show' );
    
    if ( $( '#b-video-cover' ).hasClass( 'i-play' )) {
      $('.b-video-banner .fotorama').data('fotorama').stopAutoplay( 3000 );
      player.pauseVideo();
    }
  }).on( 'fotorama:showend', function(e) {
    $( '.b-video-banner__ill, .b-video-banner2__ill' ).addClass( 'i-show' );
  });
  
  function resizeGallery() {
    if( window.matchMedia("(max-width: 767px)").matches ) {
      fotorama.resize({height: 586});
    } else if( window.matchMedia("(max-width: 1024px)").matches ) {
      fotorama.resize({height: 679});
    } else {
      fotorama.resize({height: 614});
    }
  }

  resizeGallery();
  
  $( window ).resize( function() {
    resizeGallery();
  });
});


if ( window.BX ) {
  BX.addCustomEvent( "onFrameDataReceived", function () {
  
    $('.b-video-banner .fotorama').on('fotorama:ready', function (e, fotorama) {
      $( '.b-video-banner' ).mouseover( function() {
        $('.b-video-banner .fotorama').data('fotorama').stopAutoplay();
      }).mouseout( function() {
        $('.b-video-banner .fotorama').data('fotorama').startAutoplay( 3000 );
      });
    });
  
    if (document.getElementById( 'b-video-cover' )) {
      document.getElementById( 'b-video-cover' ).onclick=function() {
        var cover = this;
        cover.className="i-play b-video-banner__cover";
        setTimeout( function() { cover.style.display="none"; }, 1000 );
        player.playVideo();
      };
    }
    
  });
}

  });

}( jQuery ));

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerIdArray = [];
var playerArray = [];

function onYouTubeIframeAPIReady() {
  if ( $( 'body' ).hasClass( 'i-video-ready' )) {
    for ( var i = 0; i < playerIdArray.length; i++ ) {
      var $elem = $( '#' + playerIdArray[i]);
      var $banner = $( '.b-video-banner2:eq(' + i + ')' );
      playerArray[i] = new YT.Player( playerIdArray[i], {
        height: '641',
        width: '100%',
        videoId: $elem.data( 'video-id' ),
        events: {
          'onReady': videoReady( $banner ),
          'onStateChange': videoStateChange( $banner )
        },
        playerVars: {            
          rel: 0,
          controls: 0,
          showinfo: 0
        }
      });
    }
  } else {
    setTimeout( function() { onYouTubeIframeAPIReady(); }, 500);
  }
  
  function videoReady( $banner ) {
    return function() {
      $banner.find( '.b-video-button2' ).addClass( 'i-visible' );
    };
  }
  
  function videoStateChange( $banner ) {
    return function( event ) {
      if ( event.data === YT.PlayerState.PAUSED ) {
        $banner.find( 'b-video-banner2__cover' ).removeClass( 'i-play' );
      } else if ( event.data === YT.PlayerState.PLAYING ) {
        $banner.find( 'b-video-banner2__cover' ).addClass( 'i-play' );
      } else if ( event.data === YT.PlayerState.ENDED ) {
        $banner.find( '.b-video-banner2__cover' ).removeClass( "i-play" ).show();
        $banner.find( '.b-video-banner2__ill' ).addClass( 'i-show' );
      }
    };
  }
}


