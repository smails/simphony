import $ from 'jquery'
import 'slick-carousel'

function initSliderLocation() {
  $('.location__slider').each((index, item) => {
    $(item).slick({
      arrows: true,
      slidesToShow: 3,
      variableWidth: true,
      appendArrows: $(item).next('.slider-nav'),
      prevArrow: '<button id="prev" type="button" class="slider-btn-border "><svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" fill="none"><path stroke="#0E302A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21.4551 9.16334H1.54599m0 0 7.3924-7.96363m-7.3924 7.96363 7.3924 7.96366"/></svg></button>',
      nextArrow: '<button id="next" type="button" class="slider-btn-border"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" fill="none"><path stroke="#0E302A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1.54492 9.16334H21.454m0 0-7.3924-7.96363m7.3924 7.96363L14.0616 17.127"/></svg></button>',
      responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
        }
      },]
    });
  })
}
initSliderLocation();


$('.location__btn').click(function () {
  $(this).addClass('active').siblings().removeClass('active');
  $('.location__box').hide();
  $('.location__box').eq($(this).index()).fadeIn('slow');
  $('.location__slider').each((index, item) => {$(item).slick('unslick');});
  initSliderLocation();
})