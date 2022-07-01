import { workExperince } from "./data.js";
import { resumeTitle } from "./data.js";
import { skills } from "./data.js";
import { education } from "./data.js";

/*------------------------ Cached Element References ------------------------*/
const resume = document.getElementById("resume")
const me = document.getElementById("title")
const header = document.querySelector("header")
const skill = document.getElementById("skill")
const learning= document.getElementById("learning")
const lightDarkBtn = document.querySelector("#light-dark-button")
const darkLightBtn = document.querySelector("#dark-light-button")
const body = document.querySelector("body")

/*----------------------------- Event Listeners -----------------------------*/
lightDarkBtn.addEventListener("mouseover", bigger)
lightDarkBtn.addEventListener("mouseout", smaller)
darkLightBtn.addEventListener("mouseover", biggerLight)
darkLightBtn.addEventListener("mouseout", smallerLight)
lightDarkBtn.addEventListener("click", lightToDark)
darkLightBtn.addEventListener("click", darkToLight)
// header.addEventListener("mouseover", hover)
// header.addEventListener("mouseout", hoverOut)


/*-------------------------------- Functions --------------------------------*/
function hover(evt) {
  evt.target.style.backgroundColor = "lightblue"
}
function hoverOut(evt) {
  evt.target.style.backgroundColor = "white"
}
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
//
//local storage

const title = resumeTitle.map(item =>
  `<h1 style="text-align:center">${item.name}</h2>
  `
)
me.innerHTML = title

const jobs = workExperince.map(work =>

  `
    <h5>Company Name: ${work.name}</h5>
    <h5>Position:${work.position}</h5>
    <h5>Time at Company:${work.startEnd}</h5>
    <ul>
    <li>${work.whatYouDid1}</li>
    <li>${work.whatYouDid2}</li>
    <li>${work.whatYouDid3}</li>
    </ul> 
    
    `
).join(" ")

resume.innerHTML = jobs

const talents = skills.map(skill =>
  `
<h5>Skills</h5>
<ul>
  <li>${skill.skill1}</li>
  <li>${skill.skill2}</li>
  <li>${skill.skill3}</li>
  <li>${skill.skill4}</li>
  <li>${skill.skill5}</li>
</ul>
`
).join(" ")
skill.innerHTML = talents
const schl = education.map(item =>
  `
  <h5>${item.name}</h5>
  <h6>${item.years}</h6>
  <h6>${item.location}</h6>
  `
).join(" ")
learning.innerHTML = schl
// resume.addEventListener("mouseover", hover)
// resume.addEventListener("mouseout", hoverOut)
// me.addEventListener("mouseover", hover)
// me.addEventListener("mouseout", hoverOut)
// skill.addEventListener("mouseover", hover)
// skill.addEventListener("mouseout", hoverOut)
// learning.addEventListener("mouseover", hover)
// learning.addEventListener("mouseout", hoverOut)
