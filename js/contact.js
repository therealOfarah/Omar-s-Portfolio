import { workExperince } from "./data.js";
import { resumeTitle } from "./data.js";
import { skills } from "./data.js";

const resume = document.getElementById("resume")
const me = document.getElementById("title")
const header = document.querySelector("header")
const skill = document.getElementById("skill")
const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")


header.addEventListener("mouseover", hover)
header.addEventListener("mouseout", hoverOut)
/*-------------------------------- Functions --------------------------------*/
function hover(evt) {
  evt.target.style.backgroundColor = "lightBlue"
}
function hoverOut(evt) {
  evt.target.style.backgroundColor = "white"
}
function changeColor(evt) {
  evt.target.style.color = "red"
}
function colorBack(evt) {
  evt.target.style.color = "black"
}
//light and dark mode
function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}
function checkDarkPref() {
  if (
    window.matchMedia("(prefers-color-scheme:dark)").mathces &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}
checkDarkPref()
lightDarkBtn.addEventListener("click", toggleLightDark)
//
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
resume.addEventListener("mouseover", changeColor)
resume.addEventListener("mouseout", colorBack)
me.addEventListener("mouseover", changeColor)
me.addEventListener("mouseout", colorBack)
skill.addEventListener("mouseover", changeColor)
skill.addEventListener("mouseout", colorBack)
{/* <h1 style="text-align:center">title</h2>
<h4 style="text-align:center">Name and location</h2>
<h5>Company name:</h5>
<h5>Position:</h5>
<h5>Time at Company:</h5>
<ul>
  <li style="list-style-type: none;"></li>
  <li style="list-style-type: none;"></li>
  <li style="list-style-type: none;"></li>
</ul> */}