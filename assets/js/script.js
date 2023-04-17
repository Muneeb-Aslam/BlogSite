"use strict";


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");


const toggleNav = () => {
    navbar.classList.toggle("active");
    document.body.classList.toggle("nav-active");
};

for(let i of navTogglers){
    i.addEventListener("click",toggleNav)
}



window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});

/**
 * SLIDER
 */


let totalSliderVisibleItems = Number(
    getComputedStyle(slider).getPropertyValue("--slider-items")
);
let totalSlidableItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
};

/**
 * NEXT SLIDE
 */

const slideNext = function () {
    const slideEnd = currentSlidePos >= totalSlidableItems;

    if (slideEnd) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    moveSliderItem();
};

sliderNextBtn.addEventListener("click", slideNext);


/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
    if (currentSlidePos <= 0) {
      currentSlidePos = totalSlidableItems;
    } else {
      currentSlidePos--;
    }
  
    moveSliderItem();
  }
  
  sliderPrevBtn.addEventListener("click", slidePrev);
  
  /**
   * RESPONSIVE
   */
  window.addEventListener("resize", function () {
    totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
    totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;
  
    moveSliderItem();
  });