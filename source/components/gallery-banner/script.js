( function($) {

  'use strict';
  
  $( function() {
  
    $('.b-gallery-banner .fotorama').on('fotorama:ready', function (e, fotorama) {
      var $fotorama = $( this );
    
      $( '.b-video-banner2' ).each( function( index ) {
        var $this = $( this ),
          $cover = $this.find( '.b-video-banner2__cover' ),
          $button = $this.find( '.b-video-button2' ),
          $buttonText = $this.find( '.b-video-button2-text' );
        
        $button.bind( 'click', function(e) {
          e.stopPropagation();
          fotorama.show( index );
          fotorama.stopAutoplay();
        });
        
      });
      
      $fotorama.on( 'fotorama:show', function (e, fotorama, extra) {
        $( '.b-video-banner2__ill' ).removeClass( 'i-show' );
        
        if ( $( '.b-video-banner2__cover' ).hasClass( 'i-play' )) {
          fotorama.stopAutoplay( 3000 );
          for ( var i = 0; i < playerArray.length; i++ ) {
            playerArray[i].pauseVideo();
          }
        }
      }).on( 'fotorama:showend', function(e) {
        $( '.b-video-banner2:eq(' + fotorama.activeIndex + ') .b-video-banner2__ill' ).addClass( 'i-show' );
      });
          
      $( '.b-gallery-banner' ).mouseover( function() {
        fotorama.stopAutoplay();
      }).mouseout( function() {
        if ( !$( '.b-gallery-banner .b-video-banner2__cover' ).hasClass( 'i-play' )) {
          fotorama.startAutoplay( 3000 );
        }
      });
    });    
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));