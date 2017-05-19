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
  $( 'a[ href="#facilities"]' ).click();
  $.scrollTo( $('#payment-block').offset().top - 120, 500 );
  $('#payment-block .accordion-toggle').click();
  
}).delegate( '#warranty-link', 'click', function(e) {
  e.preventDefault();
  $( 'a[ href="#facilities"]' ).click();
  $.scrollTo( $('#warranty-block').offset().top - 120, 500 );
  $('#warranty-block .accordion-toggle').click();
  
}).delegate( '#delivery-link', 'click', function(e) {
  e.preventDefault();
  $( 'a[ href="#facilities"]' ).click();
  $.scrollTo( $('#delivery-block').offset().top - 120, 500 );
  $('#delivery-block .accordion-toggle').click();
  
}).delegate( '.b-top-menu__icon', 'click', function(e) {
  $( '.b-top-submenu' ).slideToggle();
  e.preventDefault();
});

var hash = window.location.hash;

if ( $( hash ).length ) {
  $.scrollTo( $( hash ).offset().top - 200, 500 );
} else {
  if ( hash === '#expert' ) {
    $.scrollTo( $( '#economy' ).offset().top - 200, 500 );
    $( 'a[href="#page1"]' ).click();
    
  } else if ( hash === '#razrabotka' ) {
    $.scrollTo( $( '#economy' ).offset().top - 200, 500 );
    $( 'a[href="#page2"]' ).click();
    
  } else if ( hash === '#model' ) {
    $.scrollTo( $( '#economy' ).offset().top - 200, 500 );
    $( 'a[href="#page3"]' ).click();
    
  } else if ( hash === '#sroki' ) {
    $( 'a[href="#accordionFAQ3"]' ).click();
    $.scrollTo( $( '#accordionFAQ3' ).offset().top - 300, 500 );
    
  }
}

//catalog menu
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
  
  if ( !$submenu.find( 'a' ).length ) {
    $( '.b-top-menu__icon' ).hide();
  } else {
    $( '.b-top-menu__icon' ).show();
  }
}