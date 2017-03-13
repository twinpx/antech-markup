( function($) {

  'use strict';
  
  $( function() {
    
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
    });
    
    function store( num ) {
      if (/(10|11|12|13|14|15|16|17|18|19)$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440\u043E\u0432';}
      else if (/.*1$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440';}
      else if (/[2-4]$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440\u0430';}
      else {return '\u0442\u043E\u0432\u0430\u0440\u043E\u0432';}
    }
    
    $( '.b-products-list__image' ).lazyload({
      effect : "fadeIn"
    });
    
    $( '.b-products-list' ).each( function() {
      var $list = $( this ),
          $tabs = $list.find( '.tab-pane' ),
          pageLoad = {},
          searchArray;
        
      //load next page
      $list.delegate( '.b-products-list__load:not( i-preloader )', 'click', function() {
        var $load = $( this ),
            $tab = $load.closest( '.tab-pane' ),
            $wrapper = $tab.find( '.b-products-list__wrapper' ),
            code = $tab.attr( 'id' );
            
        $.ajax({
          url: $load.data( 'ajax' ),
          type: 'GET',
          dataType: "html",
          data: "PAGEN_1=" + $load.data( 'page' ),
          beforeSend: function() {
            $load.addClass( 'i-preloader' );
          },
          success: function( data ) {
            $wrapper.append( data );
            
            $wrapper.find( 'section:last' ).slideDown();
            
            $wrapper.find( '.b-products-list__image' ).lazyload({
              effect : "fadeIn"
            });
              
            $load.remove();
            
            if ( !!pageLoad[ code ] && --pageLoad[ code ] !== 0 ) {
              $tab.find( '.b-products-list__load' ).click();
            }
            if ( !pageLoad[ code ] ) {
              var a = String( window.location ).split( '?' ),
                  b = '',
                  c,
                  n = $wrapper.find( 'section' ).length + 1;
                  
              if ( a[1] ) {
                b = a[1].split( '&' );
                for ( var i = 0; i < b.length; i++ ) {
                  if ( b[i].search( code + '=' ) !== -1 ) {
                    c = i;
                  }
                }
                if ( c !== undefined ) {
                  b[c] = code + '=' + n;
                } else {
                  b.push( code + '=' + n );
                }
                b = b.join( '&' );
              } else {
                b = code + '=' + n;
              }
              window.history.pushState( {}, $( 'title' ).text(), a[0] + '?' + b );
              
              if ( $tab.hasClass( 'active' )) {
                setTimeout( function() {
                  $.scrollTo( $wrapper.find( 'section:last' ).offset().top, 500 );
                }, 500);
              }
            }
          },
          error: function( a, b, c ) {
            if ( window.console ){
              console.log(a);
              console.log(b);
              console.log(c);
            }
          }
        });
        
      });
      
      //load pages from window.location.search
      searchArray = String( window.location.search ).split( '&' );
      
      $tabs.each( function() {
        for ( var i = 0; i < searchArray.length; i++ ) {
          var code = $( this ).attr( 'id' );
          if ( searchArray[i].search( code ) !== -1 ) {
            pageLoad[ code ] = Number( searchArray[i].split( '=' )[1]);
          }
        }
      });
      
      for ( var code in pageLoad ) {
        if ( !!pageLoad[ code ] && --pageLoad[ code ] !== 0 ) {
          $( '#' + code ).find( '.b-products-list__load' ).click();
        }
      }
      
    });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));