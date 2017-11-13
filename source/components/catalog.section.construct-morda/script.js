$( function() {
    
  
    $('.construct-section-top a').click(function(e){
      var parents = $(this).parents('.construct-section-top');
      e.preventDefault();
      $('.nav-tabs a', parents).removeClass( 'active' );
      $(this).addClass( 'active' ).tab('show');
    });
    
    
    
    
    
  
//     var fotoramaConstruct = $('.construct-section-top .fotorama-tabs');
    
//     var $cardsConst = fotoramaConstruct.find( '.a-catalog-card' );
    
    
    var nConst = 3, screen = '', resize = '', ratioConst = 1, thumbConst = '', heightConst = 350;
  
    $( window ).resize( resizeWindow );
    
//       alert('start!')
      
    resizeWindow();
    
    function resizeWindow() {
      
      if ( window.matchMedia( "( min-width: 1200px )" ).matches ) {
        resize = 'lg';
      } else if ( window.matchMedia( "( min-width: 992px )" ).matches ) {
        resize = 'md';
      } else if ( window.matchMedia( "( min-width: 768px )" ).matches ) {
        resize = 'sm';
      } else {
        resize = 'xs';
      }
      
      if ( screen === resize ) {
        return;
      }
      screen = resize;
      
      
      
      
      $('.construct-section-top .fotorama-tabs').each(function(){
        var $fotorama = $(this);
        
/*
        if ( $fotorama.data( 'fotorama' )) {
          $fotorama.data('fotorama').destroy();
          $('.card-item', $fotorama).show();
        }
*/
        
        if ( screen === 'xs' ) {
          $fotorama.fotorama();
        }
        else{
          $fotorama.data('fotorama').destroy();
          $('.card-item', $fotorama).show();
        }
        
      });
      
      
      
    }
       
});