import $ from 'jquery'
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';


const swiper = new Swiper('.partners__top', {
  loop: true,
  slidesPerView: 3,
  speed: 2000,
  allowTouchMove: false,
  autoplay: {
    delay: 1000,
  },
  modules: [Autoplay],
  breakpoints: {
    1023: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

const swiper2 = new Swiper('.partners__bottom', {
  loop: true,
  slidesPerView: 3,
  speed: 2000,
  allowTouchMove: false,
  autoplay: {
    delay: 1000,
    reverseDirection: true
  },
  modules: [Autoplay],
  breakpoints: {
    1023: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});