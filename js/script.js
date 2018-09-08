$(document).ready(function () {
  $('.card').mouseover(function () {
      $(this).find('.thumbnail').stop().fadeIn()
  });
  $('.card').mouseout(function () {
      $(this).find('.thumbnail').stop().fadeOut()
  });
});