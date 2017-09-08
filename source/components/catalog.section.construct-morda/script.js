( function($) {
  'use strict';
  
  $( function() {
    
    $('.construct-section-top .fotorama-tabs').fotorama();
  
    $('.construct-section-top a').click(function(e){
      var parents = $(this).parents('.construct-section-top');
      e.preventDefault();
      $('.nav-tabs a', parents).removeClass( 'active' );
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

  