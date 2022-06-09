const lightDarkBtn = document.querySelector("#light-dark-button")
const body = document.querySelector("body")


function toggleLightDark() {
  body.className = body.className === "dark" ? "" : "dark"
}
function checkDarkPref() {
  if (localStorage.getItem("(prefers-color-scheme:dark)") &&
    body.className !== "dark"
  ) {
    toggleLightDark()
  }
}
checkDarkPref()
lightDarkBtn.addEventListener("click", toggleLightDark)