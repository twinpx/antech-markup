/*
Form state (class):
  .mode-default
  .mode-preorder
  .mode-orderprint
  .mode-update
  .mode-updatepreorder
  .mode-updateprint
  .mode-incart
  .mode-incartpreorder
  .mode-incartprint
  
*/






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
//           $('.add-to-order-btn', form).addClass('btn-disabled').removeClass('in-cart-update').removeClass('preorder').html('Добавлено<br>к заказу');
          form.addClass('form-disabled').removeClass('in-cart-update').removeClass('preorder').attr('title', 'Добавлено к заказу');
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
    
    btnTextDefault = 'Добавить к заказу',
    btnText = btnTextDefault,
    qRange1 = Number(quantInput.data('quantityrangeone')),
    qRange2 = Number(quantInput.data('quantityrangetwo')),
    qRange3 = Number(quantInput.data('quantityrangetre')),
    oldMode,
    newMode;
    
    oldMode = getFormMode(parent);
    
    
//     setFormMode(parent, newMode);
    
    if(freeQuant == 'undefined')
      freeQuant = 0;
    
    if(quantInCart == 'undefined' || quantInCart == 'NaN')
      quantInCart = 0;
    
    if(parent.hasClass('offers_item_preorder')){
      modePreorder = true;
      btnTextDefault = 'Сделать предзаказ';
      btnText = btnTextDefault;
    }
    
    
//     checkQunatityVal(quantInput);
    
    
    if(parent.hasClass('offers_item_preorder') == false){
      if(freeQuant < quantCurVal){
        updateMode = true;
        btnText = 'Сделать предзаказ';
        
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
        btnText = 'Добавлено к заказу';
      }
      
      else{
        updateMode = true;
        btnText = 'Обновить количество';
      }
      
    }
    
    
    if(chboxPrintCurVal == true){
      if(chboxPrintDefault == "N"){
        updateMode = true;
        btnText = 'Обновить параметры';
      }
      
      parent.addClass('mode-order').removeClass('mode-standart');
      
      if(parent.hasClass('offers_item_preorder') == false)
        parent.removeClass('mode-cart').addClass('mode-order');
//         btnSubmit.removeClass('mode-cart').addClass('mode-order');
      
//       qIndicator.hide(); 
      
    }
    else{
      if(chboxPrintDefault == "Y"){
        updateMode = true;
        btnText = 'Обновить параметры';
      }
      
      
      parent.removeClass('mode-order').addClass('mode-standart');
      
      if(parent.hasClass('offers_item_preorder') == false)
        parent.removeClass('mode-order').addClass('mode-cart');
//         btnSubmit.removeClass('mode-order').addClass('mode-cart');
        
        
      
      $('.price-range', parent).removeClass('in');
      
      if(quantCurVal >= qRange1 && quantCurVal < qRange2)
        $('.price-range-1', parent).addClass('in');
      
        
      if(quantCurVal >= qRange2 && quantCurVal < qRange3)
        $('.price-range-2', parent).addClass('in');
        
      if(quantCurVal >= qRange3)
        $('.price-range-3', parent).addClass('in');
    
        
        
    }
    
    
//     btnSubmit.html(btnText);
    btnSubmit.attr('title', btnText);
      
    if(updateMode){
      parent.removeClass('form-disabled');
//       btnSubmit.removeClass('btn-disabled');
      
      
      if(quantInCart > 0)
        parent.addClass('in-cart-update');
//         btnSubmit.addClass('in-cart-update');
        
    }
    else {
      parent.removeClass('in-cart-update');
//       btnSubmit.removeClass('in-cart-update');
      
      if(quantInCart > 0){
        if(quantInCart == quantCurVal)
          parent.addClass('form-disabled');
//           btnSubmit.addClass('btn-disabled');
        else
          parent.removeClass('form-disabled');
//           btnSubmit.removeClass('btn-disabled');
        
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
  
  
  function getFormMode(form){
    var mode = '';
    
/*
  .mode-default
  .mode-preorder
  .mode-orderprint
  .mode-update
  .mode-updatepreorder
  .mode-updateprint
  .mode-incart
  .mode-incartpreorder
  .mode-incartprint
*/
    
    if(form.hasClass('mode-default'))
      mode = 'default';
    
    if(form.hasClass('mode-preorder'))
      mode = 'preorder';
    
    if(form.hasClass('mode-orderprint'))
      mode = 'orderprint';
    
    if(form.hasClass('mode-update'))
      mode = 'update';
    
    if(form.hasClass('mode-updatepreorder'))
      mode = 'updatepreorder';
    
    if(form.hasClass('mode-updateprint'))
      mode = 'updateprint';
    
    if(form.hasClass('mode-incart'))
      mode = 'incart';
    
    if(form.hasClass('mode-incartpreorder'))
      mode = 'incartpreorder';
    
    if(form.hasClass('mode-incartprint'))
      mode = 'incartprint';
    
    return mode;
  }
  
  
  function setFormMode(form, newMode){
//     if(newMode){
      form.removeClass('mode-default, mode-preorder, mode-orderprint, mode-update, mode-updatepreorder, mode-updateprint, mode-incart, mode-incartpreorder, mode-incartprint');
      form.addClass('mode-'+newMode);
//     }
  }
  
  $('.show-all-offers').click(function(){
    parent = $(this).parent();
    
    $('.cat-hidden').removeClass('cat-hidden').addClass('cat-visible');
    $(this).hide();
    
    return false;
  });
  
  $('.add-to-favorite-btn').click(function(){
    var btn = $(this),
    parent = btn.parents('form'),
    offersID = btn.data('offersid'),
    actionMode = 'ADD',
    actionUrl = btn.data('actionurl');
    
    if(btn.hasClass('active'))
      actionMode = 'DEL';
      
    
    
//     console.log(actionUrl, actionMode, offersID);
    
    $.ajax({
      url: actionUrl,
      method: 'POST',
      data: {
        OFFERS_ID: offersID,
        MODE: actionMode
      },
      success: function(data){
        
//         console.log(data);
        
        if(data.STATUS == 'Y')
          if(actionMode == 'ADD')
            btn.addClass('active')
          else
            btn.removeClass('active')
        else
          console.log(data);
        
      },
      error: function(data){
        console.log(data);
      }
    });
    
  });
  
  $('.price-range').click(function(){
    var parent = $(this).parents('form'),
    rangeQuant = $(this).data('addquant'),
    quantityInput = $('.add-to-cart-input-quantity', parent);
    quantityInput.val(rangeQuant).change();
    return false;
  });
  
  
  $('body').click(function(){
    $('.preorder_popower, .add-to-cart-input-quantity').popover('hide').removeClass('popoverOpen');
//     alert('hide popover')
  });
  
});