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