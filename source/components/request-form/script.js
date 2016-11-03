( function($) {

  'use strict';
  
  $( function() {
  
    $( '.b-request-form form' ).submit( function(e) {
      e.preventDefault();
      var $form = $( this );
      
      $.ajax({
        url: $form.attr("action"),
        type: $form.attr("method"),
        dataType: "json",
        data: $form.serialize(),
        success: function(data) {
          if ( data && data.STATUS.toUpperCase() === 'Y' ) {
            //$( '.b-request-form__success' ).html( data.MESSAGE );
            $( '.b-request-form' ).addClass( 'i-success' );
          } else if ( data && (data.STATUS.toUpperCase() === 'E' || data.STATUS.toUpperCase() === 'N' )) {
            $( '#requestFormError' ).html( data.MESSAGE );
            $( '.b-request-form' ).addClass( 'i-error' );
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
    
    $( '.b-request-form__success .btn' ).click( function(e) {
      e.preventDefault();
      $( '.b-request-form' ).removeClass( 'i-success' ).find( 'input[type=tel]' ).val('').focus();
    });
    
    $( '.b-request-form__error .btn' ).click( function(e) {
      e.preventDefault();
      $( '.b-request-form' ).removeClass( 'i-error' ).find( 'input[type=tel]' ).val('').focus();
    });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));