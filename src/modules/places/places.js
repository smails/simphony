import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


$('.places').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: $(item).find('.slider-btn__border_next')[0],
      prevEl: $(item).find('.slider-btn__border_prev')[0],
    },
    modules: [Navigation, Pagination],
  });
})