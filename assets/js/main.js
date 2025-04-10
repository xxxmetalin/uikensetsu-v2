let player;

function loadYouTubeAPI() {
  return new Promise((resolve) => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onload = resolve; // スクリプト読み込み後にresolve
    document.head.appendChild(tag);
  });
}

function createYouTubePlayer() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: 'VmoPEDGJQCE',
    playerVars: { 'autoplay': 0, 'controls': 1 }
  });
}

// YouTube API が呼び出すグローバル関数
window.onYouTubeIframeAPIReady = function() {
  createYouTubePlayer();
};

async function initYouTube() {
  if (!window.YT) {
    await loadYouTubeAPI(); // YouTube APIスクリプトを読み込む
  }
  if (window.YT && window.YT.Player) {
    createYouTubePlayer();
  }
}


document.addEventListener('DOMContentLoaded', function() {

  initYouTube();

  const playerBtn = document.querySelectorAll('.js-video-play');
  const playerContent = document.querySelector('.p-top__lead-video');

  playerBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoTime = e.target.dataset.videoTime;

      const playerContentRect = playerContent.getBoundingClientRect();

      window.scrollTo({
        top: playerContentRect.top + window.scrollY - 80,
        behavior: 'smooth'
      })

      player.seekTo(videoTime, true);
      player.playVideo();
    })
  });

  const autoSlider = document.querySelector('.js-auto-slider');
  new Swiper(autoSlider, {
    slidesPerView: 1.5,
    spaceBetween: 10,
    loop: true,
    speed: 10000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      959: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  })

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
})