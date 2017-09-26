( function($) {

  'use strict';
  
  $( function() {
    $('.b-catalog-card__image').lazyload();
    
    var $fotorama = $( '.a-catalog-gallery__fotorama' );
    var $cards = $fotorama.find( '.a-catalog-card' );
    var html = '';
    var i = 0, j = 0, n = 3, screen = '', resize = '', ratio = '', height = '350';
  
    $( window ).resize( resizeWindow );
    
    resizeWindow();
    
    function resizeWindow() {
    
      if ( window.matchMedia( "( min-width: 992px )" ).matches ) {
        resize = 'md';
      } else if ( window.matchMedia( "( min-width: 768px )" ).matches ) {
        resize = 'sm';
      } else {
        resize = 'xs';
      }
      
      if ( screen === resize ) {
        return;
      }
      screen = resize;
      reInitiateGallery();
    }
    
    function reInitiateGallery() {
    
      html = '';
      
      if ( screen === 'md' ) {
        ratio = '';
        height = '270';
        
        n = Math.ceil( $cards.length / 3 );
        
        for ( j = 0; j < n; j++ ) {
          html += '<div>\n';
          html += '<div class="row">\n';
          
          for ( i = 0; i < 3; i++ ) {
            html += '<div class="col-md-4"></div>\n';
          }
          
          html += '</div>\n';
          html += '</div>\n';
        }
        
      } else if ( screen === 'sm' ) {
        
        n = Math.ceil( $cards.length / 2 );
        ratio = '';
        height = '400';
      
        for ( j = 0; j < n; j++ ) {
          html += '<div>\n';
          html += '<div class="row">\n';
          
          for ( i = 0; i < 2; i++ ) {
            html += '<div class="col-sm-6"></div>\n';
          }
          
          html += '</div>\n';
          html += '</div>\n';
        }
        
      } else {
        
        n = $cards.length;
        ratio = '';
        height = '350';
      
        for ( j = 0; j < n; j++ ) {
          html += '<div>\n';
          html += '<div class="row">\n';
          
          for ( i = 0; i < 1; i++ ) {
            html += '<div class="col-xs-12"></div>\n';
          }
          
          html += '</div>\n';
          html += '</div>\n';
        }
        
      }
      
      if ( window.matchMedia( "( min-width: 1200px )" ).matches ) {
        ratio = '';
        height = '340';
      }
      
      if ( $fotorama.data( 'fotorama' )) {
        $fotorama.data('fotorama').destroy();
      }
      
      $fotorama.html( html );
      
      $fotorama.find( '[ class *= "col-" ]' ).each( function( index ) {
        var $col = $( this );
        $col.append( $cards.eq( index ));
      });
      
      $fotorama.fotorama({
        ratio: ratio,
        loop: true,
        width: '100%',
        height: height,
        arrows: true,
        click: false
      });
    }
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));