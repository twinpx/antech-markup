if ( $.mask ) {
  $( '.b-call-me-block .form-control' ).mask("+7 999 999-99-99");
}

/*$( '.b-call-me-block .form-control' ).keyup( function() {
  if ( $(this).val() !== '' ) {
    $( '.b-call-me-block .btn-disabled' ).removeClass( 'btn-disabled' );
  }
});*/

$( '.b-call-me-block form' ).submit( function(e) {
  var $this = $( this );
  
  e.preventDefault();
  
  $.ajax({
    url: $this.attr("action"),
    type: $this.attr("method"),
    dataType: "json",
    data: $this.serialize(),
    
    success: function(data) {
      /*if ( window.ga ) {
        ga('send', 'event', 'callback', 'new_callback');
      }
      if ( window.yaCounter103630 ) {
        yaCounter103630.reachGoal('new_callback');
      }*/
      //counter
      $( '.b-call-me-block' ).addClass( 'i-success' );
    },
    error: function() {}
  });
});