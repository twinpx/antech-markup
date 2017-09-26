$(function(){
  $('.add-to-cart-input-quantity, .popover_teaser').popover();
  
  $('.add-pring-chb').change(function(){
  
    checkActiveSubmit($('.add-to-order-btn', $(this).parents('form')));
  
  });
  
  $('form.offers_item_add2cart').submit(function(){
    var form = $(this),
    addPrint = $('.add-pring-chb', form),
    addPrintVal = addPrint.prop('checked');
    $.ajax({
      url: form.attr('actions'),
      method: 'POST',
      data: form.serialize(),
      success: function(data){
//         alert(data.STATUS)
        if(data.STATUS == 'Y'){
          $('.add-to-order-btn', form).addClass('btn-disabled').removeClass('preorder').html('Поставлено<br>в&nbsp;резерв');
          $('.add-to-cart-input-quantity', form).data('oncart', $('.add-to-cart-input-quantity', form).val());
          $('input[name="MODE"]', form).val("UPDATE");
          
          
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
    
    if(quantInCart > 0) {
      if(quantInCart == quantCurVal){
        updateMode = false;
        btnText = 'Поставлено<br>в&nbsp;резерв';
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
      btnSubmit.removeClass('mode-order').addClass('mode-cart');
      
      if($(window).width() > 768){
      
        if(quantCurVal >= qRange1)
          qIndicatorPosition = 1;
          
        if(quantCurVal >= qRange2)
          qIndicatorPosition = 2;
          
        if(quantCurVal >= qRange3)
          qIndicatorPosition = 3;
    
        if(qIndicatorPosition > 0){
          qIndicator.show().removeClass('col-sm-offset-3').removeClass('col-sm-offset-4').removeClass('col-sm-offset-5').addClass('col-sm-offset-'+(3+qIndicatorPosition));
          
        }
        else
          qIndicator.hide();
      }
      else
        qIndicator.hide(); 
        
    }
    
    
    if(updateMode)
      btnSubmit.removeClass('btn-disabled').html(btnText);
    else
      btnSubmit.addClass('btn-disabled').html(btnText);


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
  
});