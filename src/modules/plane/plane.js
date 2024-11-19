import $ from 'jquery'

$('.plane__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.plane__container').hide();
  $('.plane__container').eq($(this).index()).fadeIn('slow');
})

$('.plane__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parent().next().find('.plane__element').hide();
  $(this).parent().next().find('.plane__element').eq($(this).index()).fadeIn('slow');
})
$('.plane-item__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parent().next().find('.plane-item__pic').hide();
  $(this).parent().next().find('.plane-item__pic').eq($(this).index()).fadeIn('slow');
})