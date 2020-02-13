/************    header slick      **************/
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

/*************** фильтр about   **************/
$(function () {
  $('.about-nav .block').click(function (event) {
    event.preventDefault();
    var get_id = this.id;
    var get_current = $('.about-content .block.' + get_id);
    $('.about-content .block').not(get_current).hide(500);
    get_current.show(500);
  });
});

/*************  about active button   *****************/
var header = document.getElementById("active-block");
var btns = header.getElementsByClassName("block");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

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

/*************   burger    *******************/
var burger = document.getElementsByClassName('burger');

for (var i = 0; i < burger.length; i++) {
  burger[i].addEventListener('click', function () {
    if (!(this.classList.contains('active'))) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].classList.remove('active');
      }
      this.classList.add('active');
    }
  })
}

/************    team slick      **************/
$('.team-slider').slick({
  prevArrow: $('.team-slider-left'),
  nextArrow: $('.team-slider-right'),
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true
});

/************    blog slick      **************/
$('.blog-slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true
});