( function($) {

  'use strict';
  
  $( function() {
  
    if ( $.mask ) {
      $( '.b-order-form input[type="tel"]' ).mask( "+7 999 999-99-99" );
    }
    
    $( '.b-order-form input.i-required' ).blur( function() {
      $( this ).removeClass( 'i-required' );
    });
  
    $( '.b-order-form form' ).submit( function(e) {
      e.preventDefault();
      var $form = $( this );
      
      $.ajax({
        url: $form.attr("action"),
        type: $form.attr("method"),
        dataType: "json",
        data: $form.serialize(),
        success: function(data) {
          if ( data && data.STATUS == 'Y' ) {
            $form.closest( '.b-order-form' ).find( 'h2' ).remove();
            $form.closest( '.b-order-form' ).addClass( 'i-success' ).css({
              width: $form.closest( '.b-order-form' ).outerWidth(),
              height: $form.closest( '.b-order-form' ).outerHeight()
            })
            .append( '<h2 class="b-order-form__message">' + data.MESSAGE + '</h2>' );
            setTimeout( function() {
              $( '.b-order-form__message' ).addClass( 'i-show' );
            }, 100);
            $form.remove();
          }
        },
        error: function() {}
      });
    });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));