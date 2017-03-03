//see /js/src/bottom.js
  
$('.b-video-banner .fotorama').on('fotorama:ready', function (e, fotorama) {
  $( '.b-video-banner' ).mouseover( function() {
    $('.b-video-banner .fotorama').data('fotorama').stopAutoplay();
  }).mouseout( function() {
    if ( !$( '#b-video-cover' ).hasClass( 'i-play' )) {
      $('.b-video-banner .fotorama').data('fotorama').startAutoplay( 3000 );
    }
  });
  
  function bannerVideoPlay( id ) {
    var $cover = $( id );
    fotorama.show( fotorama.activeIndex );
    $cover.addClass( "i-play" );
    setTimeout( function() { $cover.hide(); }, 1000 );
    $('.b-video-banner .fotorama').data('fotorama').stopAutoplay();
  }
  
  if (document.getElementById( 'b-video-button' )) {
    document.getElementById( 'b-video-button' ).onclick=function(e) {
      e.stopPropagation();
      bannerVideoPlay( '#b-video-cover' );
      player.playVideo(); 
    };
    document.getElementById( 'b-video-button' )
      .addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        bannerVideoPlay( '#b-video-cover' );
      player.playVideo();
    }, false);
  }
  
  if (document.getElementById( 'b-video-button2' )) {
    document.getElementById( 'b-video-button2' ).onclick=function(e) {
      e.stopPropagation();
      bannerVideoPlay( '#b-video-cover2' );
      player2.playVideo();
    };
    document.getElementById( 'b-video-button2' )
      .addEventListener('touchend', function(e) {
        e.preventDefault();
        e.stopPropagation();
        bannerVideoPlay( '#b-video-cover2' );
        player2.playVideo();
    }, false);
  }
  
  if (document.getElementById( 'b-video-cover' )) {
    document.getElementById( 'b-video-cover' ).onclick=function(e) {
      e.stopPropagation();
    };
  }
  
  if (document.getElementById( 'b-video-cover2' )) {
    document.getElementById( 'b-video-cover2' ).onclick=function(e) {
      e.stopPropagation();
    };
  }
  
  $( this ).on( 'fotorama:show', function (e, fotorama, extra) {
    $( '.b-video-banner__ill, .b-video-banner2__ill' ).removeClass( 'i-show' );
    
    if ( $( '#b-video-cover' ).hasClass( 'i-play' )) {
      $('.b-video-banner .fotorama').data('fotorama').stopAutoplay( 3000 );
      player.pauseVideo();
    }
  }).on( 'fotorama:showend', function(e) {
    $( '.b-video-banner__ill, .b-video-banner2__ill' ).addClass( 'i-show' );
  });
  
  function resizeGallery() {
    if( window.matchMedia("(max-width: 767px)").matches ) {
      fotorama.resize({height: 586});
    } else if( window.matchMedia("(max-width: 1024px)").matches ) {
      fotorama.resize({height: 679});
    } else {
      fotorama.resize({height: 614});
    }
  }

  resizeGallery();
  
  $( window ).resize( function() {
    resizeGallery();
  });
});


if ( window.BX ) {
  BX.addCustomEvent( "onFrameDataReceived", function () {
  
    $('.b-video-banner .fotorama').on('fotorama:ready', function (e, fotorama) {
      $( '.b-video-banner' ).mouseover( function() {
        $('.b-video-banner .fotorama').data('fotorama').stopAutoplay();
      }).mouseout( function() {
        $('.b-video-banner .fotorama').data('fotorama').startAutoplay( 3000 );
      });
    });
  
    if (document.getElementById( 'b-video-cover' )) {
      document.getElementById( 'b-video-cover' ).onclick=function() {
        var cover = this;
        cover.className="i-play b-video-banner__cover";
        setTimeout( function() { cover.style.display="none"; }, 1000 );
        player.playVideo();
      };
    }
    
  });
}