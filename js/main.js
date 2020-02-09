/************    slick      **************/
$('.header-slider').slick({
  prevArrow: $('.header-slider-left'),
  nextArrow: $('.header-slider-right'),
  dots: true,
  autoplay: true
});

/***************   portfolio-project     **********/
$('[data-modal]').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalId = $this.data('modal');

  $(modalId).addClass('show');
});

$('.close').click(function () {
  event.preventDefault();

  let $this = $(this);
  let modalParent = $this.parents('.portfolio-project');

  modalParent.removeClass('show');
});

/*************** фильтр portfolio   **************/
$(function () {
  $('.link a').click(function (event) {
    event.preventDefault();
    var get_id = this.id;
    var get_current = $('.card.' + get_id);
    $('.card').not(get_current).hide(500);
    get_current.show(500);
  });
  $('#all').click(function () {
    $('.card').show(500);
  });
});

/*********************  плавный скролл    *********/
$(document).ready(function () {
  $('a[href^="#"]').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if ($.browser) {
      $('body').animate({
        scrollTop: destination
      }, 1000);
    } else {
      $('html').animate({
        scrollTop: destination
      }, 1000);
    }
    return false;
  });
});