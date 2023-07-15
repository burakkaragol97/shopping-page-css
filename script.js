// IMPLEMENT STICKY NAVIGATION BAR
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

// IMPLEMENTING RESPONSIVE NAVBAR
const menu = document.querySelector("#menu-icon");
const navMenu = document.querySelector(".nav-menu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navMenu.classList.toggle("open");
};
