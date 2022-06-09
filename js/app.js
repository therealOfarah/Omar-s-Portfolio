

const photo = document.getElementById("image")
const btn = document.getElementById("button")
const header = document.querySelector("header")
const lightDarkBtn = document.querySelector("#light-dark-button")
const darkLightBtn = document.querySelector("#dark-light-button")
const body = document.querySelector("body")

btn.addEventListener("mouseover", changeButton)
header.addEventListener("mouseover", hover)
header.addEventListener("mouseout", hoverOut)
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

lightDarkBtn.addEventListener("click", lightToDark)
darkLightBtn.addEventListener("click", darkToLight)
//
//local storage



//
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



