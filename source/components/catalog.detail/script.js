
$( function() {
  
  $('#offersItems-link').click(function(){
//     alert('text 1')
    $.scrollTo( $('#offersItems-block').offset().top - 100, 500 );
    return false;
  });
  
  $('#offersForm-link').click(function(){
//     alert('text 2')
    $.scrollTo( $('#offersForm-block').offset().top - 100, 500 );
    return false;
  });
  
  
  var $fotoramaMulticard = $( '.fotorama-catalog-multicard' );
//     var $cards = $fotorama.find( '.multicardImage' );
//     var html = '';
  var i = 0, j = 0, n = 3, screen = '', resize = '', ratio = 1, thumb = '';

  $( window ).resize( resizeWindow );
  
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
    if ( screen === 'sm' ) {
      thumb = "dots";
      ratio = 1;
    } else {
      thumb = "dots";
      ratio = 1;
      
    }
    
    if ( $fotoramaMulticard.data( 'fotorama' )) {
      $fotoramaMulticard.data('fotorama').destroy();
    }
    
    $fotoramaMulticard.fotorama({
      ratio: ratio,
      loop: true,
      width: '100%',
      arrows: true,
      click: false,
      nav: thumb,
    });
  }

});