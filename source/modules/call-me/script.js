var $callMe = $( '.b-call-me' ),
    $form = $( '.b-call-me__form' ),
    $counter = $( '.b-call-me__counter' ),
    $feedback = $( '.b-call-me__feedback' ),
    $thankyou = $( '.b-call-me__thankyou' ),
    $onceMore = $( '.b-call-me__once-more' ),
    $callback = $( '.b-call-me__callback' ),
    counterInterval;

$callMe.on('shown.bs.modal', function (e) {
  $form.find( '.form-control' ).focus();
});

$callMe.on('hidden.bs.modal', function (e) {

  $callMe
    .removeClass( 'i-form' )
    .removeClass( 'i-counter' )
    .removeClass( 'i-feedback' )
    .removeClass( 'i-thankyou' )
    .removeClass( 'i-once-more' )
    .removeClass( 'i-callback' )
    .find( 'input' ).not('[type=hidden]').val('');
    
  $callMe.find( 'textarea' ).text('');
  
  if ( counterInterval ) {
    clearInterval( counterInterval );
  }
});

if ( $.mask ) {
  $form.find( 'input[ type="tel" ]' ).mask("+7 999 999-99-99");
}
    
$form.find( 'form' ).submit( function(e) {
  var $this = $( this );
  e.preventDefault();
  $.ajax({
    url: $this.attr("action"),
    type: $this.attr("method"),
    dataType: "json",
    data: $this.serialize(),
    success: function(data) {
      if ( window.ga ) {
        ga('send', 'event', 'callback', 'new_callback');
      }
      if ( window.yaCounter103630 ) {
        yaCounter103630.reachGoal('new_callback');
      }
      //counter
      if ( $counter.length ) {
        $callMe.addClass( 'i-counter' );
        var counter = $counter.data( 'num' );
        $counter.text( counter-- );
        counterInterval = setInterval( function() {
          $counter.text( counter-- );
          if ( counter < 0 ) {
            clearInterval( counterInterval );
            $callMe.removeClass( 'i-counter' ).addClass( 'i-feedback' );
            if ( data && data.ID ) {
              $feedback.find( 'form' ).append( '<input type="hidden" name="CB_ID" value="' + data.ID + '">' );
            }
          }
        }, 1000 );
      //callback
      } else if ( $callback.length ) {
        $( '#callMeHour' ).text( $form.find( 'select:eq(0)' ).val());
        $( '#callMeMinute' ).text( $form.find( 'select:eq(1)' ).val());
        $callMe.addClass( 'i-callback' );
      }
    },
    error: function() {}
  });
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
      $callMe.removeClass( 'i-feedback' ).addClass( 'i-thankyou' );
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
  $callMe.removeClass( 'i-feedback' ).addClass( 'i-once-more' );
});

$onceMore.find( '.btn' ).click( function(e) {
  e.preventDefault();
  $callMe.removeClass( 'i-once-more' );
});