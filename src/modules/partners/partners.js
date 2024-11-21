import $ from 'jquery'
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';


const swiper = new Swiper('.partners__top', {
  slidesPerView: 6,
  loop: true,
  speed: 2000,
  allowTouchMove: false,
  autoplay: {
    delay: 1000,
  },
  modules: [Autoplay],
});

const swiper2 = new Swiper('.partners__bottom', {
  slidesPerView: 6,
  loop: true,
  speed: 2000,
  allowTouchMove: false,
  autoplay: {
    delay: 1000,
    reverseDirection: true
  },
  modules: [Autoplay],
});