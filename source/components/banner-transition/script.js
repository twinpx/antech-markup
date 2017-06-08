( function($) {

  'use strict';
  
  $( function() {
  
    var counter = 1;
  
    var intervalId = setInterval( function() {
      $( '.b-banner-transition' ).removeClass( 'i-' + counter );
      if ( counter >= 5) {
        counter = 0;
      }
      $( '.b-banner-transition' ).addClass( 'i-' + (++counter) );
    }, 3000 );
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));