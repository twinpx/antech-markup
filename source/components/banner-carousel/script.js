$(function() {
  
  var $fotoramaBanner = $(".firstbanerfotorama");
  
  var screen = "", resize = "", height = 440;
  
  var banerItems = $('.item', $fotoramaBanner);
  
  if(banerItems.length > 0){
    banerItems.each(function(){
      var baner = $(this);
      
//         console.log(baner.attr('id'));
      
      if(baner.data('ytvideo') && baner.data('videoid')){
//         console.log(baner.data('ytvideo'), ' - ', baner.data('videoid'));
        
        var autoplay = '';
        
        if(baner.data('videoautoplay'))
          autoplay = 'autoPlayModal';
        
        
          
        
        if($('#'+baner.data('videoid')).length == 0){
          var videoBlock = $('<div id="'+baner.data('videoid')+'" tabindex="-1" role="dialog" aria-labelledby="'+baner.data('videoid')+'Label" class="modal '+autoplay+' "><div role="document" class="modal-dialog modal-lg"><div class="modal-content text-middle"><button type="button" data-dismiss="modal" aria-label="Close" class="close"></button><div class="modal-body center"><div class="embed-responsive embed-responsive-16by9"><iframe src="https://www.youtube.com/embed/'+baner.data('ytvideo')+'?enablejsapi=1&rel=0&autoplay=0" allowfullscreen></iframe></div></div></div></div></div>');
          
        
          
          videoBlock.appendTo('body');
          
//           console.log('add container');
        }
        else {
          
//           console.log('conteaner video its true');
        }
        
      }
      
/*
      var cbFormBlock = $(".add_cb_form", baner);
      
      if(cbFormBlock.length > 0){
        console.log('need load cb form', cbFormBlock.eq(0).attr('class'));
//         cbFormBlock.eq(0).load('/include/banner_cb_form.html');
        $.get( '/include/banner_cb_form.html', function( data ) {
          
          alert(data)
          
          cbFormBlock.html(data);
          
          resizeWindow();
        });
        
      }
*/
      
    });
    
  }
  
  $(".autoPlayModal").on('loaded.bs.modal', function(e){
  }).on("hide.bs.modal", function(e) {
    var parent = e.target;
    $("iframe", parent)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
  }).on("show.bs.modal", function(e) {
    var parent = e.target;
    $("iframe", parent)[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
  });
  
  
  
  
  $(window).resize(resizeWindow);
  
  resizeWindow();
  
  function resizeWindow() {
    
    
    
      if (window.matchMedia("( min-width: 1200px )").matches) {
          resize = "lg";
      } else if (window.matchMedia("( min-width: 992px )").matches) {
          resize = "md";
      } else if (window.matchMedia("( min-width: 768px )").matches) {
          resize = "sm";
      } else {
          resize = "xs";
      }
      if (screen === resize) {
          return;
      }
      
      screen = resize;
      reInitiateGallery();
//       reInitiateCatalogGridCard();
  }
  
  function reInitiateGallery() {
    if (screen === "lg") {
        height = 440;
    }
    else if (screen === "md") {
        height = 440;
    }
    else if (screen === "sm") {
        height = 360;
    } else {
        height = 360;
    }
    
    if($fotoramaBanner.data("fotorama")){
      $fotoramaBanner.data("fotorama").destroy();
    }
    
    
    
    $fotoramaBanner.on("fotorama:show", function(e, fotorama) {
        
    
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
        
    }).fotorama({
      height: height
    });
    
    
    $('input, textarea', $fotoramaBanner).on("click", function(e){
      e.stopPropagation();
      e.preventDefault();
      $(this).focus();
//       console.log('yes click')
    });
  }

  
/*
  $('.select', $fotoramaBanner).click(function(e){
    e.stopPropagation();
    e.preventDefault();
    alert("hi!")
//     return false;
//     $(this).trigger('change');
  });
*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
/*
  $('.item-slide-4 a').click(function(){
    yaCounter103630.reachGoal('VIDEO_PLAY_INDEX');
    ga('send', 'VIDEO', 'VIDEO_PLAY_INDEX');
  });
*/
  
  $('.index-baner-1 .popover_teaser').popover();
  
  
});

/*
function myVideoPlay(video){
  var res = false;
  if(video.paused)
    res = video.play();
  
  return res;
}
*/