
  $('.my-slider').slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    adaptiveHeight: true
  });


  $('.arts-popup').magnificPopup({delegate: 'a',
    type: 'image',
    gallery:{
        enable: true
    },
    removalDelay: 300,

    mainClass: 'mfp-fade'
})