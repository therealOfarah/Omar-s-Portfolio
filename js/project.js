/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
import { projects } from "./data.js";


const cardContainer = document.getElementById("card-container")
const header = document.querySelector("header")
const lightDarkBtn = document.querySelector("#light-dark-button")
const darkLightBtn = document.querySelector("#dark-light-button")
const body = document.querySelector("body")

/*------------------------ Cached Element References ------------------------*/

lightDarkBtn.addEventListener("mouseover", bigger)
lightDarkBtn.addEventListener("mouseout", smaller)
darkLightBtn.addEventListener("mouseover", biggerLight)
darkLightBtn.addEventListener("mouseout", smallerLight)

/*----------------------------- Event Listeners -----------------------------*/

header.addEventListener("mouseover", hover)
header.addEventListener("mouseout", hoverOut)
/*-------------------------------- Functions --------------------------------*/
function lightToDark() {
  // if statement like if local storage is dark then body class name is dark else if local storage is not dark then body class name is and empty string
  //set localStorage to either dark or light
  localStorage.setItem("dark", "true")
  body.className = "dark"
  console.log(localStorage)
}

function darkToLight() {

  //set localStorage to either dark or light
  localStorage.setItem("dark", "false")
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
function hover(evt) {
  evt.target.style.backgroundColor = "lightblue"
}
function hoverOut(evt) {
  evt.target.style.backgroundColor = "white"
}

let projectData = projects.map(project =>
  `
<div class="card" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${project.name}</h5>
    <p class="card-text">${project.bio}</p>
    <a href="${project.weblink}" class="btn btn-primary">Play the game</a>
    <a href="${project.github}" class="btn btn-secondary">Github</a>
  </div>
</div> 
`
).join("")

cardContainer.innerHTML = projectData

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



