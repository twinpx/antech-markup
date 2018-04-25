$(function(){
  
    
  var itemsFotorama = $('.a-catalog-section .items-fotorama');
  
//   itemsFotorama.fotorama();
  
  
  var $fotoramaSection = $( '.fotorama-catalog-section' );
  
  var i = 0, 
  j = 0, 
  n = 3, 
  screen = '', 
  resize = '', 
  ratio = 1, 
  thumb = false,
  arrows = true;

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
//     reInitiateCatalogGridCard();
  }
  
  function reInitiateGallery() {
    
    
    
    if ( screen === 'sm' ) {
//       thumb = "dots";
//       ratio = 1;
//       arrows = true;
    
    } else {
//       thumb = false;
//       ratio = 1;
      arrows = false;
    }
    
    if ( itemsFotorama.data( 'fotorama' )) {
      itemsFotorama.data('fotorama').destroy();
    }
    
    itemsFotorama.fotorama({
      ratio: ratio,
      loop: true,
      width: '100%',
      arrows: arrows,
      click: false,
      nav: thumb,
    });
    

  }
  
/*
  function reInitiateCatalogGridCard() {
    $( '.fotorama-catalog-grid-card' ).each(function(){
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
*/
  
  
  
  

/*
  $( '.b-catalog-card__image' ).lazyload({
    effect : "fadeIn"
  });
*/
  
  $('.togle-offers-block').click(function(){
    var parent = $(this).parents('.a-catalog-card-horisontal');
    $('.offers-list-on-form', parent).toggle();
    return false;
  });
  
  
  $('.a-catalog-section .fotorama__stage__shaft').click(function(){
//     console.log('i work!');
    
    var parent = $(this).parents('.items-fotorama');
    
//     console.log('sdlfkj', parent.data('url'));
    
    if(parent.data('url').length > 0){
      window.location.href = parent.data('url');
    }
  });
  
});