import $ from 'jquery'

$('.js-open-modal').click((e) => {
  e.preventDefault();
  $('.popup').hide();
  const modal = e.target.getAttribute('href') != null ? e.target.getAttribute('href') : e.target.parentElement.getAttribute('href');
  $(`[data-modal="${modal}"]`).fadeIn();
});

$('.js-close-modal').click((e) => {
  e.preventDefault();
  $('.popup').fadeOut();
});