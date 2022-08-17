import { workExperince } from "./data.js";
import { resumeTitle } from "./data.js";
import { skills } from "./data.js";
import { education } from "./data.js";

/*------------------------ Cached Element References ------------------------*/
const resume = document.getElementById("resume")
const me = document.getElementById("title")
const skill = document.getElementById("skill")
const learning= document.getElementById("learning")
const body = document.querySelector("body")

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/

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