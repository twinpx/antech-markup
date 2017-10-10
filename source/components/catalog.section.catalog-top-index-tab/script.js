( function($) {
  'use strict';
  
  $( function() {
    
    
    var fotoramaUsage = $('.catalog-top-index-tab .fotorama-tabs-usage');
    
    var $cards = fotoramaUsage.find( '.card-item' );
    var html = '';
    
    
    var i = 0, j = 0, n = 3, screen = '', resize = '', ratio = 1, thumb = '', height = 350;
  
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
      
      eInitiateUsageGallery();
      reInitiateCatalogGridCard();
    }
    
    function eInitiateUsageGallery(){
    
      html = '';
      
      if ( screen === 'lg' ) {
        
        n = Math.ceil( $cards.length / 8 );
        height = 680;
        
        for ( j = 0; j < n; j++ ) {
          html += '<div>\n';
          html += '<div class="row">\n';
          
          for ( i = 0; i < 8; i++ ) {
            html += '<div class="col-md-3"></div>\n';
          }
          
          html += '</div>\n';
          html += '</div>\n';
        }
        
      } else if ( screen === 'md' ) {
        
        n = Math.ceil( $cards.length / 8 );
        height = 540;
        
        for ( j = 0; j < n; j++ ) {
          html += '<div>\n';
          html += '<div class="row">\n';
          
          for ( i = 0; i < 8; i++ ) {
            html += '<div class="col-md-3"></div>\n';
          }
          
          html += '</div>\n';
          html += '</div>\n';
        }
        
      } else if ( screen === 'sm' ) {
        
        n = Math.ceil( $cards.length / 4 );
        height = 800;
      
        for ( j = 0; j < n; j++ ) {
          html += '<div>\n';
          html += '<div class="row">\n';
          
          for ( i = 0; i < 4; i++ ) {
            html += '<div class="col-sm-6"></div>\n';
          }
          
          html += '</div>\n';
          html += '</div>\n';
        }
        
      } else {
        
        n = $cards.length;
        height = 350;
      
        for ( j = 0; j < n; j++ ) {
          html += '<div>\n';
          html += '<div class="row">\n';
          
          for ( i = 0; i < 1; i++ ) {
            html += '<div class="col-xs-12"></div>\n';
          }
          
          html += '</div>\n';
          html += '</div>\n';
        }
        
      }
      
      if ( fotoramaUsage.data( 'fotorama' )) {
        fotoramaUsage.data('fotorama').destroy();
      }
      
      fotoramaUsage.html( html );
      
      fotoramaUsage.find( '[ class *= "col-" ]' ).each( function( index ) {
        var $col = $( this );
        $col.append( $cards.eq( index ));
      });
      
      fotoramaUsage.fotorama({
//         ratio: ratio,
        loop: true,
        width: '100%',
        arrows: true,
        click: false,
        height: height,
      });
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

  