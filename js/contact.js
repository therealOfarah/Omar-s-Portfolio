import { workExperince } from "./data.js";
import { resumeTitle } from "./data.js";

const resume = document.getElementById("resume")
const me = document.getElementById("title")
const header = document.querySelector("header")

header.addEventListener("mouseover", hover)
header.addEventListener("mouseout", hoverOut)
/*-------------------------------- Functions --------------------------------*/
function hover(evt) {
  evt.target.style.backgroundColor = "lightblue"
}
function hoverOut(evt) {
  evt.target.style.backgroundColor = "white"
}
function lightDark(){
  body.className = body.className === "dark" ? "" : "dark"
}
const title = resumeTitle.map(item =>
  `<h1 style="text-align:center">${item.name}</h2>
  <h4 style="text-align:center">${item.location}</h2>`
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

jobs.addEventListener("mouseover", hover)
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