$( '#order-link' ).click( function(e) {
  e.preventDefault();
  $.scrollTo( $('#order-block').offset().top - 120, 500 );
});

$( '#payment-link' ).click( function(e) {
  e.preventDefault();
  $.scrollTo( $('#payment-block').offset().top - 120, 500 );
  $('#payment-block .accordion-toggle').click();
});

$( '#warranty-link' ).click( function(e) {
  e.preventDefault();
  $.scrollTo( $('#warranty-block').offset().top - 120, 500 );
  $('#warranty-block .accordion-toggle').click();
});

$( '#delivery-link' ).click( function(e) {
  e.preventDefault();
  $.scrollTo( $('#delivery-block').offset().top - 120, 500 );
  $('#delivery-block .accordion-toggle').click();
});

$( '.b-top-menu__icon' ).click( function(e) {
  $( '.b-top-submenu' ).slideToggle();
  e.preventDefault();
});