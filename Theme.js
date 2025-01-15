
let teema = localStorage.getItem("theme")

if (teema == "dark") {
    dark()
}


function dark() {
    document.getElementById("page").style.backgroundColor = "black"
    document.getElementById("page").style.color = "lightBlue"
    localStorage.setItem("theme", "dark")
  }


  function light() {
    document.getElementById("page").style.backgroundColor = "white"
    document.getElementById("page").style.color = "blue"
    localStorage.setItem("theme", "light")

  }