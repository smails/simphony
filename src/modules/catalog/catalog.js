import $ from 'jquery'
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';


$('.prod-item__middle').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-dots',
      type: 'bullets',
    },
    modules: [Pagination],
  });
})


$('.catalog-filter__all-filter').click(() => {
  $('.modal-filter').fadeIn();
})

$('.modal-filter__close').click(() => {
  $('.modal-filter').hide();
})

$('.catalog-filter__open').click(function () {
  if($(this).hasClass('open')){
    $(this).removeClass('open').find('span').text('Раскрыть фильтр');
    $('.catalog-filter__bottom').slideUp();
    return;
  }
  $(this).addClass('open').find('span').text('Скрыть фильтр');
  $('.catalog-filter__bottom').slideDown();
})

$('.catalog-sort__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.catalog__container').hide();
  $('.catalog__container').eq($(this).index()).fadeIn('slow');
})