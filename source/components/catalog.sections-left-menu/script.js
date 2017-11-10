$(function(){
  $('.catalog-chpu .cildterblock').each(function(){
//     alert('h1')
    var parent = $(this),
    cList = $('ul.itemList', parent),
    cListItems = $('li', cList);
    
    if(cListItems.length > 4){
      var newHeigth = 0;
      for(i=0; i<4; i++){
        newHeigth = newHeigth + cListItems.eq(i).outerHeight();
      }
      
      cList.css({
        overflow: 'hidden',
        maxHeight: newHeigth+'px',
      });
      
      $('.showMoreLink', parent).show();
    }
    
  });
  $('.showMoreLink a').click(function(){
    var parent = $(this).parents('.cildterblock');
    $('.itemList', parent).css({
      height: '',
      maxHeight: '',
      overflow: '',
    });
    $(this).parents('ul').hide();
  });
  
  
  
  var chpuListOptions = {
    valueNames: [ 'name' ]
  };
  
  var catalogFilterList = new List('catalog_chpu_list', chpuListOptions);
  
});

/*

$('.sideMenuCollapse').on('shown.bs.collapse', function () {
  $('.showMoreLink', $(this).parent()).hide();
});

$('.togleChildrenBloc').click(function(e){
  $('.cildterblock', $(this).parents('.root-item')).collapse('toggle');
  e.stopPropagation();
  return false;
});

$('.cildterblock').on('show.bs.collapse', function () {
  $(this).parents('.root-item').addClass('opened-children');
})
$('.cildterblock').on('hide.bs.collapse', function () {
  $(this).parents('.root-item').removeClass('opened-children');
})

$('.left-menu .is-root a').click(function(){
  if(!$(this).parents('.root-item').hasClass('opened-children')){
    $('.cildterblock', $(this).parents('.root-item')).collapse('show');
    return false;
  }
});
*/




// alert(catalogFilterList)