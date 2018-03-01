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
      nav: thumb,
      loop: true,
      width: '100%',
      arrows: true,
      click: false,
    });
  }
  
  
  
  
  
  
  $('.add-to-cart-input-quantity, .popover_teaser').popover();
  
  $('.add-pring-chb').change(function(){
  
    checkActiveSubmit($('.add-to-order-btn', $(this).parents('form')));
  
  });
  
  $('form.offers_item_add2cart_product').submit(function(){
    var form = $(this),
    addPrint = $('.add-pring-chb', form),
    addPrintVal = addPrint.prop('checked'),
    qinput = $('.add-to-cart-input-quantity', form);
    
    if(Number(qinput.val()) < Number(qinput.data("inputstep"))){
      qinput.val(qinput.data("inputstep"));
    }
    
    
//     console.log(form.serialize(), form.attr('action'));
    
    $.ajax({
      url: form.attr('action'),
      method: 'POST',
      data: form.serialize(),
      success: function(data){
        
        
//           console.log(data);
        
//         alert(data.STATUS)
        if(data.STATUS == 'Y'){
          $('.add-to-order-btn', form).addClass('btn-disabled').removeClass('in-cart-update').removeClass('preorder').html('Добавлено<br>к заказу');
          $('.add-to-cart-input-quantity', form).data('oncart', $('.add-to-cart-input-quantity', form).val());
          $('input[name="MODE"]', form).val("UPDATE");
          $('input[name="BID"]', form).val(data.BID);
          
          
          if(addPrintVal == true)
            addPrint.data('defaultval', 'Y');
          else
            addPrint.data('defaultval', 'N');
          
          
          if ( data.DATA.COUNT > 0 ) {
//             $( '#cartModalButton' ).css({ visibility: "visible" });
//             $( '#cartModalCount' ).text( data.DATA.COUNT );
//             $( '#cartModalPrice' ).text( data.DATA.TOTAL_PRICE );
//             $( '#cartModalNoProducts' ).hide();
//             $( '#cartModalHasProducts' ).text( store(data.DATA.COUNT) + ' \u043D\u0430 \u0441\u0443\u043C\u043C\u0443' );
            $( '.count_in_cart' ).show().text( data.DATA.COUNT );
          } else {
            $( '.count_in_cart' ).hide().text( data.DATA.COUNT );
          }
//           alert(data.DATA.COUNT)
        }
        else if(data.STATUS == 'E'){
          console.log(data.MESSAGE)
        }
      },
      error: function(data){
//         alert('e')
      },
    });
    return false;
  });
  
  $('input.add-to-cart-input-quantity').change(function(){
    
//     console.log('cur quant', $(this).val())
    
    checkQunatityVal($(this));
    
    var input = $(this);
    
    if(input.val() > 0 && input.val() < Number(input.data('inputmin'))){
      input.val(Number(input.data('inputmin')));
    }
  }).keyup(function(){
    checkQunatityVal($(this));
  });
  
  $('.input-wrapper').click(function(e){
    e.stopPropagation();
  });
  
  function checkActiveSubmit(btnSubmit){
    var parent = btnSubmit.parents('form'),
    quantInput = $('input.add-to-cart-input-quantity', parent),
    quantInCart = Number(quantInput.data('oncart')),
    quantCurVal = Number(quantInput.val()),
    freeQuant = Number(quantInput.data('freequantity')),
    chboxPrint = $('.add-pring-chb', parent),
    chboxPrintCurVal = chboxPrint.prop('checked'),
    chboxPrintDefault = chboxPrint.data('defaultval'),
    updateMode = false,
    updatePrint = false,
    updateQuant = false,
    updatePreorder = false,
    btnText = 'Добавить<br>к&nbsp;заказу',
    qRange1 = Number(quantInput.data('quantityrangeone')),
    qRange2 = Number(quantInput.data('quantityrangetwo')),
    qRange3 = Number(quantInput.data('quantityrangetre')),
    qIndicator = $('.cur-quantity-indikator', parent),
    qIndicatorPosition = 0;
    
    if(freeQuant == 'undefined')
      freeQuant = 0;
    
    if(quantInCart == 'undefined' || quantInCart == 'NaN')
      quantInCart = 0;
    
    if(parent.hasClass('offers_item_preorder') == false){
      if(freeQuant < quantCurVal){
        updateMode = true;
        btnText = 'Сделать<br>предзаказ';
        
        if(!$('.preorder_popower', parent).hasClass('popoverOpen')){
          $('.preorder_popower', parent).popover('show').addClass('popoverOpen');
        }
      }
      else{
        updateMode = false;
        
        $('.preorder_popower', parent).popover('hide').removeClass('popoverOpen');
        
      }
      
    }
    
    
    if(quantInCart > 0) {
      if(quantInCart == quantCurVal){
        updateMode = false;
        btnText = 'Добавлено<br>к заказу';
      }
      
      else{
        updateMode = true;
        btnText = 'Обновить<br>количество';
      }
      
    }
    
    
    
    
    if(chboxPrintCurVal == true){
      if(chboxPrintDefault == "N"){
        updateMode = true;
        btnText = 'Обновить<br>параметры';
      }
      
      
      $('.order-price-print', parent).show().removeClass('hidden');
      $('.order-price-default', parent).hide();
      
      if(parent.hasClass('offers_item_preorder') == false)
        btnSubmit.removeClass('mode-cart').addClass('mode-order');
        
      qIndicator.hide(); 
      
    }
    else{
      if(chboxPrintDefault == "Y"){
        updateMode = true;
        btnText = 'Обновить<br>параметры';
      }
      
      
      $('.order-price-print', parent).hide();
      $('.order-price-default', parent).show().removeClass('hidden');
      
      if(parent.hasClass('offers_item_preorder') == false)
        btnSubmit.removeClass('mode-order').addClass('mode-cart');
      
//       if($(window).width() > 768){
      
        if(quantCurVal >= qRange1)
          qIndicatorPosition = 1;
          
        if(quantCurVal >= qRange2)
          qIndicatorPosition = 2;
          
        if(quantCurVal >= qRange3)
          qIndicatorPosition = 3;
    
//         if(qIndicatorPosition == 0)
//           qIndicatorPosition = 1;
//         {
//           qIndicator.show().removeClass('col-sm-offset-3').removeClass('col-sm-offset-4').removeClass('col-sm-offset-5').addClass('col-sm-offset-'+(3+qIndicatorPosition));
          
//         }
//         else
//           $('.price-range-item').removeClass('selected');
//           $('.price-range-item-1').addClass('selected');
//       }
//       else
//         qIndicator.hide();
      
          $('.price-range-item').removeClass('selected');
          $('.price-range-item-'+qIndicatorPosition).addClass('selected');
        
    }
    
    
    btnSubmit.html(btnText);
      
    if(updateMode){
      btnSubmit.removeClass('btn-disabled');
      
      
      if(quantInCart > 0)
        btnSubmit.addClass('in-cart-update');
        
    }
    else {
      btnSubmit.removeClass('in-cart-update');
      
      if(quantInCart > 0){
        if(quantInCart == quantCurVal)
          btnSubmit.addClass('btn-disabled');
        else
          btnSubmit.removeClass('btn-disabled');
        
      }
    }


  }
  
  function checkQunatityVal(input){
    var parent = input.parents('form'),
    btnSubmit = $('.add-to-order-btn', parent);
    
    checkActiveSubmit(btnSubmit);

    if(checkToMultiple(input.val(), input.data('inputstep')))
      input.popover('hide');
    else
      input.popover('show');
    
    if(input.val() == 0)
      input.val("");
    
  }
  
  $('body').click(function(){
    $('.preorder_popower').popover('hide').removeClass('popoverOpen');
  });
  
  
  
  $('.price-range-item').click(function(){
    var parent = $(this).parents('form');
    $('input.add-to-cart-input-quantity', parent).val($(this).data('setquantity')).change();
    checkActiveSubmit($('.add-to-order-btn', parent));
  });
  
  $('.reviewslink').click(function(){
    $.scrollTo( $('#secondline-block').offset().top - 120, 500 );
    $('#secondline-block a[href="#reviews"]').tab('show');
  });
  
  $('#btn2ordercustom-link').click(function(){
    $.scrollTo( $('#btn2ordercustom-block').offset().top - 120, 500 );
  });
  $('#product_select').change(function(){
//     var newHref = 'https://www.antech.ru'+$(this).val();
    var newHref = $(this).val();
    if(newHref.length > 0)
      window.location = newHref;
    
//     console.log('go to', newHref);
    
  });
  
  $('#add2favorites').click(function(){
//     $(this).toggleClass('selected');

    var curMode = 'ADD',
    linkEl = $(this);
    
    if (linkEl.hasClass('selected')){
      curMode = 'DEL';
      
    }
    
    console.log(curMode);
    
    $.ajax({
      type: 'POST', 
      url: '/include/ajax/add2cart_new.php', 
      data: {
        OFFERS_ID: linkEl.data('id'),
        MODE: curMode,
        DELAY: 'Y',
        BID: linkEl.data('bid'),
      }, 
      success:function(result){
        console.log(result);
        if(curMode == 'ADD')
          linkEl.addClass('selected').data('bid', result.BID);
        else if(curMode == 'DEL')
          linkEl.removeClass('selected');
      }
    });
  });


    
  
  $('#add2compare').click(function(){
    
//     $(this).toggleClass('selected');

    var modeCompare = 'ADD',
    linkEl = $(this),
    actionCompare = 'ADD_TO_COMPARE_LIST';
    
    if (linkEl.hasClass('selected')){
      modeCompare = 'DEL';
      actionCompare = 'DELETE_FROM_COMPARE_LIST';
      
    }
    
    $.ajax({
      type: 'POST', 
      url: '/catalog/compare.php', 
      data: { 
        id: linkEl.data('id'), 
        action: actionCompare, 
      }, 
      success:function(result){
        
        if(modeCompare == 'ADD'){
          linkEl.addClass('selected').attr("data-content", "Убрать из списка сравнения").data('content', "Убрать из списка сравнения");
        }
        else if(modeCompare == 'DEL'){
          linkEl.removeClass('selected').attr("data-content", "Добавить в список сравнения").data('content', "Добавить в список сравнения");
          
        }
      }
    });
    
  });
  
  $('#buy1click').click(function(){
//     console.log('buy1click function start');
  });
  
  $(".scroll2").click(function(){
    var a=$(this).attr("href"),
    b=$(a).offset().top-100;
    $.scrollTo(b,500);
    location.hash=a;
    return false;
  });
  
  
  
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