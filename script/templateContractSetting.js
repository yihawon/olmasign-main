let certificatePop = document.querySelector(".certification_pop")
function certificationPop() {
   certificatePop.classList.add("on")
}
document.querySelector(".close_pop").addEventListener("click", () => {
   certificatePop.classList.remove("on")
})

certificate.onclick = function (event) {
   if (event.target.className != "remove-button") return

   let pane = event.target.closest(".pane")
   pane.remove()
}

let tab = document.querySelectorAll(".tab")
let cont = document.querySelectorAll(".cont")

function contentShow(num) {
   cont.forEach((item, idx) => {
      item.classList.add("active_tab")
   })
   cont[num].classList.remove("active_tab")
}
tab.forEach((item, idx) => {
   item.addEventListener("click", () => {
      contentShow(idx)
      highLight(idx)
      console.log(0)
   })
})

function highLight(num) {
   let highLight = document.querySelector(".highlight")
   const newLeft = tab[num].offsetLeft
   const newWidth = tab[num].offsetWidth
   highLight.style.left = newLeft + "px"
   highLight.style.width = newWidth + "px"
}

contentShow(0)

const tab_wrap = document.querySelector(".tab_wrap")

function select(ulEl, liEl) {
   Array.from(ulEl.children).forEach((v) => v.classList.remove("selected"))
   if (liEl) liEl.classList.add("selected")
}

tab_wrap.addEventListener("click", (e) => {
   const selected = e.target
   select(tab_wrap, selected)
})
