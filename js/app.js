



/*------------------------ Cached Element References ------------------------*/

const photo = document.getElementById("image")
const btn = document.getElementById("button")
const header= document.querySelector("header")

btn.addEventListener("mouseover", changeButton)
header.addEventListener("mouseover",hover)
header.addEventListener("mouseout",hoverOut)
/*-------------------------------- Functions --------------------------------*/
function hover(evt){
evt.target.style.backgroundColor="lightblue"
}
function hoverOut(evt){
  evt.target.style.backgroundColor="white"
}
function changeButton(evt){
evt.target.style.backgroundColor="grey"
evt.target.style.color="black"
}



