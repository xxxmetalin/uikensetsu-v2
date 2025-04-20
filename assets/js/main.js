  const pointSlider = document.querySelector('.js-point-slider');
  new Swiper(pointSlider, {
    slidesPerView: 1.1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination'
    },
    navigation:  {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      959: {
        slidesPerView: 2.8,
        spaceBetween: 80,
      }
    }
  })