$('.sideMenuCollapse').on('shown.bs.collapse', function () {
  $('.showMoreLink', $(this).parent()).hide();
});

$('.togleChildrenBloc').click(function(e){
  var parent = $(this).parent();
  $('.collapse', parent).eq(0).collapse('toggle');
  e.stopPropagation();
  return false;
});

$('.cildterblock').on('show.bs.collapse', function () {
  $(this).parent().addClass('opened-children');
})

$('.cildterblock').on('hide.bs.collapse', function () {
  $(this).parent().removeClass('opened-children');
})