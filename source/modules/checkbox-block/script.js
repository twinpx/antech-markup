$( window ).bind( 'scroll', function(e) {
  $( '.b-checkbox-block' ).not( '.i-move' ).each( function() {
    var $block = $( this );
    var bottom = $block.offset().top + $block.outerHeight();
    var scrollToScreen = bottom - document.documentElement.clientHeight;
    if( window.pageYOffset > scrollToScreen ) {
      moveI( $block );
    }
  });
});

function moveI( $block ) {
  setTimeout( function() { $block.addClass( 'i-move' ); }, getRandomInt(100, 1500));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
