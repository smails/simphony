import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


$('.motion').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1.05,
    spaceBetween: '10px',
    loop: true,
    navigation: {
      nextEl: $(item).find('.slider-btn__border_next')[0],
      prevEl: $(item).find('.slider-btn__border_prev')[0],
    },
    modules: [Navigation],
    breakpoints: {
      767: {
        slidesPerView: 2.1,
        spaceBetween: '10px',
      },
      1023: {
        slidesPerView: 3,
        spaceBetween: '15px',
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: '20px',
      },
    },
  });
})