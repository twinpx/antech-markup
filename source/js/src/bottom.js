
  });

}( jQuery ));

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player, player2;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('b-video-player', {
    height: '390',
    width: '640',
    videoId: '7DBxtut7Mpw',
    events: {
      'onReady': function() {
        document.getElementById( 'b-video-button' ).className='i-visible';
      },
      'onStateChange': function( event ) {
        if ( event.data === YT.PlayerState.PAUSED ) {
          $( '#b-video-cover' ).removeClass( 'i-play' );
        } else if ( event.data === YT.PlayerState.PLAYING ) {
          $( '#b-video-cover' ).addClass( 'i-play' );
        }
      }
    }
  });
  
  player2 = new YT.Player('b-video-player2', {
    height: '390',
    width: '640',
    videoId: '7DBxtut7Mpw',
    events: {
      'onReady': function() {
        document.getElementById( 'b-video-button2' ).className='i-visible';
      },
      'onStateChange': function( event ) {
        if ( event.data === YT.PlayerState.PAUSED ) {
          $( '#b-video-cover2' ).removeClass( 'i-play' );
        } else if ( event.data === YT.PlayerState.PLAYING ) {
          $( '#b-video-cover2' ).addClass( 'i-play' );
        }
      }
    }
  });
}


