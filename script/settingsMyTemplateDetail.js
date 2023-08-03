const selec_1 = document.querySelector("#selec_1"),
   selec_1_li = document.querySelector("#selec_1_li")
selec_1.addEventListener("click", () => {
   selec_1.classList.toggle("on")
})
selec_1_li.addEventListener("click", (event) => {
   if (event.target.nodeName === "BUTTON") {
      selec_1.innerText = event.target.innerText
      selec_1.classList.remove("on")
   }
})
const selec_2 = document.querySelector("#selec_2"),
   selec_2_li = document.querySelector("#selec_2_li")
selec_2.addEventListener("click", () => {
   selec_2.classList.toggle("on")
})
selec_2_li.addEventListener("click", (event) => {
   if (event.target.nodeName === "BUTTON") {
      selec_2.innerText = event.target.innerText
      selec_2.classList.remove("on")
   }
})

const btnLinkPop = document.querySelector("#btn_link_pop"),
   imgLinkPop = document.querySelector("#img_link_pop"),
   btnClosePop = document.querySelector(".btn_close_pop")

btnLinkPop.addEventListener("click", () => {
   imgLinkPop.classList.add("on")
})

btnClosePop.addEventListener("click", () => {
   imgLinkPop.classList.remove("on")
})

const dropdown = document.querySelector(".dropdown"),
   dropdown_btn = document.querySelector(".dropdown-btn"),
   dropdown_content = document.querySelector(".dropdown-content"),
   dropdown_item = document.querySelectorAll(".dropdown-item"),
   arrow = document.querySelector(".fas")

document.addEventListener("click", function (e) {
   if (e.target == dropdown_btn) {
      return
   } else {
      if (dropdown_content.classList.contains("activedrop")) {
         dropdown_content.classList.remove("activedrop")
         dropdown_btn.classList.remove("activedrop")
      }
   }
})

dropdown.addEventListener("click", function () {
   this.classList.toggle("activedrop")
   dropdown_content.classList.toggle("activedrop")
   dropdown_btn.classList.toggle("activedrop")
})

for (let i = 0; i < dropdown_item.length; i++) {
   dropdown_item[i].addEventListener("click", function () {
      dropdown_btn.getElementsByTagName("p")[0].textContent = this.textContent
   })
}
