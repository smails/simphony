import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


function initSliderLocation() {
  $('.location__slider').each((index, item) => {
    const swiper = new Swiper($(item).find('.swiper')[0], {
      slidesPerView: 'auto',
      loop: true,
      navigation: {
        nextEl: $(item).find('.slider-btn__border_next')[0],
        prevEl: $(item).find('.slider-btn__border_prev')[0],
      },
      modules: [Navigation, Pagination],
    });
  })
}
initSliderLocation();


$('.location__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.location__box').hide();
  $('.location__box').eq($(this).index()).fadeIn('slow');
  initSliderLocation();
})