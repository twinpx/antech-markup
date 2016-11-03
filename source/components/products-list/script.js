( function($) {

  'use strict';
  
  $( function() {
  
    $('.b-products-list__nav a').click(function (e) {
      e.preventDefault();
      $('.b-products-list__nav a').removeClass( 'active' );
      $(this).addClass( 'active' ).tab('show');
    });
    
    $( '.b-products-list .tab-content' ).delegate( '.btn-default', 'click', function(e) {
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
              $( '.count_in_cart' ).text( data.DATA.COUNT );
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
    });
    
    function store( num ) {
      if (/(10|11|12|13|14|15|16|17|18|19)$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440\u043E\u0432';}
      else if (/.*1$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440';}
      else if (/[2-4]$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440\u0430';}
      else {return '\u0442\u043E\u0432\u0430\u0440\u043E\u0432';}
    }
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });
  
  setTimeout( function() {
    if (window.devicePixelRatio > 1) {
      var $lowresImages = $('.b-products-list img');

      $lowresImages.each(function(i) {
        var $img = $( this ), highres = $img.attr('data-big-image');
        if( highres && highres !== '' ) {
          $img.attr('src', highres);
        }
      });
    }
  }, 10);

}( jQuery ));