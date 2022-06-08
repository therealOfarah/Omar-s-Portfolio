/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const photo = document.getElementById("image")
const btn = document.getElementById("button")


btn.addEventListener("mouseover", changeButton)

function changeButton(evt){
evt.target.style.backgroundColor="grey"
evt.target.style.color="black"
}

/*-------------------------------- Functions --------------------------------*/

