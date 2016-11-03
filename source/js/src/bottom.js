
  });

}( jQuery ));

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('b-video-player', {
    height: '390',
    width: '640',
    videoId: '7DBxtut7Mpw',
    events: {
      'onReady': function() {
        document.getElementById( 'b-video-button' ).className='i-visible';
      },
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange( event ) {
  if ( event.data === YT.PlayerState.PAUSED ) {
    $( '#b-video-cover' ).removeClass( 'i-play' );
  } else if ( event.data === YT.PlayerState.PLAYING ) {
    $( '#b-video-cover' ).addClass( 'i-play' );
  }
}


