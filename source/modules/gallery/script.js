$('.b-gallery .fotorama').on('fotorama:ready', function (e, fotorama) {
  setTimeout( function() {
    if (window.devicePixelRatio > 1) {
      var $lowresImages = $('.b-gallery-picture');

      $lowresImages.each(function(i) {
        var $img = $( this ), highres = $img.attr('data-big-image');
        if( highres && highres !== '' ) {
          $img.css('backgroundImage', 'url(' + highres + ')');
        }
      });
    }
  }, 10);
  
  $( this ).find( 'a' ).click( function(e) {
    e.stopPropagation();
    //alert('');
  });
});