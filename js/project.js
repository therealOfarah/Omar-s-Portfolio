import  {projects}  from "./data.js"
/*-------------------------------- Constants --------------------------------*/
const cardContainer = document.getElementById("card-container")
/*-------------------------------- Variables --------------------------------*/
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
function start(){
  let zindex = 10;
  
  document.querySelector("div.card").click(function(e){
    e.preventDefault();

    let isShowing = false;

    if (document.querySelector(this).classList.contains("show")) {
      isShowing = true
    }

    if (document.querySelector("div.cards").classList.contains("showing")) {
      // a card is already in view
      document.querySelector("div.card.show")
        .classList.remove("show");

      if (isShowing) {
        // this card was showing - reset the grid
        document.querySelector("div.cards")
          .classList.remove("showing");
      } else {
        // this card isn't showing - get in with it
        document.querySelector(this)
          .css({zIndex: zindex})
          .classList.add("show");

      }

      zindex++;

    } else {
      // no cards in view
      document.querySelector("div.cards")
        .classList.add("showing");
      document.querySelector(this)
        .css({zIndex:zindex})
        .classList.add("show");

      zindex++;
    }
    
  });
};
start()

let projectData = projects.map(project =>
  `<div class="cards">
    <div class="card">
    <div class="card__image-holder">
      <img class="card__image" src="${project.image}" alt="wave" />
    </div>
    <div class="card-title">
      <a href="#" class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
      ${project.name}
      </h2>
    </div>
    <div class="card-flap flap1">
      <div class="card-description">
      ${project.bio}
      </div>
        <div class="card-flap flap2">
          <div class="card-actions">
          <a href="${project.weblink}" class="btn">Visit</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`
).join("")

cardContainer.innerHTML = projectData




