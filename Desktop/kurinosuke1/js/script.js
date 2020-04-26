$(function () {
  
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $('.floating').fadeIn();
    } else {
      $('.floating').fadeOut();
    }
  });

  $('.floating').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  })

});