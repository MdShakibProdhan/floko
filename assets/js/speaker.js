// $(document).ready(function () {
//     var $slider = $('.slider');


//     $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//         var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;
//     });

//     $slider.slick({
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         speed: 400
//     });
// });

// $('.slider').slick({
//     slidesToShow: 3,
//     nextArrow: '<button class="custom-next-arrow"><i class="fa fa-angle-right"></i></button>',
//     prevArrow: '<button class="custom-prev-arrow"><i class="fa fa-angle-left"></i></button>',
// });


$('.slider').slick({
    nextArrow: '<img class="custom-next-arrow" src="./assets/img/icon/arro-right.png" alt="">',
    prevArrow: '<img class="custom-prev-arrow" src="./assets/img/icon/arro-left.png" alt="">',
    variableWidth: true,
    variableHeight: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
});

// $('.testimonial-content').slick({
//     dots: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     variableWidth: true
// });

$('.testimonial-content').slick({
    prevArrow: '<img class="testi-prev-arrow" src="./assets/img/icon/icon-6.png" alt="">',
    nextArrow: '<img class="testi-next-arrow" src="./assets/img/icon/icon-7.png" alt="">',

    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    variableWidth: true,
    customPaging: function (slider, i) {
        return '<button class="slick-dot"><i class="fas fa-circle"></i></button>';
    }
});

{/* <div class="slider slider-for">
  <div>
    <h3>1</h3></div>
  <div>
    <h3>2</h3></div>
  <div>
    <h3>3</h3></div>
 
</div>
<div class="slider slider-nav">
  <div>
    <h3>11</h3></div>
  <div>
    <h3>22</h3></div>
  <div>
    <h3>33</h3></div>

</div> */}

// $(function() {
//     $('.slider-for').slick({
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       arrows: false,
//       fade: true,
//       asNavFor: '.slider-nav'
//     });
//     $('.slider-nav').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       asNavFor: '.slider-for',
//       dots: true,
//       // centerMode: true,
//       focusOnSelect: true
//     });
//   });

$('.schedule-slider-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.schedule-slider-head'
});
$('.schedule-slider-head').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.schedule-slider-content',
    dots: false,
    centerMode: true,
    focusOnSelect: true
});