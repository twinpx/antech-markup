
  


});
/*


  $('[data-toggle="tab"]').on('show.bs.tab', function(){
    alert('hi!')
  });
*/




var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerIdArray = [];
var playerArray = [];

function onYouTubeIframeAPIReady() {
  if ( $( 'body' ).hasClass( 'i-video-ready' )) {
    for ( var i = 0; i < playerIdArray.length; i++ ) {
      var $elem = $( '#' + playerIdArray[i]);
      var $banner = $( '.b-video-banner2:eq(' + i + ')' );
      playerArray[i] = new YT.Player( playerIdArray[i], {
        height: '641',
        width: '100%',
        videoId: $elem.data( 'video-id' ),
        events: {
          'onReady': videoReady( $banner ),
          'onStateChange': videoStateChange( $banner )
        },
        playerVars: {            
          rel: 0,
          controls: 0,
          showinfo: 0
        }
      });
    }
  } else {
    setTimeout( function() { onYouTubeIframeAPIReady(); }, 500);
  }
  
  function videoReady( $banner ) {
    return function() {
      $banner.find( '.b-video-button2' ).addClass( 'i-visible' );
    };
  }
  
  function videoStateChange( $banner ) {
    return function( event ) {
      if ( event.data === YT.PlayerState.PAUSED ) {
        $banner.find( 'b-video-banner2__cover' ).removeClass( 'i-play' );
      } else if ( event.data === YT.PlayerState.PLAYING ) {
        $banner.find( 'b-video-banner2__cover' ).addClass( 'i-play' );
      } else if ( event.data === YT.PlayerState.ENDED ) {
        $banner.find( '.b-video-banner2__cover' ).removeClass( "i-play" ).show();
        $banner.find( '.b-video-banner2__ill' ).addClass( 'i-show' );
      }
    };
  }
}


function roundToMultiple(num, multiple) {
  return Math.round(num/multiple)*multiple;
}

function checkToMultiple(num, multiple) {
  if(Math.round(Number(num) / Number(multiple)) * Number(multiple) == Number(num))
   return true;
  else
   return false;
}



/*
function refrashModalCart(data){
  
  if ( data.DATA.COUNT > 0 ) {
    $( '#cartModalButton' ).css({ visibility: "visible" });
    $( '#cartModalCount' ).text( data.DATA.COUNT );
    $( '#cartModalPrice' ).text( data.DATA.TOTAL_PRICE );
    $( '#cartModalNoProducts' ).hide();
    $( '#cartModalHasProducts' ).text( store(data.DATA.COUNT) + ' \u043D\u0430 \u0441\u0443\u043C\u043C\u0443' );
    $( '.count_in_cart' ).show().text( data.DATA.COUNT );
  } else {
    $( '.count_in_cart' ).hide().text( data.DATA.COUNT );
  }
}
*/