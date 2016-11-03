$( window ).bind( 'scroll', function(e) {
  $( '.b-menu-list' ).not( '.i-animate' ).each( function() {
    var $menu = $( this );
    $menu.find( '.col-sm-4:first' ).each( function() {
      var $col = $( this );
      var bottom = $col.offset().top + $col.outerHeight();
      var scrollToScreen = bottom - document.documentElement.clientHeight;
      if( window.pageYOffset > scrollToScreen ) {
        $menu.addClass( 'i-animate' );
      }
    });
  });
});