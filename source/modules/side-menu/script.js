$('.sideMenuCollapse').on('shown.bs.collapse', function () {
  $('.showMoreLink', $(this).parent()).hide();
});
$('.togleChildrenBloc').click(function(){
  $('.cildterblock', $(this).parents('.root-item')).collapse('toggle');
});
$('.cildterblock').on('show.bs.collapse', function () {
  $(this).parents('.root-item').addClass('opened-children');
})
$('.cildterblock').on('hide.bs.collapse', function () {
  $(this).parents('.root-item').removeClass('opened-children');
})
$('.side-menu.text-small .root-item a').click(function(){
  if(!$(this).parents('.root-item').hasClass('opened-children')){
    $('.cildterblock', $(this).parents('.root-item')).collapse('show');
    return false;
  }
});