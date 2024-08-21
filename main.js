const swiper = new Swiper(".swiper", {
  autoplay: {
    display: 2000,
    disableOnInteraction: false,
  },

  direction: "vertical",

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const textIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("text-intersection", entry.isIntersecting);
  });
});

const text = document.querySelectorAll(".text div");

text.forEach((e) => {
  textIntersectionObserver.observe(e);
});

const offeringsIntersectionObserver = new IntersectionObserver((abc) => {
  abc.forEach((e) => {
    e.target.classList.toggle("offering-intersection", e.isIntersecting);
  });
});

const offerings = document.querySelectorAll(".qwe");

offerings.forEach((e) => {
  offeringsIntersectionObserver.observe(e);
});

// console.log("hfdsjhdjk");
