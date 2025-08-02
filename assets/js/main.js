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

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const answer = item.querySelector('.faq-answer');
      const icon = button.querySelector('.toggle-icon');
      const isOpen = item.classList.contains('open');

      if (isOpen) {
        item.classList.remove('open');
        answer.style.display = 'none';
        icon.textContent = '+';
      } else {
        item.classList.add('open');
        answer.style.display = 'flex';
        icon.textContent = '−';
      }
    });
  });
