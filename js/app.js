

const photo = document.getElementById("image")
const btn = document.getElementById("button")
const header = document.querySelector("header")
const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")

btn.addEventListener("mouseover", changeButton)
header.addEventListener("mouseover", hover)
header.addEventListener("mouseout", hoverOut)
/*-------------------------------- Functions --------------------------------*/

//light and dark mode
// function toggleLightDark() {
//   body.className = body.className === "dark" ? "" : "dark"
// }
// function checkDarkPref() {
//   if (localStorage.getItem("(prefers-color-scheme:dark)") &&
//     body.className !== "dark"
//   ) {
//     toggleLightDark()
//   }
// }
// checkDarkPref()
// lightDarkBtn.addEventListener("click", toggleLightDark)
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



