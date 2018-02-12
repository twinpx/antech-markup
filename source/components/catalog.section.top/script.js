$( function() {
//   $('.input-slider').slider({});
  
  var $fotoramaSectionTop = $( '.fotorama-section-top' );
  var i = 0, j = 0, n = 3, screen = '', resize = '', ratio = 1, thumb = '';

  $( window ).resize( resizeWindow );
  
//       alert('start!')
    
  resizeWindow();
  
  function resizeWindow() {
    if ( window.matchMedia( "( min-width: 768px )" ).matches ) {
      resize = 'sm';
    } else {
      resize = 'xs';
    }
    
    if ( screen === resize ) {
      return;
    }
    screen = resize;
    reInitiateGallery();
  }
  
  function reInitiateGallery() {
    $fotoramaSectionTop.each(function(){
      var $fotorama = $(this);
      
      if ( $fotorama.data( 'fotorama' )) {
        $fotorama.data('fotorama').destroy();
        $('.card-item', $fotorama).show();
      }
      
      if ( screen === 'xs' ) {
        $(this).fotorama();
      
      }
      
    });
  }
  
});
  