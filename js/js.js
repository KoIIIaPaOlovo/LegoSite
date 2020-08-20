$(document).ready(function(){
  $('.slider__slider').slick({
      slidesToShow: 3,
      centerMode:true,
      centerPadding:'17%',
      variableWidth:true,
      arrows:true,
      infinite:true,
      speed: 400,
      rows:1,
      waitForAnimate:true,
      useTransform: true,
      cssEase: 'ease-in-out'
  });
  $('.smallslider__slider').slick({
    slidesToShow: 3,
    centerMode:true,
    centerPadding:'17%',
    variableWidth:true,
    arrows:true,
    draggable:false,
    infinite:true,
    pauseOnHover:false,
    speed: 400,
    rows:1,
    autoplay:true,
    autoplaySpeed: 2000,
    useTransform: true,
    cssEase: 'ease-out'
});


  $('.slider__slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-current').addClass('slick--active');
    $('.smallslider__item').removeClass('slick--active');
  });
  $('.slider__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-current').removeClass('slick--active');
  });
  $('.slider__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slick-current').removeClass('slick--active');
  });

    $('.modal__form').submit(function (e) {
        e.preventDefault();
        var form = $(this), button = $('.modal__form').find('.modal__btn');
        $.post('sender.php', form.serialize(), function (data) {
            $("input[type='text']").val('');
            $(".modal").removeClass('modal--active');
            alert('Заявка отправлена!');
        });
    });
  
});

$('.modal1__close').on('click',function(e){
  $('.modal1').removeClass('modal--active');
});

$('.hi__button--yes').on('click',function(e){
  $('.modal1').addClass('modal--active');
});

$('.modal2__close').on('click',function(e){
  $('.modal2').removeClass('modal--active');
});

$('.hi__button--no').on('click',function(e){
  $('.modal2').addClass('modal--active');
});

$('.slider__slider').on('init', function(slick) {
  $('.slick-center').addClass('slick--active');
});