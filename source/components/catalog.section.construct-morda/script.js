$( function() {
    
  
    $('.construct-section-top .nav-tabs a').click(function(e){
      var parents = $(this).parents('.construct-section-top');
      e.preventDefault();
      $('.nav-tabs a', parents).removeClass( 'active' );
      $(this).addClass( 'active' ).tab('show');
//       resizeWindow();
//       alert($(this).attr('href'))

      if ( screenProd != 'xs' ) 
        destroyFotorama($('.fotorama-tabs-new', $($(this).attr('href'))));
      
      else
        satrtFotorama($('.fotorama-tabs-new', $($(this).attr('href'))));
          
    });
    
    
    
    $( window ).resize( resizeWindow );
    
    
  
//     var fotoramaConstruct = $('.construct-section-top .fotorama-tabs');
    
//     var $cardsConst = fotoramaConstruct.find( '.a-catalog-card' );
    
    
//       alert('start!')
      
    resizeWindow();
    
       
});

    
var screenProd = '', resizeProd = '';


function resizeWindow() {
  
  if ( window.matchMedia( "( min-width: 1200px )" ).matches ) {
    resizeProd = 'lg';
  } else if ( window.matchMedia( "( min-width: 992px )" ).matches ) {
    resizeProd = 'md';
  } else if ( window.matchMedia( "( min-width: 768px )" ).matches ) {
    resizeProd = 'sm';
  } else {
    resizeProd = 'xs';
  }
  
/*
  if ( screen === resize ) {
    return;
  }
*/
  screenProd = resizeProd;
  
//   alert(screen)
  
  
  
  $('.construct-section-top .active .fotorama-tabs-new').each(function(){
    
    var $fotorama2 = $(this);
    
    
    if ( screenProd == 'xs' ) {
      $fotorama2.fotorama();
    }
    else{
      if ( $fotorama2.data( 'fotorama' )) {
        $fotorama2.data('fotorama').destroy();
        $('.card-item', $fotorama2).show();
      }
    }
    
  });
  
  
  
}

function satrtFotorama(fotorama){
  fotorama.fotorama();
}

function destroyFotorama(fotorama){
//   alert('destroy')
  if(fotorama.data('fotorama')){
    fotorama.data('fotorama').destroy();
    $('.card-item', fotorama).show();
  }
}