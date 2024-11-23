import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


$('.places').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    loop: true,
    slidesPerView: 1.1,
    navigation: {
      nextEl: $(item).find('.slider-btn__border_next')[0],
      prevEl: $(item).find('.slider-btn__border_prev')[0],
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      767: {
        slidesPerView: 2.1,
      },
      1023: {
        slidesPerView: 3,
      },
    },
  });
})