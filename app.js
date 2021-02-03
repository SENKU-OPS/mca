const toggleButton = document.querySelector(".header__toggle-nav-button");
const bar1 = document.querySelector(".header__bar1");
const bar2 = document.querySelector(".header__bar2");
const bar3 = document.querySelector(".header__bar3");
const nav = document.querySelector(".header__nav");

toggleButton.addEventListener("click", () => {
    nav.classList.toggle("toggle-nav");
    bar1.classList.toggle("toggle-bar1");
    bar2.classList.toggle("toggle-bar2");
    bar3.classList.toggle("toggle-bar3");

});