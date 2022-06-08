import { workExperince } from "./data.js";
import { resumeTitle } from "./data.js";
console.log(resumeTitle)
console.log(workExperince)

const resume =document.getElementById("resume")
const me = document.getElementById("title")

const title = resumeTitle.map( item=>
`<h1 style="text-align:center">${item.name}</h2>
<h4 style="text-align:center">${item.location}</h2>`
)
me.innerHTML = title

const jobs = workExperince.map( work =>

  `
  <h5>Company name: ${work.name}</h5>
<h5>Position:${work.position}</h5>
<h5>Time at Company:${work.startEnd}</h5>
<ul>
  <li style="list-style-type: none;">${work.whatYouDid1}</li>
  <li style="list-style-type: none;">${work.whatYouDid2}</li>
  <li style="list-style-type: none;">${work.whatYouDid3}</li>
</ul> 
  
  `
  ).join(" ")


resume.innerHTML =jobs



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