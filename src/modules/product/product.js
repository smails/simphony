import $ from 'jquery'

$('.product__tab').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $(this).parent().next().find('.product__full').hide();
  $(this).parent().next().find('.product__full').eq($(this).index()).fadeIn('slow');
})