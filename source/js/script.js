// BURGER
const burger = document.querySelector('.burger-button__burger');
const menuList = document.querySelector('.main-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menuList.classList.toggle('show');
});

// SLIDER
const swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
