let bookmarkon = document.querySelector(".bookmarkon"),
   bookmarkoff = document.querySelector(".bookmarkoff")
bookmarkon.style.display = "none"
function bookToggle() {
   if (bookmarkon.style.display == "none") {
      bookmarkon.style.display = "block"
      bookmarkoff.style.display = "none"
   } else if (bookmarkon.style.display == "block") {
      bookmarkon.style.display = "none"
      bookmarkoff.style.display = "block"
   }
}

const filterPop = document.querySelector("#filterPop")
const closeBtn = document.querySelector("#closeBtn")
const filterBtn = document.querySelector("#filterBtn")

filterBtn.addEventListener("click", function () {
   filterPop.classList.add("on")
   console.log(0)
})
closeBtn.addEventListener("click", function () {
   filterPop.classList.remove("on")
})
