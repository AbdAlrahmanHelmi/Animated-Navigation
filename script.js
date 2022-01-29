const menuBars = document.getElementById(`menu-bars`);
const overlay = document.getElementById(`overlay`);
const nav1 = document.getElementById(`nav-1`);
const nav2 = document.getElementById(`nav-2`);
const nav3 = document.getElementById(`nav-3`);
const nav4 = document.getElementById(`nav-4`);
const nav5 = document.getElementById(`nav-5`);

const toggleNav = function () {
  menuBars.classList.toggle(`change`);
  overlay.classList.toggle(`overlay-active`);
  if (overlay.classList.contains(`overlay-active`)) {
    overlay.classList.add(`overlay-slides-right`);
    overlay.classList.remove(`overlay-slides-left`);
  } else {
    overlay.classList.add(`overlay-slides-left`);
    overlay.classList.remove(`overlay-slides-right`);
  }
};

menuBars.addEventListener(`click`, toggleNav);
nav1.addEventListener(`click`, toggleNav);
nav2.addEventListener(`click`, toggleNav);
nav3.addEventListener(`click`, toggleNav);
nav4.addEventListener(`click`, toggleNav);
nav5.addEventListener(`click`, toggleNav);
