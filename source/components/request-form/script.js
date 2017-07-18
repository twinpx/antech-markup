( function($) {

  'use strict';
  
  $( function() {
  
    var $requestForm = $( '.b-request-form' ),
      $form = $( '.b-request-form__form form' ),
      $counter = $( '.b-request-form__counter' ),
      $feedback = $( '.b-request-form__feedback' ),
      $thankyou = $( '.b-request-form__thankyou' ),
      $onceMore = $( '.b-request-form__once-more' ),
      $callback = $( '.b-request-form__callback' ),
      $error = $( '.b-request-form__error' ),
      counterInterval;
  
    $form.submit( function(e) {
      e.preventDefault();
      
      $.ajax({
        url: $form.attr("action"),
        type: $form.attr("method"),
        dataType: "json",
        data: $form.serialize(),
        success: function(data) {
          if ( window.ga ) {
            ga('send', 'event', 'callback', 'new_callback');
          }
          if ( window.yaCounter103630 ) {
            yaCounter103630.reachGoal('new_callback');
          }
          
          if ( data && data.STATUS.toUpperCase() === 'Y' ) {
          
            //$( '.b-request-form__success' ).html( data.MESSAGE );
            $( '.b-request-form' ).removeClass( 'i-error' ).addClass( 'i-success' );
            
            //counter
            if ( $counter.length ) {
              $requestForm.addClass( 'i-counter' );
              var counter = $counter.data( 'num' );
              $counter.text( counter-- );
              counterInterval = setInterval( function() {
                $counter.text( counter-- );
                if ( counter < 0 ) {
                  clearInterval( counterInterval );
                  $requestForm.removeClass( 'i-counter' ).addClass( 'i-feedback' );
                  if ( data && data.ID ) {
                    $feedback.find( 'form' ).append( '<input type="hidden" name="CB_ID" value="' + data.ID + '">' );
                  }
                }
              }, 1000 );
            //callback
            } else if ( $callback.length ) {
              $( '#requestHour' ).text( $form.find( 'select:eq(0)' ).val());
              $( '#requestMinute' ).text( $form.find( 'select:eq(1)' ).val());
              $requestForm.addClass( 'i-callback' );
            }
            
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
    
    $feedback.find( 'form' ).submit( function(e) {
      var $this = $( this );
      e.preventDefault();
      $.ajax({
        url: $this.attr("action"),
        type: $this.attr("method"),
        dataType: "json",
        data: $this.serialize(),
        success: function(data) {
          //thankyou
          $requestForm.removeClass( 'i-feedback' ).addClass( 'i-thankyou' );
        },
        error: function(a,b,c) {
          if ( window.colsole ) {
            console.log(a);
            console.log(b);
            console.log(c);
          }
        }
      });
    });

    $feedback.find( 'a' ).click( function(e) {
      e.preventDefault();
      $requestForm.removeClass( 'i-feedback' ).addClass( 'i-once-more' );
    });

    $onceMore.find( '.btn' ).click( function(e) {
      e.preventDefault();
      $requestForm.removeClass( 'i-once-more' ).removeClass( 'i-success' );
    });
  
    /*if ( window.BX ) {
      BX.addCustomEvent( "onFrameDataReceived", function () {});
    }*/
  });

}( jQuery ));