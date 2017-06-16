( function($) {

  'use strict';
  
  $( function() {
  
    var counter = 1;
  
    var intervalId = setInterval( function() {
    
      $( '.b-banner-transition' )
        .removeClass( 'i-0' )
        .removeClass( 'i-' + counter );
      
      if ( counter >= 5) {
        counter = 0;
      }
      
      $( '.b-banner-transition' ).addClass( 'i-' + (++counter) );
      
      setTimeout( function() {
        var prev = counter-1;
      
        if ( counter === 1) {
          prev = 5;
        }
      
        $( '.b-banner-transition' )
          .removeClass( 'i-text-0' )
          .removeClass( 'i-text-' + prev )
          .addClass( 'i-text-' + counter );
          
      }, 1000);
      
    }, 3000 );
    
    setTimeout( function() {
      $( '.b-banner-transition img.i-5' ).show();
    }, 1000);
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));