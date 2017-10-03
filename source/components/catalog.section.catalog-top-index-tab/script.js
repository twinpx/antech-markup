( function($) {
  'use strict';
  
  $( function() {
    
    
    
    
    
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
      
      reInitiateCatalogGridCard();
    }
    
    
    
    function reInitiateCatalogGridCard() {
      $( '.catalog-top-index-tab .fotorama-tabs' ).each(function(){
        var $fotorama = $(this);
        
        if ( $fotorama.data( 'fotorama' )) {
          $fotorama.data('fotorama').destroy();
          $('.card-item', $fotorama).show();
        }
        
        if ( screen === 'xs' ) {
          $fotorama.fotorama();
        }
        
      });
    }
    
    
    
    
  
    $('.catalog-top-index-tab .from-form-block a.ttab').click(function(e){
      var parents = $(this).parent();
      e.preventDefault();
      $('a.ttab', parents).removeClass( 'active' );
      $(this).addClass( 'active' ).tab('show');
      
      
      $('#subtabTab').attr('href', $(this).attr('href')).attr('aria-controls', $(this).attr('aria-controls'));
      
    });
    
    $('.catalog-top-index-tab .btn-group a.ttab').click(function(e){
      e.preventDefault();
      
      if($(this).data('tabtoglemode') == 'second'){
        $('.from-form-block').hide();
      }
      
      if($(this).data('tabtoglemode') == 'first'){
        $('.from-form-block').show();
        
      }
      
      $('a.ttab', $(this).parent()).removeClass( 'active' );
      
      $(this).addClass( 'active' ).tab('show');
      
      
      
    });
    
/*
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
      e.target // newly activated tab
      e.relatedTarget // previous active tab
    })
*/
    
  });
  
}( jQuery ));

  