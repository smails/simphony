import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

$('.landscaping__wrapper').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: $(item).find('.slider-arrow_next')[0],
    },
    modules: [Navigation],
  });
})
