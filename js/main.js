// start btn up

let btnScroll = document.querySelector(".btn-scroll");

window.onscroll = () => {
    if (this.scrollY >= 1000) {
        btnScroll.classList.add("show")
    } else {
        btnScroll.classList.remove("show")
    }
};

btnScroll.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


// start indust
var swiper = new Swiper(".industriesSwiper", {
  slidesPerView: 4,     // ← عدد الصور اللي تظهر جنب بعض
  spaceBetween: 0,      // المسافة بين الصور
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 4
    }
  }
});




// start section testimonials 

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


