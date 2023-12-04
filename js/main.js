const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

// Клик по кнопке с подсказками

for (let btn of infoBtns) {
  btn.addEventListener("click", showHint);
}

function showHint(e) {
  e.stopPropagation(); 

  for (let hint of infoHints) {
    hint.classList.add("none");
  }

  this.parentNode.querySelector(".info-hint").classList.toggle("none");
}

// Закрываем подсказки при клилке по всему документу

document.addEventListener("click", closeHints);

function closeHints() {
  for (let hint of infoHints) {
    hint.classList.add("none");
  }
}

for (let hint of infoHints) {
  hint.addEventListener("click", (e) => e.stopPropagation());
}

// swiper slider

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  loop: true,
  freeMode: true,

  slidesPerView: 1,
  spaceBetween: 42,

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },

breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // },
    1230: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  }
});

// Tabs

const tabsBtns = document.querySelectorAll("[data-tab]");
const tabsProducts = document.querySelectorAll("[data-tab-value]");

for (let btn of tabsBtns) {
  btn.addEventListener("click", function () {
    for (let btn of tabsBtns) {
      btn.classList.remove("tab-controls__btn--active");
    }

    this.classList.add("tab-controls__btn--active");

    for (let product of tabsProducts) {
      if (this.dataset.tab === "all") {
        product.classList.remove("none");
      } else{
        if (this.dataset.tab === product.dataset.tabValue) {
          product.classList.remove("none");
        } else {
          product.classList.add("none");
        }
      }

     
    }

    swiper.update();
  });
}


// Mobile nav

const mobileNavOpen = document.querySelector('#open-mobile-nav-btn')
const mobileNavClose = document.querySelector('#close-mobile-nav-btn')
const mobileNav = document.querySelector('.mobile-nav-wrapper')

mobileNavOpen.onclick = function(){
  mobileNav.classList.add('mobile-nav-wrapper--open')
}

mobileNavClose.onclick = function(){
  mobileNav.classList.remove('mobile-nav-wrapper--open')
}