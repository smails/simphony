import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';



$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.popup').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $(`[data-modal="${modal}"]`).fadeIn();
  if(modal == '#sale'){
    intSliderSale()
  }
});

$('.js-close-modal').click((e) => {
  e.preventDefault();
  $('.popup').fadeOut();
});


const intSliderSale = () => {

  $('.sale-slider').each((index, item) => {
    const swiper = new Swiper($(item).find('.swiper')[0], {
      loop: true,
      slidesPerView: 1.1,
      spaceBetween: '15px',
      navigation: {
        nextEl: $(item).find('.slider-btn__border_next')[0],
        prevEl: $(item).find('.slider-btn__border_prev')[0],
      },
      modules: [Navigation],
      breakpoints: {
        767: {
          slidesPerView: 2.05,
        },
        1023: {
          slidesPerView: 3,
          spaceBetween: '20px',
        },
      },
    });
  })


}