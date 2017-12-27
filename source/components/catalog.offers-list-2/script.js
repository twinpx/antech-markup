$(function(){
  $('.offers-block .popover_teaser').popover();
  
  $('.offers-block .popover_preview_image').popover({
    html: true,
    trigger: 'hover',
    container: 'body',
    toggle: 'popover',
    placement: 'top',
//     content: 'test',
//     content: function(){
      
//       '<img src="'+$(this).data('previewimage')+'" width="200" height="200" />'+$(this).data('previewimage'),
//     },

  });
  
  $('.add-pring-chb').change(function(){
  
    checkActiveSubmit($('.add-to-order-btn', $(this).parents('form')));
  
  });
  
  $('form.offers_item_add2cart').submit(function(){
    var form = $(this),
    addPrint = $('.add-pring-chb', form),
    addPrintVal = addPrint.prop('checked');
    $.ajax({
      url: form.attr('action'),
      method: 'POST',
      data: form.serialize(),
      success: function(data){
//         alert(data.STATUS)
        if(data.STATUS == 'Y'){
          $('.add-to-order-btn', form).addClass('btn-disabled').removeClass('in-cart-update').removeClass('preorder').html('Добавлено<br>к заказу');
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
    
//     $('.add-to-cart-input-quantity').each(function(){
//       if($(this).hasClass('popoverOpen'))
//         $(this).popover('hide').removeClass('popoverOpen');
//     });
    
    checkMinQunatityVal($(this));
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
    modePreorder = false,
    btnTextDefault = 'Добавить<br>к&nbsp;заказу',
    btnText = btnTextDefault,
    qRange1 = Number(quantInput.data('quantityrangeone')),
    qRange2 = Number(quantInput.data('quantityrangetwo')),
    qRange3 = Number(quantInput.data('quantityrangetre'));
//     qIndicator = $('.cur-quantity-indikator', parent),
//     qIndicatorPosition = 0;
    
    if(freeQuant == 'undefined')
      freeQuant = 0;
    
    if(quantInCart == 'undefined' || quantInCart == 'NaN')
      quantInCart = 0;
    
    if(parent.hasClass('offers_item_preorder')){
      modePreorder = true;
      btnTextDefault = 'Сделать<br>предзаказ';
      btnText = btnTextDefault;
    }
    
    
//     checkQunatityVal(quantInput);
    
    
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
      
      parent.addClass('mode-order').removeClass('mode-standart');
      
      if(parent.hasClass('offers_item_preorder') == false)
        btnSubmit.removeClass('mode-cart').addClass('mode-order');
      
//       qIndicator.hide(); 
      
    }
    else{
      if(chboxPrintDefault == "Y"){
        updateMode = true;
        btnText = 'Обновить<br>параметры';
      }
      
      
      parent.removeClass('mode-order').addClass('mode-standart');
      
      if(parent.hasClass('offers_item_preorder') == false)
        btnSubmit.removeClass('mode-order').addClass('mode-cart');
        
        
      
      $('.item-cell-price-td', parent).removeClass('in');
      
      if(quantCurVal >= qRange1 && quantCurVal < qRange2)
        $('.price-range-1', parent).addClass('in');
      
        
      if(quantCurVal >= qRange2 && quantCurVal < qRange3)
        $('.price-range-2', parent).addClass('in');
        
      if(quantCurVal >= qRange3)
        $('.price-range-3', parent).addClass('in');
    
        
        
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
    btnSubmit = $('.add-to-order-btn', parent),
    minorder = Number(input.data('minorder'));
    
    
    checkActiveSubmit(btnSubmit);
    
    
    if((checkToMultiple(input.val(), input.data('inputstep')) == false || minorder > Number(input.val())) && Number(input.val()) > 0){
      $('.add-to-cart-input-quantity').not(input).popover('hide').removeClass('popoverOpen');
      
      if(!input.hasClass('popoverOpen')){
        input.popover('show').addClass('popoverOpen');
      }
    }
    else
      input.popover('hide').removeClass('popoverOpen');
    
    if(input.val() <= 0)
      input.val("");
    
  }
  
  function checkMinQunatityVal(input){
    
    if(input.val() > 0 && input.val() < Number(input.data('inputmin')))
      input.val(Number(input.data('inputmin')));
  }
  
  $('body').click(function(){
    $('.preorder_popower, .add-to-cart-input-quantity').popover('hide').removeClass('popoverOpen');
//     alert('hide popover')
  });
  
});