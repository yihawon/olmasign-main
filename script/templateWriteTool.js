document.querySelector(".add_sign").addEventListener("click", function () {
   document.querySelector(".sign_draw_wrap").style.display = "block"
})

function show() {
   document.querySelector(".item_tabBtn_btn").style.display = "block"
}
function hide() {
   document.querySelector(".item_tabBtn_btn").style.display = "none"
}

document.querySelector(".btn_close").addEventListener("click", function () {
   document.querySelector(".sign_draw_wrap").style.display = "none"
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

function modal(elem) {
   imgLinkPop = document.querySelector(".img_link_pop")
   if (elem == "on") {
      imgLinkPop.classList.add("on")
   } else if (elem == "off") {
      imgLinkPop.classList.remove("on")
   }
}

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
      console.log(this.dataset.value)
   })
}

const btn = document.querySelector(".btn_select"),
   list = document.querySelector(".list_item")
btn.addEventListener("click", () => {
   btn.classList.toggle("on")
})
list.addEventListener("click", (event) => {
   if (event.target.nodeName === "BUTTON") {
      btn.innerText = event.target.innerText
      btn.classList.remove("on")
   }
})

let btnTxtColor = document.querySelector(".btn_txt_color"),
   palette = document.querySelector(".color_palette"),
   $body = document.querySelector("body")

palette.style.display = "none"

btnTxtColor.addEventListener("click", function (event) {
   event.stopPropagation()
   palette.style.display = "block"
})

$body.addEventListener("click", close, true)

function close() {
   palette.style.display = "none"
}

let pick = document.getElementById("pick"),
   hexCode = document.getElementById("hex_code")

pick.addEventListener(
   "input",
   function () {
      let code = pick.value
      hexCode.textContent = code
      hexCode.setAttribute("href", code)
   },
   false
)
