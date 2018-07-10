const toggle = document.querySelector(".main-nav__toggle");
const mainMenu = document.querySelector(".main-nav");

mainMenu.classList.remove("main-nav--no-js");

function showMenu() {
  mainMenu.classList.toggle("main-nav--closed");
}

toggle.addEventListener("click", showMenu);
