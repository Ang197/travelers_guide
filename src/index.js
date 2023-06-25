//HTML Elements
const aboutBtnEl = document.getElementById("about-btn");
const charactersBtnEl = document.getElementById("characters-btn");
const weaponsBtnEl = document.getElementById("weapons-btn");
const modalHeaderEl = document.getElementsByClassName("modal-header")
const modalTitleEl = document.getElementById("modalLabel");
const modalDescriptionEl = document.getElementById("modalDescription");
const searchBarEl = document.getElementsByClassName("textInput");
const sideBarEl = document.getElementById("sideBar");
const overlayEl = document.getElementsByClassName("overlay");
const checkEl = document.getElementById("check");
const imageEl = document.getElementById("modalImage");

//Url Elements
const charUrl = "https://api.genshin.dev/characters"
const weaponUrl = "https://api.genshin.dev/weapons"

//Modal header functions
var random = Math.floor(Math.random() * 5) + 0;
var randomBackgrounds = ["url(imgs/modalHeaderBackgrounds/genshin-modal-header-1.jpg)",
                         "url(imgs/modalHeaderBackgrounds/genshin-modal-header-2.jpg)",
                         "url(imgs/modalHeaderBackgrounds/genshin-modal-header-3.jpg)",
                         "url(imgs/modalHeaderBackgrounds/genshin-modal-header-4.jpg)",
                         "url(imgs/modalHeaderBackgrounds/genshin-modal-header-5.jpg)"];

//Sidebar button event listeners
document.getElementById("btn").addEventListener("click", on);
document.getElementById("cancel").addEventListener("click", off);

// Closes navbar by clicking on the overlay
document.onclick = function(e){
  if(e.target.classList.contains('overlay')){
    checkEl.checked = false;
    off();
  }
}

//Overlay functions
function on() {
  overlayEl[0].style.display = "block";
}

function off() {
  overlayEl[0].style.display = "none";
}

//Sidebar button functions
aboutBtnEl.addEventListener("click", function() {
  modalHeaderEl[0].style.backgroundImage=randomBackgrounds[random];
  
  modalTitleEl.innerHTML = "About"
  modalDescriptionEl.innerHTML = "Traveler's Guide serves as your one to go place for any Genshin-related information, ranging from latest events to information/stats about characters."
  
})

charactersBtnEl.addEventListener("click", function() {
  modalHeaderEl[0].style.backgroundImage=randomBackgrounds[random];

  modalTitleEl.innerHTML = "Characters"
  modalDescriptionEl.innerHTML = "A section to look up any information for any summonable 4 and 5 star character of your choice"
  
  function returnChar(){
    let input = document.getElementsByClassName("textInput")[0].value
    imageEl.src = charUrl + "/" + input.toLowerCase() + "/card";

    let charFirstLetter = input.charAt(0);
    let charRemainingLetters = input.slice(1);
    modalDescriptionEl.innerHTML = charFirstLetter.toUpperCase() + charRemainingLetters;
  }

  searchBarEl[0].addEventListener("keydown", (event) => {
    if(event.keyCode == 13){
      returnChar();
    }
  });
})

weaponsBtnEl.addEventListener("click", function(){
  modalHeaderEl[0].style.backgroundImage=randomBackgrounds[random];

  modalTitleEl.innerHTML = "Weapons"
  modalDescriptionEl.innerHTML = "A section used to know each type of summonable weapon, rarity, and stat."
})