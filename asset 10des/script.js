jQuery(document).ready(function ($) {
  console.log(window.location.pathname);
  var swiper = new Swiper(".my-Swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    slidesPerView: 1,
    spaceBetween: 400,
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
  });

  
  var swiper = new Swiper(".my-swiper1", {
    grabCursor: true,
    loop: true,
    
    breakpoints: {
      0: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 6
      },
      1024: {
        slidesPerView: 6
      },
      1560: {
        slidesPerView: 8,
        spaceBetween:100
      }
    }
  });


  var swiper = new Swiper(".swiper4", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3
      },
      1024: {
        slidesPerView: 3
      },
      1560: {
        slidesPerView: 3
      }
    }
  });

  const tabLink = document.querySelectorAll(".tab-menu-link");
  const tabContent = document.querySelectorAll(".tab-bar-content");

  tabLink.forEach((item) => {
    item.addEventListener("click", activeTab);
  });

  function activeTab(item) {
    const btnTarget = item.currentTarget;
    const content = btnTarget.dataset.content;

    tabContent.forEach((item) => {
      item.classList.remove("is-active");
    });

    tabLink.forEach((item) => {
      item.classList.remove("is-active");
    });

    document.querySelector("#" + content).classList.add("is-active");
    btnTarget.classList.add("is-active");
  }

  let tickerSpeed = 0.3;

  let flickity = null;
  let isPaused = false;
  const slideshowEl = document.querySelector(".js-slideshow");

  //
  //   Functions
  //
  //////////////////////////////////////////////////////////////////////

  const update = () => {
    if (isPaused) return;
    if (flickity.slides) {
      flickity.x = (flickity.x - tickerSpeed) % flickity.slideableWidth;
      flickity.selectedIndex = flickity.dragEndRestingSelect();
      flickity.updateSelectedSlide();
      flickity.settle(flickity.x);
    }
    window.requestAnimationFrame(update);
  };

  const pause = () => {
    isPaused = true;
  };

  const play = () => {
    if (isPaused) {
      isPaused = false;
      window.requestAnimationFrame(update);
    }
  };

  //
  //   Create Flickity
  //
  //////////////////////////////////////////////////////////////////////

  flickity = new Flickity(slideshowEl, {
    autoPlay: false,
    prevNextButtons: false,
    pageDots: false,
    draggable: true,
    wrapAround: true,
    selectedAttraction: 0.015,
    friction: 0.25,
  });
  flickity.x = 0;

  //
  //   Add Event Listeners
  //
  //////////////////////////////////////////////////////////////////////

  slideshowEl.addEventListener("mouseenter", pause, false);
  slideshowEl.addEventListener("focusin", pause, false);
  slideshowEl.addEventListener("mouseleave", play, false);
  slideshowEl.addEventListener("focusout", play, false);

  flickity.on("dragStart", () => {
    isPaused = true;
  });

  //
  //   Start Ticker
  //
  //////////////////////////////////////////////////////////////////////

  update();

  $('.btn-close').click(function (e) {
    e.stopPropagation();
    $('.banner-fix').toggleClass('closee');
  });


  //////////////////////////////////
  $('.hamburger').click(function (e) {
    e.stopPropagation();
    $('.nav-mobile-box').toggleClass('active');
  });

//   $('.closee-fixed-r').click(function (e) {
//     e.stopPropagation();
//     $('.nav-mobile-box').toggleClass('active');

// });





});