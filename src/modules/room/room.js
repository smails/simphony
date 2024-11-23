import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

$('.room__wrapper').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 1.05,
    loop: true,
    navigation: {
      nextEl: $(item).find('.slider-btn__border_next')[0],
      prevEl: $(item).find('.slider-btn__border_prev')[0],
    },
    pagination: {
      el: $(item).find('.slider-dots')[0],
      dynamicBullets: true,
      type: 'custom',
      renderCustom: function (swiper, current, total) { return '<span>' + current + '</span>/' + total; }
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      1200: {
        slidesPerView: 1,
      },
    },
  });
})
