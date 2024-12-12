/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
document.addEventListener('DOMContentLoaded', function () {
  const firstSlide = document.querySelector(".wp-block-create-block-superbeautiful-accordion-gallery figure");
  firstSlide.classList.add("active");
});
let sliders = document.querySelectorAll(".wp-block-create-block-superbeautiful-accordion-gallery figure");
sliders.forEach(slide => {
  slide.addEventListener("click", function () {
    removeClassActive();
    slide.classList.add("active");
  });
});
function removeClassActive() {
  sliders.forEach(slide => {
    slide.classList.remove("active");
  });
}
/******/ })()
;
//# sourceMappingURL=view.js.map