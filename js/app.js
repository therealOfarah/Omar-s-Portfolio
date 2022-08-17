

/*------------------------ Cached Element References ------------------------*/
const photo = document.getElementById("image")
const btn = document.getElementById("button")
// const header = document.querySelector("header")
// const lightDarkBtn = document.querySelector("#light-dark-button")
// const darkLightBtn = document.querySelector("#dark-light-button")
const body = document.querySelector("body")

/*----------------------------- Event Listeners -----------------------------*/
// lightDarkBtn.addEventListener("mouseover", bigger)
// lightDarkBtn.addEventListener("mouseout", smaller)
// darkLightBtn.addEventListener("mouseover", biggerLight)
// darkLightBtn.addEventListener("mouseout", smallerLight)
// btn.addEventListener("mouseout", changeButtonBack)
// btn.addEventListener("mouseover", changeButton)
// header.addEventListener("mouseover", hover)
// header.addEventListener("mouseout", hoverOut)
// lightDarkBtn.addEventListener("click", lightToDark)
// darkLightBtn.addEventListener("click", darkToLight)
/*-------------------------------- Functions --------------------------------*/

//light and dark mode

function lightToDark() {
  // if statement like if local storage is dark then body class name is dark else if local storage is not dark then body class name is and empty string
  //set localStorage to either dark or light
  localStorage.setItem("dark","true")
  body.className = "dark" 
  console.log(localStorage)
}

function darkToLight() {

  //set localStorage to either dark or light
  localStorage.setItem("dark","false")
  body.className = ""
  // console.log(localStorage)
}
// console.log(localStorage)


  function checkDarkPref() {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches &&
    body.className !== "dark"
  ) {
    lightDark()
  }
}

//
//local storage



//
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



