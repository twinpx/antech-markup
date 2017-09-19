( function($) {

  'use strict';
  
  $( function() {
    
    
    
    var $fotoramaSection = $( '.fotorama-catalog-section' );
    var i = 0, j = 0, n = 3, screen = '', resize = '', ratio = 1, thumb = '';
  
    $( window ).resize( resizeWindow );
    
//       alert('start!')
      
    resizeWindow();
    
    function resizeWindow() {
      if ( window.matchMedia( "( min-width: 768px )" ).matches ) {
        resize = 'sm';
      } else {
        resize = 'xs';
      }
      
      if ( screen === resize ) {
        return;
      }
      screen = resize;
      reInitiateGallery();
      reInitiateCatalogGridCard();
    }
    
    function reInitiateGallery() {
      if ( screen === 'sm' ) {
        thumb = "thumbs";
        ratio = 1;
      } else {
        thumb = "dots";
        ratio = 1;
        
      }
      
      if ( $fotoramaSection.data( 'fotorama' )) {
        $fotoramaSection.data('fotorama').destroy();
      }
      
      $fotoramaSection.fotorama({
        ratio: ratio,
        loop: true,
        width: '100%',
        arrows: true,
        click: false,
        nav: thumb,
      });
    }
    
    
    function reInitiateCatalogGridCard() {
      $( '.fotorama-catalog-grid-card' ).each(function(){
        var $fotorama = $(this);
        
        if ( $fotorama.data( 'fotorama' )) {
          $fotorama.data('fotorama').destroy();
          $('.card-item', $fotorama).show();
        }
        
        if ( screen === 'xs' ) {
          $(this).fotorama();
        }
        
      });
    }
    
    
    
    
  
    $( '.b-catalog-card__image' ).lazyload({
      effect : "fadeIn"
    });
    
    
    
    
    
    
    /*
    
    if ( window.productsDelayInCartIDArray ) {
      for ( var k = 0; k < window.productsDelayInCartIDArray.length; k++ ) {
        $( '.b-catalog-card[data-id=' + window.productsDelayInCartIDArray[k] + '] .b-fav-icon' ).addClass( 'i-active' );
      }
    }
  
    //background for breadcrumbs
    $( '.b-catalog-section__breadcrumbs .row' ).css({ background: $( '.b-catalog-section-ill' ).css( 'background' ) });
    
    //pagination
    $( '.b-catalog-section-items' ).each( function() {
      var $wrapper = $( '.b-catalog-section__wrapper' ),
          $list = $( this ),
          searchArray,
          pageLoad;
        
      //load next page
      $list.delegate( '.b-catalog-section__load:not( i-preloader )', 'click', function() {
        var $load = $( this );
            
        $.ajax({
          url: $load.data( 'ajax' ),
          type: 'GET',
          dataType: "html",
          data: "PAGEN_1=" + $load.data( 'page' ),
          beforeSend: function() {
            $load.addClass( 'i-preloader' );
          },
          success: function( data ) {
            $wrapper
              .append( data )
              .find( 'article:last' )
              .slideDown()
              .find( '.b-catalog-card__image' ).lazyload({
                effect : "fadeIn"
              });
              
            for ( var j = 0; j < productsInCartIDArray.length; j++ ) {
              $( '#add_in_cart_' + productsInCartIDArray[j] ).hide();
              $( '#added_in_cart_' + productsInCartIDArray[j] ).show();
            }
              
            for ( var k = 0; k < window.productsDelayInCartIDArray.length; k++ ) {
              $( '.b-catalog-card[data-id=' + window.productsDelayInCartIDArray[k] + '] .b-fav-icon' ).addClass( 'i-active' );
            }
              
            $load.remove();
            
            if ( !!pageLoad && --pageLoad !== 0 ) {
              $wrapper.find( '.b-catalog-section__load' ).click();
            }
            if ( !pageLoad ) {
              var a = String( window.location ).split( '?' ),
                  b = '',
                  c,
                  n = $wrapper.find( 'article' ).length + 1;
                  
              if ( a[1] ) {
                b = a[1].split( '&' );
                for ( var i = 0; i < b.length; i++ ) {
                  if ( b[i].search( 'page=' ) !== -1 ) {
                    c = i;
                  }
                }
                if ( c !== undefined ) {
                  b[c] = 'page=' + n;
                } else {
                  b.push( 'page=' + n );
                }
                b = b.join( '&' );
              } else {
                b = 'page=' + n;
              }
              window.history.pushState( {}, $( 'title' ).text(), a[0] + '?' + b );
              setTimeout( function() {
                $.scrollTo( $wrapper.find( 'article:last' ).offset().top, 500 );
              }, 500);
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
      for ( var i = 0; i < searchArray.length; i++ ) {
        if ( searchArray[i].search( 'page' ) !== -1 ) {
          pageLoad = Number( searchArray[i].split( '=' )[1]);
        }
      }
      
      if ( !!pageLoad && --pageLoad !== 0 ) {
        $wrapper.find( '.b-catalog-section__load' ).click();
      }
      
    });
*/
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));