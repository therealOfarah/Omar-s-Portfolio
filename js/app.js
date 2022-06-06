/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/



/*------------------------ Cached Element References ------------------------*/

const btn = document.querySelector("#button")


/*----------------------------- Event Listeners -----------------------------*/

btn.addEventListener("click", changePage)

/*-------------------------------- Functions --------------------------------*/
function changePage(evt){
  //targeting the elemenet thats needed to be changed 
  let button = evt.target.id ="button"

}
function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
