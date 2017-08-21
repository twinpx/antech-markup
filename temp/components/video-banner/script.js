( function($) {

  'use strict';
  
  $( function() {
  
    $( '.b-video-banner2' ).each( function( index ) {
      var $this = $( this ),
          $cover = $this.find( '.b-video-banner2__cover' ),
          $button = $this.find( '.b-video-button2' ),
          $buttonText = $this.find( '.b-video-button2-text' );
      
      //id of the player
      $this.find( '.b-video-player' ).attr( 'id', 'videoPlayer' + index );
      playerIdArray.push( 'videoPlayer' + index );
      
      //show illustration
      $this.find( '.b-video-banner2__ill' ).addClass( 'i-show' );
      
      //button click event
      $button.click( function(e) {
        e.stopPropagation();
        $cover.addClass( "i-play" );
        setTimeout( function() { $cover.hide(); }, 1000 );
        playerArray[ index ].playVideo();
      });
      
      //button touch event
      $button[0].addEventListener( 'touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $cover.addClass( "i-play" );
        setTimeout( function() { $cover.hide(); }, 1000 );
        playerArray[ index ].playVideo();
      }, false);
    });
    
    $( 'body' ).addClass( 'i-video-ready' );
    
    
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));