/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
import { projects } from "./data.js";


const cardContainer = document.getElementById("card-container")
const a = document.querySelector("a")
/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/

a.addEventListener("mouseover",hover)

/*-------------------------------- Functions --------------------------------*/
function hover(evt){
evt.target.style.color= "black"
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





