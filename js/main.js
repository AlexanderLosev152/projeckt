// swiper
var swiper = new Swiper(".popular__content", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    758: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// ---

// video

let playButton = document.querySelector(".play__movie");
let video = document.querySelector(".video__container");
let myvideo = document.querySelector("#myvideo");
let closebtn = document.querySelector(".close__video");


// открытие видео
playButton.onclick = () => {
  video.classList.add('show-video');
  // автовоспроизведение при открытии
  myvideo.play()
};


// закрытие видео
closebtn.onclick = () => {
  video.classList.remove("show-video");
  // закрытие и пауза
  myvideo.pause();

};