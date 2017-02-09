( function($) {

  'use strict';
  
  $( function() {
  
    $( '.b-portfolio' ).each( function() {
      var $portfolio = $( this ),
          $wrapper = $portfolio.find( '.b-portfolio__wrapper' ),
          $detail = $portfolio.find( '.b-portfolio__detail' ),
          $detailTitle = $detail.find( '.b-portfolio__title' ),
          $detailButton = $detail.find( '.btn' ),
          $fotorama = $detail.find( '.fotorama' ),
          fotoramaObj,
          searchArray,
          pageLoad;
          
      //lazyload
      $portfolio.find( '.b-portfolio__item div' ).lazyload({
        effect : "fadeIn"
      });
      
      //fotorama
      $fotorama.on( 'fotorama:ready', function ( e, fotorama ) {
        fotoramaObj = fotorama;
      });
      
      //show detail
      $portfolio.delegate( '.b-portfolio__item', 'click', function() {
        var $item = $( this ),
            $items = $item.parent().find( '.b-portfolio__item' ),
            index = $items.index( $item ),
            activeIndex,
            currentIndex;
            
        //align pointer
        $detail.removeClass( 'i-first' ).removeClass( 'i-second' );
        
        switch ( index % 3 ) {
          case 0:
            $detail.addClass( 'i-first' );
            break;
          case 1:
            $detail.addClass( 'i-second' );
            break;
        }
        
        //append detail after the third in a row
        if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
          if ( $detail.is( ':visible' )) {
            setTimeout( function() {
              $item.after( $detail );
            }, 400 );
          } else {
            $item.after( $detail );
          }
        } else {
          if ( $detail.is( ':visible' )) {
            setTimeout( function() {
              appendDetail( index, $items, $detail );
            }, 400 );
          } else {
            appendDetail( index, $items, $detail );
          }
        }
        
        //show detail
        if ( $item.hasClass( 'i-active' )) {
          $detail.slideUp();
          $item.removeClass( 'i-active' );
        } else if ( $portfolio.find( '.b-portfolio__item.i-active' ).length ) {
        
          activeIndex = $items.index( $portfolio.find( '.b-portfolio__item.i-active' ));
          currentIndex = $items.index( $item );
          
          if ( window.matchMedia( '(max-width: 767px)' ).matches ) {
            $detail.slideUp();
            setTimeout( function() {
              appendDetailContent();
              $detail.slideDown();
            }, 400 );
          } else {
            if ( Math.floor( activeIndex / 3 ) !== Math.floor( currentIndex / 3 )) {
              $detail.slideUp();
              setTimeout( function() {
                appendDetailContent();
                $detail.slideDown();
              }, 400 );
            } else {
              appendDetailContent();
            }
          }
          
          $portfolio.find( '.b-portfolio__item.i-active' ).removeClass( 'i-active' );
          $item.addClass( 'i-active' );
          
          setTimeout( function() {
            $.scrollTo( $item.offset().top + 150, 500 );
          }, 500);
          
        } else {
          $item.addClass( 'i-active' );
          $detail.slideDown();
          appendDetailContent();
          $.scrollTo( $item.offset().top + 150, 500 );
        }
    
        function appendDetailContent() {
          //rebuild gallery
          var galleryObj = $item.data( 'gallery' ) || {},
          imgHtml = '',
          i;
          
          setTimeout( function() {
            if ( fotoramaObj ) {
              fotoramaObj.destroy();
            }
            
            for ( i = 0; i < galleryObj.images.length; i++ ) {
              imgHtml += '<img src="' + galleryObj.images[i] + '" alt=""> ';
            }
            
            $fotorama
              .empty()
              .append( imgHtml )
              .fotorama()
              .data( 'fotorama' ).show(0);
              
            $detailTitle.text( galleryObj.title );
            $detailButton.attr( 'href', galleryObj.button );
          }, 100);
        }
        
      })
      //load next page
      .delegate( '.b-portfolio__load:not( i-preloader )', 'click', function() {
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
              .find( 'section:last' )
              .slideDown()
              .find( '.b-portfolio__item div' ).lazyload({
                effect : "fadeIn"
              });
            $load.remove();
            
            if ( !!pageLoad && --pageLoad !== 0 ) {
              $wrapper.find( '.b-portfolio__load' ).click();
            }
            if ( !pageLoad ) {
              var a = String( window.location ).split( '?' ),
                  b = '',
                  c,
                  n = $wrapper.find( 'section' ).length + 1;
                  
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
                $.scrollTo( $wrapper.find( 'section:last' ).offset().top, 500 );
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
        $wrapper.find( '.b-portfolio__load' ).click();
      }
    });
    
    function appendDetail( index, $items, $detail ) {
      index = Math.ceil( ++index / 3 ) * 3 - 1;
      if ( $items.eq( index ).length ) {
        $items.eq( index ).after( $detail );
      } else {
        $items.eq( $items.length - 1 ).after( $detail );
      }
    }
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));