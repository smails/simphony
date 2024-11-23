import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


$('.project').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    spaceBetween: '15px',
    slidesPerView: 1.5,
    loop: true,
    navigation: {
      nextEl: $(item).find('.slider-btn__border_next')[0],
      prevEl: $(item).find('.slider-btn__border_prev')[0],
    },
    modules: [Navigation],
    breakpoints: {
      1023: {
        slidesPerView: 3,
        spaceBetween: '20px',
      },
    },
  });
})