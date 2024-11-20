import $ from 'jquery'

$(window).on('load resize', () => {
  if(window.innerWidth < 1000){
    $('.footer__items').addClass('hidden');
    $('.footer__items').prev().addClass('open-nav');
    return
  }
  $('.footer__items').removeClass('hidden');
  $('.footer__items').prev().removeClass('open-nav');
})

$(document).on('click', '.nav__item.open-nav', function() {
  if($(this).hasClass('open')){
    $(this).removeClass('open');
    $(this).next().addClass('hidden');
    return
  } else{
    $(this).addClass('open');
    $(this).next().removeClass('hidden');
  }
})