$( '.b-header__menu' ).click( function(e) {
  e.preventDefault();
  $( 'html' ).addClass( 'i-menu-open' );
  openMenu();
});

$( '.b-header__search' ).click( function(e) {
  e.preventDefault();
  $( 'html' ).addClass( 'i-menu-open' );
  openMenu();
  setTimeout( function() {$( '#title-search-input' ).focus();}, 100);
});

$( '.b-header-menu__close' ).click( function(e) {
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
  }
}).bind( 'keyup', function(e) {
  if (e.keyCode === 27 && $('html').hasClass('i-menu-open')) {
    $('.b-header-menu__close').click();
  }
});

var scrollBarWidth = window.innerWidth - $(document).width();

function openMenu() {
  $( 'html' ).addClass( 'i-menu-open' );
  $( 'body' ).css({ paddingRight: scrollBarWidth + 'px' });
  $( '.b-header-fixed' ).css({ paddingRight: scrollBarWidth + 'px' });
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

$('.nav-tabs a').click(function (e) {
  e.preventDefault();
  $('.nav-tabs a').removeClass( 'active' );
  $(this).addClass( 'active' ).tab('show');
});