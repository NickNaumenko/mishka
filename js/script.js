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
const cartList = document.querySelectorAll(".good-info__cart");


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

if (button) {
  button.addEventListener("click", showModal);
}

for (let i = 0; i < cartList.length; i++) {
  cartList[i].addEventListener("click", showModal);
}

function initMap() {
  var point = {lat: 59.93873, lng: 30.32310};
  var center = {lat: 59.9387, lng: 30.3230};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: center
  });
  var image = {
    url: "img/map-marker.png",
    size: new google.maps.Size(67, 100),
    anchor: new google.maps.Point(33.5, 100)
  }
  var marker = new google.maps.Marker({
    position: point,
    map: map,
    icon: image
  });
}
