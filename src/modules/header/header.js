import $ from 'jquery'

$(window).on('load resize', () => {
  if(window.innerWidth < 700){
    $('.nav__items').addClass('hidden');
    $('.nav__items').prev().addClass('open-nav');
    return
  }
  $('.nav__items').removeClass('hidden');
  $('.nav__items').prev().removeClass('open-nav');
})

$(document).on('click', '.open-nav', function() {
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $(this).next().addClass('hidden');
    return
  }
  $(this).addClass('open');
  $(this).next().removeClass('hidden');
})


$('.header__open-nav').click(function () {
  $(this).toggleClass('open');
  $('.header').toggleClass('open');
  $('.nav').slideToggle()
})