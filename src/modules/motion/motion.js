import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


$('.motion').each((index, item) => {
  const swiper = new Swiper($(item).find('.swiper')[0], {
    slidesPerView: 4,
    spaceBetween: '20px',
    loop: true,
    navigation: {
      prevEl: $(item).find('.slider-arrow_prev')[0],
      nextEl: $(item).find('.slider-arrow_next')[0],
    },
    modules: [Navigation, Pagination],
  });
})