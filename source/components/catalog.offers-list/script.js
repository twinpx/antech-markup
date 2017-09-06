$(function(){
  $('.add-to-cart-input-quantity, .popover_teaser').popover();
  $('.add-pring-chb').change(function(){
    var curVal = $(this).prop('checked');
    $('.add-pring-chb', $(this).parents('form')).prop('checked', curVal);
  });
  $('form.offers_item_add2cart').submit(function(){
    var form = $(this);
    $.ajax({
      url: form.attr('actions'),
      method: 'POST',
      data: form.serialize(),
      success: function(data){
//         alert(data.STATUS)
        if(data.STATUS == 'Y'){
          $('.submit-btn', form).addClass('btn-disabled').removeClass('preorder').val('В корзине');
          $('.add-to-cart-input-quantity', form).data('oncart', $('.add-to-cart-input-quantity', form).val());
          $('input[name="MODE"]', form).val("UPDATE");
          
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
          alert(data.MESSAGE)
        }
      },
      error: function(data){
//         alert('e')
      },
    });
    return false;
  });
  
  $('input.add-to-cart-input-quantity').change(function(){
    checkQunatityVal($(this));
  }).keyup(function(){
    checkQunatityVal($(this));
  });
  
  $('.input-wrapper').click(function(e){
    e.stopPropagation();
  });
  
  function checkQunatityVal(input){
    var parent = input.parents('form'),
    btnSubmit = $('.submit-btn', parent),
    curVal = Number(input.val()),
    freeQuant = Number(input.data('freequantity')),
    inCart = Number(input.data('oncart')),
    submintUpd = false,
    btnText = 'В корзине',
    qRange1 = Number(input.data('quantityrangeone')),
    qRange2 = Number(input.data('quantityrangetwo')),
    qRange3 = Number(input.data('quantityrangetre')),
    qIndicator = $('.cur-quantity-indikator', parent),
    qIndicatorPosition = 0;
    
    
    if(freeQuant == 'undefined')
      freeQuant = 0;
    
    if(inCart == 'undefined' || inCart == 'NaN')
      inCart = 0;
      
    if(inCart > 0) {
      if(inCart == curVal)
        btnSubmit.addClass('btn-disabled').val('В корзине');
      
      else
        btnSubmit.removeClass('btn-disabled').val('Обновить');
      
    }
    else {
      if(freeQuant < curVal){
        if(!$('.preorder_popower', parent).hasClass('popoverOpen')){
          $('.preorder_popower', parent).popover('show').addClass('popoverOpen');
        }
        btnSubmit.addClass('preorder').val('Предзаказ');
      }
      else{
        btnSubmit.removeClass('preorder').val('В корзинy');
        $('.preorder_popower', parent).popover('hide').removeClass('popoverOpen');
      }
        
    }
    if($(window).width() > 768){
    
    
      if(curVal >= qRange1)
        qIndicatorPosition = 1;
  //       qIndicator.addClass('.col-sm-offset-5').removeClass('.col-sm-offset-6, .col-sm-offset-7');
      if(curVal >= qRange2)
        qIndicatorPosition = 2;
  //       qIndicator.addClass('.col-sm-offset-6').removeClass('.col-sm-offset-5, .col-sm-offset-7');
      if(curVal >= qRange3)
        qIndicatorPosition = 3;
  //       qIndicator.addClass('.col-sm-offset-7').removeClass('.col-sm-offset-6, .col-sm-offset-5');
  
      if(qIndicatorPosition > 0){
        qIndicator.show().removeClass('col-sm-offset-4').removeClass('col-sm-offset-5').removeClass('col-sm-offset-6').addClass('col-sm-offset-'+(4+qIndicatorPosition));
      }
      else
        qIndicator.hide();
    }
    else
      qIndicator.hide();
    
//     $('#jsmessage').text($(window).width());
    
//     $('#jsmessage').text('inCart = '+inCart+'\n freeQuant = '+freeQuant+'\n curVal = '+curVal+'\n btnText = '+btnText);
    
    
    

    if(checkToMultiple(input.val(), input.data('inputstep')))
      input.popover('hide');
    else
      input.popover('show');
  }
  
  $('body').click(function(){
    $('.preorder_popower').popover('hide').removeClass('popoverOpen');
  });
  
});