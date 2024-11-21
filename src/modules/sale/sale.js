import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


$('.sale').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 3,
    loop: true,
    navigation: {
      prevEl: $(item).find('.slider-arrow_prev')[0],
      nextEl: $(item).find('.slider-arrow_next')[0],
    },
    modules: [Navigation, Pagination],
  });
})