
  $('.my-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true
  });


$('.arts-popup').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery:{
        enable: true,
        navigateByImgClick: true,
    },
    removalDelay: 300
})