$(function() {
  $(".firstbanerfotorama").on("fotorama:show", function(e, fotorama) {
    
      var video = $("video", $(fotorama.activeFrame.$stageFrame));
      var timer,
      startPlay = false;
      
      if($(document).innerWidth() > 768){
        
      
        if (video.length > 0) {
                  
            
          timer = setInterval(function(){
            
            
            if(startPlay){
//                 console.log('video is play', startPlay);
//               alert('video is play')
              
              clearTimeout(timer);
            }
            else{
              
          
//               alert('video starting')
              
//                 console.log('starting play', startPlay);
              
              var playPromise = video.get(0).play();
              
              if (playPromise !== undefined) {
                  playPromise.then(function() {
                    startPlay = true;
                    
                  }).catch(function() {
                    
                    
                    video.get(0).play();
                    
                  });
              }
            }
            
          }, 1000);
          
          
          
        }
      }
  }).fotorama();
  
  $('.item-slide-4 a').click(function(){
    yaCounter103630.reachGoal('VIDEO_PLAY_INDEX');
    ga('send', 'VIDEO', 'VIDEO_PLAY_INDEX');
  });
  
});

/*
function myVideoPlay(video){
  var res = false;
  if(video.paused)
    res = video.play();
  
  return res;
}
*/