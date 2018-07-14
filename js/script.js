const toggle = document.querySelector(".main-nav__toggle");
const mainMenu = document.querySelector(".main-nav");

mainMenu.classList.remove("main-nav--no-js");

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainMenu.classList.toggle("main-nav--closed");
});


const modal = document.querySelector(".modal");
const button = document.querySelector(".good__order-button");
const focusField = document.querySelector(".add-cort__size-input");


function showModal(a) {
  a.preventDefault();
  modal.classList.add("modal--shown");
  focusField.focus();


  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && modal.classList.contains("modal--shown")) {
      modal.classList.remove("modal--shown");
    }
  });

  window.addEventListener("click", function(evt) {
    if (evt.target == modal) {
      modal.classList.remove("modal--shown");
    }
  });
}


button.addEventListener("click", showModal);
