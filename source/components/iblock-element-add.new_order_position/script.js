$(function(){

  $('input[data-validation="NUMBER_MM"]').on('change', function(){
    var curVal = $(this).val(),
    newVal = '';
    
    
    
    if (curVal.match(/\,/g)) {
        curVal = curVal.replace(/\,/g, '.');
    }
    
    newVal = parseFloat(curVal);
    
    if(curVal < 10)
      newVal = curVal * 1000;
    
    $(this).val(newVal);
    
//     $('#jsmessage').text('typeof(newVal) = '+ typeof(newVal) + ', curVal = '+curVal+', newVal = '+newVal);
    
  }).on('keyup',function(){
    var curVal = $(this).val();
    if (curVal.match(/[^0-9\,\.]/g)) {
        curVal = curVal.replace(/[^0-9\,\.]/g, '');
    }
    $(this).val(curVal);
  });
  
  $('input[data-validation="NUMBER_INT"]').on('keyup',function(){
    var curVal = $(this).val();
    if (curVal.match(/[^0-9]/g)) {
        curVal = curVal.replace(/[^0-9]/g, '');
    }
    $(this).val(curVal);
  });
  
  $('.add_new_ordering_position').on('submit', function(){
    var form = $(this),
    messageCont = $('.add-position-erroe-maessage', form.parents('.order-position-add'));
    messageCont.hide().text('').removeClass('hidden');
    
//     $('#jsmessage').text(form.serialize());
    var result = checkRequiredInputs(form);
    
//     alert(result)
    if(result.RESULT == false){
//       messageCont.html(result.MESSAGE).show();
      messageCont.text('Не все обязательные поля заполнены').show();
    }
    else
    {
      $.ajax({
        method: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        dataType: 'json',
        success: function(data){
          if(data.STATUS == "E"){
            messageCont.html(data.MESSAGE).show();
          }
          else if(data.STATUS == "Y"){
            
            $('.add-to-order-btn', form).html('Добавлено<br>к заказу');
            $('.add-position-sucess-maessage').show().removeClass('hidden');
//             $(document).ready();
          }
        },
        error: function(data){
          alert('error!')
        },
      });
    }
    return false;
  });
  
  $('input, select, textarea', $('.add_new_ordering_position')).on('change', function(){
    checkRequiredInput($(this));
  });
  
  $('.add-new-form-ordering-position').click(function(){
    
    var newForm = $('.add_new_ordering_position').eq(0).clone(true);
    $('input, select, textarea', newForm).each(function(){
      $(this).val('');
    });
    newForm.appendTo($('.order-position-add .form-block'));
    $('.add-position-sucess-maessage').hide();
    return false;
  });
  
  
});

function checkRequiredInputs(form){
var funcResult = true,
funcMessage = "";
  
  $('.required_input', form).each(function(){
    var input = $(this),
    curResult = true;
    
    curResult = checkRequiredInput(input);
    if(curResult == false){
      funcResult = false;
      funcMessage += 'Не заполнено поле "'+input.data('helpnaame')+'"<br>';
    };
    
  });
  
  return {
    RESULT: funcResult,
    MESSAGE: funcMessage
  };
}

function checkRequiredInput(input){
  var inputGroup = input.parents('.form-group');
  if(input.val() == ""){
    inputGroup.addClass('has-error');
    return false;
  }
  else{
    inputGroup.removeClass('has-error');
    return true;
  }
}