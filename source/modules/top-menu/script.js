var $menu = $( '.b-top-menu' );
var $submenu = $( '.b-top-submenu' );
var $container = $menu.parent();
var $header = $( '.b-top-header' );

var menuHTML = $menu.html();

$menu.delegate( '#order-link', 'click', function(e) {
  e.preventDefault();
  $.scrollTo( $('#order-block').offset().top - 120, 500 );
  
}).delegate( '#payment-link', 'click', function(e) {
  e.preventDefault();
  $.scrollTo( $('#payment-block').offset().top - 120, 500 );
  $('#payment-block .accordion-toggle').click();
  
}).delegate( '#warranty-link', 'click', function(e) {
  e.preventDefault();
  $.scrollTo( $('#warranty-block').offset().top - 120, 500 );
  $('#warranty-block .accordion-toggle').click();
  
}).delegate( '#delivery-link', 'click', function(e) {
  e.preventDefault();
  $.scrollTo( $('#delivery-block').offset().top - 120, 500 );
  $('#delivery-block .accordion-toggle').click();
  
}).delegate( '.b-top-menu__icon', 'click', function(e) {
  $( '.b-top-submenu' ).slideToggle();
  e.preventDefault();
});

moveA();

$( window ).resize( function() {
  moveA();
});

function moveA() {
  $menu.html( menuHTML );
  $submenu.empty();
  while ( ($container.width() - $header.width() - $menu.width()) < 0 ) {
    $menu.find( 'a:last' ).prependTo( $submenu );
    $submenu.prepend( ' ' );
  }
}