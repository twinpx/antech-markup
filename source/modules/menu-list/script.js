$( window ).bind( 'scroll', function(e) {
  $( '.b-menu-list' ).not( '.i-animate' ).each( function() {
    var $menu = $( this );
    $menu.find( '.col-sm-4:first, .col-sm-3:first' ).each( function() {
      var $col = $( this );
      var bottom = $col.offset().top + $col.outerHeight();
      var extra = 0;
      if( window.matchMedia("(max-width: 767px)").matches ) {
        extra = 250;
      }
      var scrollToScreen = bottom - document.documentElement.clientHeight - extra;
      if( window.pageYOffset > scrollToScreen ) {
        $menu.addClass( 'i-animate' );
      }
    });
  });
});