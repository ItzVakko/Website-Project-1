const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerGroup: 1,
  slidesPerView: 1,
  spaceBetween: 50,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1416: {
      slidesPerView: 3,
      slidesPerGroup: 3.5,
    },
    920: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    811: {
      slidesPerView: 2,
      slidesPerGroup: 3,
    },
    440: {
      slidesPerView: 1.5,
      slidesPerGroup: 4,
    },
    100: {
      slidesPerView: 0.9,
      slidesPerGroup: 1,
    },
  },
});
