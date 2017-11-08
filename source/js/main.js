$( '.b-header__menu' ).click( function(e) {
  e.preventDefault();
  $( 'html' ).addClass( 'i-menu-open' );
  openMenu();
});

//apple menu
$( '.b-header__search' ).click( function(e) {
  e.preventDefault();
  /*$( 'html' ).addClass( 'i-menu-open' );
  openMenu();
  setTimeout( function() {$( '#title-search-input' ).focus();}, 100);*/
  $( '.b-header' ).addClass( 'i-searchshow' );
  setTimeout( function() {
    $( '.b-header-menu__search-wrapper' ).show();
  }, 650 );
  setTimeout( function() {
    $( '.b-header-menu__search__close' ).show();
  }, 1500 );
});

//close apple menu
$( '.b-header-menu__search__close' ).click( function(e) {
  e.preventDefault();
  $( '.b-header' ).addClass( 'i-searchhide' );
  $( '.b-header-menu__search-wrapper' ).hide();
  $( '.b-header-menu__search__close' ).hide();
  setTimeout( function() {
    $( '.b-header' ).removeClass( 'i-searchhide' ).removeClass( 'i-searchshow' );
  }, 650 );
});

$( '.b-header-menu__close' ).on('click', function(e) {
  e.preventDefault();
  $( 'html' ).removeClass( 'i-menu-open' );
  closeMenu();
});

$('#cartModal').on('shown.bs.modal', function () {
  $( 'html' ).addClass( 'i-cart-modal-open' );
});

$( document ).bind( 'click', function(e){
  if ( $(e.target).is( '.modal-backdrop' ) && $('html').hasClass( 'i-cart-modal-open' )) {
    $('#cartModal').modal('hide');
    $( 'html' ).removeClass( 'i-cart-modal-open' );
  }
}).bind( 'keyup', function(e) {
  if (e.keyCode === 27 && $('html').hasClass('i-menu-open')) {
    $('.b-header-menu__close').click();
  }
});

$( '.b-header__phone-popup' ).bind( 'click', function() {
  $('#cartModal').modal('hide');
  $( 'html' ).removeClass( 'i-cart-modal-open' );
});

var scrollBarWidth = window.innerWidth - $(document).width();

function openMenu() {
  $('header .b-header-menu .b-header-menu__content').load('/include/ajax/modal_top_menu.php', function(){
    $( 'html' ).addClass( 'i-menu-open' );
    $( 'body' ).css({ paddingRight: scrollBarWidth + 'px' });
    $( '.b-header-fixed' ).css({ paddingRight: scrollBarWidth + 'px' });
  });
  
  
}

function closeMenu() {
  $( 'body' ).attr({ style: '' });
  $( '.b-header-fixed' ).attr({ style: '' });
}

/*$( '.b-modal-signin form' ).submit( function(e) {
  e.preventDefault();
  
  var $form = $( this );
  
  $.ajax({
    url: $form.attr("action"),
    type: $form.attr("method"),
    dataType: "json",
    data: $form.serialize(),
    success: function(data) {
      if ( data && data.html ) {
        $( '.b-modal-user' ).html( data.html );
        $( '.b-modal-signin .text-danger' ).text('');
        $( '.b-modal-user' ).removeClass( 'i-hidden' ).addClass( 'i-visible' );
        $( '.b-modal-social, .b-modal-signin' ).removeClass( 'i-visible' ).addClass( 'i-hidden' );
      } else if ( data && data.error ) {
        $( '.b-modal-signin .text-danger' ).text( data.error );
      }
    },
    error: function(a,b,c) {
      if ( window.console ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
});*/

$( '.b-modal-user' )/*.delegate( '.b-signout-icon', 'click', function(e) {
  e.preventDefault();
  
  var $link = $( this );
  
  $.ajax({
    url: $link.attr("href"),
    type: 'GET',
    dataType: "json",
    success: function(data) {
      if ( data && data.html ) {
        $( '.b-modal-user' ).html( data.html );
      }
    },
    error: function(a,b,c) {
      if ( window.console ) {
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
  });
  
})*/.delegate( '.b-signin-button div', 'click', function() {
  $( '.b-modal-user' ).removeClass( 'i-visible' ).addClass( 'i-hidden' );
  $( '.b-modal-signin, .b-modal-social' ).removeClass( 'i-hidden' ).addClass( 'i-visible' );
  $( '.b-modal-signin .form-control' ).val('');
  $( '.b-modal-signin input:first' ).focus();
});

if ( $.mask ) {
  $( '.b-request-form input.form-control' ).mask("+7 999 999-99-99");
}

$('.b-nav-tabs.nav-tabs a').click(function (e) {
  e.preventDefault();
  $('.nav-tabs a').removeClass( 'active' );
  $(this).addClass( 'active' ).tab('show');
});

$('#aboutVideo').on('hide.bs.modal', function (e) {
  $('#indexVideoPlay')[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
}).on('show.bs.modal', function (e) {
  $('#indexVideoPlay')[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});

$( '#razrabotka-link').on('click', function(e) {
  e.preventDefault();
  $.scrollTo( $('#razrabotka-block').offset().top - 120, 500 );
  window.location.hash = 'razrabotka';
});

$('input[type="text"]').each(function(){
  var input = $(this);
  
  if(input.data('inputtype') == 'number'){
    input.wrap('<div class="input-wrapper" style="position: relative; display: '+$(this).css('display')+';"></div>');
  
    var inputWraper = $(this).parent();
    
    if(input.hasClass('form-control'))
      inputWraper.css({width: '100%'});
    
    inputWraper.append('<div class="input-step-up"></div><div class="input-step-down"></div>');
    var stepUpBtn = $('.input-step-up', inputWraper),
    stepDownBtn = $('.input-step-down', inputWraper),
    inputStep = 1,
    inputMinValue = false,
    inputMaxValue = false;
   
    
    if(input.data('inputstep') != undefined)
      inputStep = Number(input.data('inputstep'));
    
    if(input.data('inputmin') != undefined)
      inputMinValue = Number(input.data('inputmin'));
      
    if(input.data('inputmax') != undefined)
      inputMaxValue = Number(input.data('inputmax'));
    
    stepUpBtn.on('click', function(){
      var curVal = input.val(),
      newVal = Number(curVal) + Number(inputStep);
      
      if(inputMaxValue && newVal > Number(inputMaxValue))
        newVal = Number(inputMaxValue);
      
      input.val(newVal).change();
    });
    
    
    stepDownBtn.on('click', function(){
      var curVal = input.val(),
      newVal = Number(curVal) - Number(inputStep);
      
      if(inputMinValue && newVal < Number(inputMinValue))
        newVal = Number(inputMaxValue);
      
      input.val(newVal).change();
    });
    

    input.on('change', function(){
      if($(this).val() != '')
        input.val(roundToMultiple(input.val(), inputStep));
    }).on('keyup',function(){
      var curVal = $(this).val();
      if (curVal.match(/[^0-9]/g)) {
          curVal = curVal.replace(/[^0-9]/g, '');
      }
      $(this).val(curVal);
    });

  }
});


$('.scrollto').on('click', function(){
  if($($(this).data('scrollto')).length>0){
    $.scrollTo($(this).data('scrollto'), 300, {over: $('.b-header-fixed').outerHeight()});
    return false;
  }
  
});

$('.lazyload').lazyload({
  effect: "fadeIn",
});







