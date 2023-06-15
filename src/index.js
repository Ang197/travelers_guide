document.getElementById("btn").addEventListener("click", on);
document.getElementById("cancel").addEventListener("click", off);
const aboutBtnEl = document.getElementById("about-btn");
const charactersBtnEl = document.getElementById("characters-btn");
const weaponsBtnEl = document.getElementById("weapons-btn");
const modalHeaderEl = document.getElementById("exampleModalLabel");
const modalContentEl = document.getElementById("modalContent");

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

aboutBtnEl.addEventListener("click", function() {
  document.getElementById("exampleModalLabel").innerHTML = "About"
  document.getElementById("modalContent").innerHTML = "Traveler's Guide serves as your one to go place for any Genshin-related information, ranging from latest events to information/stats about characters."
})

charactersBtnEl.addEventListener("click", function() {
  document.getElementById("exampleModalLabel").innerHTML = "Characters"
  document.getElementById("modalContent").innerHTML = "A section used to know about a summonable character's stats, weapon type, and element type."
})

weaponsBtnEl.addEventListener("click", function(){
  document.getElementById("exampleModalLabel").innerHTML = "Weapons"
  document.getElementById("modalContent").innerHTML = "A section used to know each type of summonable weapon, rarity, and stat."
})