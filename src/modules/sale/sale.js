import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


$('.sale').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    loop: true,
    slidesPerView: 1.1,
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
      prevEl: $(item).find('.slider-arrow_prev')[0],
    },
    modules: [Navigation],
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
