const centerSlide = document.querySelector(".center-slide");
const slides = document.querySelectorAll("section.slide");
const slideButtons = document.querySelectorAll("section.slide button.btn");
const centerButtons = document.querySelectorAll("section.center-slide button.btn");

function disableBtns() {
    centerButtons.forEach(function (button) {
        button.disabled = true;
    });
}
function enableBtns() {
    centerButtons.forEach(function (button) {
        button.disabled = false;
    });
}

const centerSlideClassesOpen = ["slideOutDown", "slideOutLeft", "slideOutUp", "slideOutRight"];
const slideClassesOpen = ["slideInDown", "slideInRight", "slideInUp", "slideInLeft"];

centerButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        centerSlide.classList.remove("slideInUp", "slideInRight", "slideInDown", "slideInLeft");
        slides[index].classList.remove("slideOutUp", "slideOutRight", "slideOutDown", "slideOutLeft");
        centerSlide.classList.add(centerSlideClassesOpen[index]);
        slides[index].classList.add(slideClassesOpen[index]);
        disableBtns();
    });
});

const centerSlideClassesClose = ["slideInUp", "slideInLeft", "slideInDown", "slideInRight"];
const slideClassesClose = ["slideOutUp", "slideOutRight", "slideOutDown", "slideOutLeft"];

slideButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
        centerSlide.classList.remove("slideOutUp", "slideOutRight", "slideOutDown", "slideOutLeft");
        slides[index].classList.remove("slideInUp", "slideInRight", "slideInDown", "slideInLeft");
        centerSlide.classList.add(centerSlideClassesClose[index]);
        slides[index].classList.add(slideClassesClose[index]);
        enableBtns();
    });
});