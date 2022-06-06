/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const btn = document.querySelector("#button")


/*----------------------------- Event Listeners -----------------------------*/

btn.addEventListener("onClick", changePage)

/*-------------------------------- Functions --------------------------------*/
function changePage(evt){
  //targeting the elemenet thats needed to be changed 
  const a = document.createElement("a")
  a.href = "contact-page.html"
}
