( function($) {

  'use strict';
  
  $( function() {
    
    $('#offersItems-link').click(function(){
      $.scrollTo( $('#offersItems-block').offset().top - 200, 500 );
      return false;
    });
    
    
    var $fotoramaMulticard = $( '.fotorama-catalog-multicard' );
//     var $cards = $fotorama.find( '.multicardImage' );
//     var html = '';
    var i = 0, j = 0, n = 3, screen = '', resize = '', ratio = 1, thumb = '';
  
    $( window ).resize( resizeWindow );
    
    resizeWindow();
    
    function resizeWindow() {
      if ( window.matchMedia( "( min-width: 768px )" ).matches ) {
        resize = 'sm';
      } else {
        resize = 'xs';
      }
      
      if ( screen === resize ) {
        return;
      }
      screen = resize;
      reInitiateGallery();
    }
    
    function reInitiateGallery() {
      if ( screen === 'sm' ) {
        thumb = "thumbs";
        ratio = 1;
      } else {
        thumb = "dots";
        ratio = 1;
        
      }
      
      if ( $fotoramaMulticard.data( 'fotorama' )) {
        $fotoramaMulticard.data('fotorama').destroy();
      }
      
      $fotoramaMulticard.fotorama({
        ratio: ratio,
        loop: true,
        width: '100%',
        arrows: true,
        click: false,
        nav: thumb,
      });
    }
    
    
    
    
/*
  
    var priceBlocks = [];
    var values = [];
    
    $( '.b-catalog-detail__price-block .col-xs-4' ).each( function() {
      var $this = $( this ),
          val = Number( $(this).find( '.text-center:eq(0) i' ).text());
      priceBlocks.push( $this );
      values.push( val );
    });
    
    //sort price blocks
    
    $( '.b-catalog-detail__price-block' ).empty().append( priceBlocks[0] );
    
    if ( values[1] > values[0] ) {
      priceBlocks[0].after( priceBlocks[1] );
    } else {
      priceBlocks[0].before( priceBlocks[1] );
    }
    
    if ( values[2] > values[0] && values[2] > values[1] ) {
      $( '.b-catalog-detail__price-block' ).append( priceBlocks[2] );
    } else if ( values[2] < values[0] && values[2] < values[1] ) {
      $( '.b-catalog-detail__price-block' ).prepend( priceBlocks[2] );
    } else if ( values[2] > values[0] && values[2] < values[1] ) {
      priceBlocks[1].before( priceBlocks[2] );
    } else {
      priceBlocks[0].before( priceBlocks[2] );
    }
    
    //highlite the price block
    
    var $price = $( '.b-catalog-detail__price' );
    var price = 0;
    var quantity = [];
    var step = Number( $( '.input_product_quantity' ).data( 'stepquantity' ));
    var minQuantity = 0;
    var maxQuantity = Math.floor( Number( $( '.b-catalog-detail__available b' ).text().split( ' ' ).join('')) / step ) * step;
    
    $( '.b-catalog-detail__price-block .col-xs-4' ).each( function() {
      quantity.push( Number( $( this ).find( '.text-center:eq(0) i' ).text()));
    });
  
    if ( quantity[0] < step ) {
      quantity[0] = step;
    }
    minQuantity = quantity[0];
  
    $( '.up_quantity_btn' ).bind( 'click', countUp );
    $( '.down_quantity_btn' ).bind( 'click', countDown );
    $( '.input_product_quantity' ).bind( 'keyup', countQuantity ).bind( 'blur', maxMinQuantity );
    
    function maxMinQuantity() {
      
      var val = Number( $( '.input_product_quantity' ).val());
      
      if ( val > maxQuantity ) {
        val = maxQuantity;
      } else if ( val <  minQuantity ) {
        val = minQuantity;
      }
      
      $( '.input_product_quantity' ).val( val );
      
    }
    
    function countUp() {
      var val = Number( $( '.input_product_quantity' ).val());
      $( '.input_product_quantity' ).val( val + step );
      
      maxMinQuantity();
      countQuantity();
    }
    
    function countDown() {
      var step = Number( $( '.input_product_quantity' ).data( 'stepquantity' ));
      var val = Number( $( '.input_product_quantity' ).val());
      $( '.input_product_quantity' ).val( val - step );
      
      maxMinQuantity();
      countQuantity();
    }
    
    $( '.b-catalog-detail__price-block' ).delegate( '.b-catalog-detail__price', 'click', function() {
      $( '.b-catalog-detail__price' ).removeClass( 'i-active' );
      $( this ).addClass( 'i-active' );
      $( '.input_product_quantity' ).val( quantity[ $( '.b-catalog-detail__price' ).index( $( this )) ] );
      countQuantity();
    });
    
    function abc(n) {
      n += "";
      n = new Array(4 - n.length % 3).join("U") + n;
      return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }

    
    function countQuantity() {
      
      var val = Number( $( '.input_product_quantity' ).val());
      
      if ( val >= quantity[2]) {
        price = $price.removeClass( 'i-active' ).eq(2).addClass( 'i-active' ).find( 'i' ).text();
      } else if ( val >= quantity[1]) {
        price = $price.removeClass( 'i-active' ).eq(1).addClass( 'i-active' ).find( 'i' ).text();
      } else if ( val >= quantity[0]) {
        price = $price.removeClass( 'i-active' ).eq(0).addClass( 'i-active' ).find( 'i' ).text();
      }
      
      $( '.b-catalog-detail__sum i' ).text( abc(( val * Number( price )).toFixed(2)).replace( " .", "." ));
    
      var href = $( '.b-catalog-detail .btn-cart' ).attr( 'href' );
      var flag = false;
      var flag2 = false;
      href = href.split( '?' );
      
      if ( href[1] ) {
        flag2 = true;
      }
      
      for ( var i = 0; i < href.length; i++ ) {
        href[i] = href[i].split( '&' );
        for ( var j = 0; j < href[i].length; j++ ) {
          href[i][j] = href[i][j].split( '=' );
          if ( href[i][j][0] === 'QUANTITY' ) {
            flag = true;
            href[i][j][1] = val;
          }
          href[i][j] = href[i][j].join( '=' );
        }
        href[i] = href[i].join( '&' );
      }
      href = href.join( '?' );
      
      if ( !flag ) {
        if ( !flag2 ) {
          href += '?';
        } else {
          href += '&';
        }
        href += 'QUANTITY=' + val;
      }
      
      $( '.b-catalog-detail .btn-cart' ).attr( 'href', href );
    }
    
    $( '.b-catalog-detail' ).delegate( '.btn-cart', 'click', function(e) {
      e.preventDefault();
      var $button = $( this );
      if ( $button.hasClass( '.btn-disabled' )) {
        return;
      }
      $button.addClass( 'btn-disabled' ).text( '\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0435' );
      
      $.ajax({
        url: $button.attr( 'href' ),
        type: 'GET',
        dataType: "json",
        success: function(data) {
          if ( data && data.STATUS === 'Y' ) {
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
          } else if ( data.STATUS === 'E' ) {
            $button.removeClass( 'btn-disabled' ).text( '\u0412 \u043A\u043E\u0440\u0437\u0438\u043D\u0443' );
          }
        },
        error: function(a, b, c) {
          if ( window.console ) {
            console.log(a);
            console.log(b);
            console.log(c);
          }
        }
      });
    });
    
    function store( num ) {
      if (/(10|11|12|13|14|15|16|17|18|19)$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440\u043E\u0432';}
      else if (/.*1$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440';}
      else if (/[2-4]$/.test(num)) {return '\u0442\u043E\u0432\u0430\u0440\u0430';}
      else {return '\u0442\u043E\u0432\u0430\u0440\u043E\u0432';}
    }
      
*/
  });

}( jQuery ));