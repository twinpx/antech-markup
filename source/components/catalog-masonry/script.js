( function($) {

  'use strict';
  
  $( function() {
    
    var $cols = $( '.b-catalog-masonry .row:first [class*=col]' );
    var n = $cols.length;
    
    $( window ).resize( resizeWindow );
    
    resizeWindow();
    
    function resizeWindow() {
      if ( window.matchMedia("(min-width: 992px)").matches ) {
        if ( n%3 === 1 ) {
          $cols.last().addClass( 'col-md-12' );
        } else if ( n%3 === 2 ) {
          if ( $cols.eq( length-2 ).hasClass( 'col-md-3' ) ) {
            $cols.last().addClass( 'col-md-9' );
          } else if ( $cols.eq( length-2 ).hasClass( 'col-md-6' ) ) {
            $cols.last().addClass( 'col-md-6' );
          }
        } else {
          $cols.last().removeClass( 'col-md-12' ).removeClass( 'col-sm-12' );
        }
      } else if ( window.matchMedia("(min-width: 768px)").matches ) {
        if ( n%2 === 1 ) {
          $cols.last().addClass( 'col-md-12' );
        } else {
          $cols.last().removeClass( 'col-md-12' ).removeClass( 'col-sm-12' );
        }
      }
    }
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));