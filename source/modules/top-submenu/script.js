$( '.b-top-submenu__up, .b-top-submenu__close svg' ).click( function() {
  $( '.b-top-submenu' ).slideUp();
  $( '.b-top-menu__icon' ).removeClass( 'i-open' );
});

if ( $( '.b-top-submenu' ).length ) {

  $( window ).bind( 'scroll', function(e) {
    
    var headerBorder = $( '.b-header-fixed' ).height() + $( '.b-header-fixed' ).offset().top;
    var submenuBorder = $( '.b-top-submenu' ).offset().top - $( window ).scrollTop() - 20;
    var windowHeight = $( window ).height();
    var arrowBorder = $( '.b-top-submenu' ).offset().top + $( '.b-top-submenu' ).height() - $( window ).scrollTop() + windowHeight - 200;
    
    if ( headerBorder > submenuBorder ) {
      if ( windowHeight > arrowBorder ) {
        $( '.b-top-submenu__close svg' ).hide();
      } else {
        $( '.b-top-submenu__close svg' ).show();
      }
    } else {
      $( '.b-top-submenu__close svg' ).hide();
    }
    
  });
  
}