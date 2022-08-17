
/*------------------------ Cached Element References ------------------------*/
const photo = document.getElementById("image")
const btn = document.getElementById("button")
const body = document.querySelector("body")

/*----------------------------- Event Listeners -----------------------------*/
/*-------------------------------- Functions --------------------------------*/

function lightToDark() {
  localStorage.setItem("dark","true")
  body.className = "dark" 
  console.log(localStorage)
}

function darkToLight() {
  localStorage.setItem("dark","false")
  body.className = ""
}

function checkDarkPref() {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    lightDark()
  }
}

function bigger(evt){
  const word = document.querySelector('#light-dark-button');
  word.textContent = `DARK`;
}
function smaller(evt){
  const word = document.querySelector('#light-dark-button');
  word.textContent = `Dark`;
}
function biggerLight(evt){
  const word = document.querySelector('#dark-light-button');
  word.textContent = `LIGHT`;
}
function smallerLight(evt){
  const word = document.querySelector('#dark-light-button');
  word.textContent = `Light`;
}
function hover(evt) {
  evt.target.style.backgroundColor = "lightblue"
}
function hoverOut(evt) {
  evt.target.style.backgroundColor = "white"
}
function changeButton(evt) {
  evt.target.style.backgroundColor = "grey"
  evt.target.style.color = "black"
}
function changeButtonBack(evt) {
  evt.target.style.backgroundColor = "white"
  evt.target.style.color = "black"
}



