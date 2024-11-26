import $ from 'jquery'
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';



$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.popup').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $(`[data-popup="${modal}"]`).fadeIn();
  if (modal == '#sale') {
    intSliderSale()
  }
  if (modal == '#pay') {
    intSliderPay()
  }
  if (modal == '#place') {
    intSliderPlace()
  }
  if (modal == '#motion') {
    intSliderGallery()
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
const intSliderPay = () => {
  $('.pay-info').each((index, item) => {
    const swiper = new Swiper($(item).find('.swiper')[0], {
      loop: true,
      slidesPerView: 1,
      spaceBetween: '2px',
      navigation: {
        nextEl: $(item).find('.slider-btn__border_next')[0],
        prevEl: $(item).find('.slider-btn__border_prev')[0],
      },
      modules: [Navigation],
    });
  })
}

const intSliderPlace = () => {
  $('.place-info').each((index, item) => {
    const swiper = new Swiper($(item).find('.swiper')[0], {
      loop: true,
      slidesPerView: 1,
      spaceBetween: '2px',
      navigation: {
        nextEl: $(item).find('.slider-btn__border_next')[0],
        prevEl: $(item).find('.slider-btn__border_prev')[0],
      },
      modules: [Navigation],
    });
  })
}

const intSliderGallery = () => {
  $('.slider-main').each((index, item) => {
    const swiperNav = new Swiper($(item).next().find('.swiper')[0], {
      loop: true,
      slidesPerView: 'auto',
      freeMode: true,
      watchSlidesProgress: true,
    });
    const swiper = new Swiper($(item).find('.swiper')[0], {
      loop: true,
      slidesPerView: 1,
      spaceBetween: '2px',
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      preventInteractionOnTransition: true,
      navigation: {
        nextEl: $(item).find('.slider-btn__border_next')[0],
        prevEl: $(item).find('.slider-btn__border_prev')[0],
      },
      modules: [Navigation],
      thumbs: {
        swiper: swiperNav
      }
    });
  })
}