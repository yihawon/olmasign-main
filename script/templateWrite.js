document.querySelector(".add_sign").addEventListener("click", function () {
   document.querySelector(".lawform_wrap").style.display = "block"
})

function show() {
   document.querySelector(".item_tabBtn_btn").style.display = "block"
}
function hide() {
   document.querySelector(".item_tabBtn_btn").style.display = "none"
}
document.querySelector(".item_list_wrap").addEventListener("mouseenter", show)
document.querySelector(".item_list_wrap").addEventListener("mouseleave", hide)

let tabBtn = document.querySelectorAll(".tab_btn")
let cont = document.querySelectorAll(".lawform_content")

function contentShow(num) {
   cont.forEach((item, idx) => {
      item.classList.add("active")
   })
   cont[num].classList.remove("active")
}
tabBtn.forEach((item, idx) => {
   item.addEventListener("click", () => {
      contentShow(idx)
      highLight(idx)
   })
})

contentShow(0)

document.querySelector(".tabBtn__1").addEventListener("click", function () {
   document.querySelector(".tabBtn__1").style.background = "url('../../imgs/tap_p_s_s_wide.svg')"
   document.querySelector(".tabBtn__1").style.backgroundPosition = "left"
   document.querySelector(".tabBtn__1").style.color = "var(--violet_P)"
   document.querySelector(".tabBtn__2").style.background = "none"
   document.querySelector(".tabBtn__2").style.color = "var(--second_06)"
   document.querySelector(".tabBtn__3").style.background = "none"
   document.querySelector(".tabBtn__3").style.color = "var(--second_06)"
})
document.querySelector(".tabBtn__2").addEventListener("click", function () {
   document.querySelector(".tabBtn__2").style.background = "url('../../imgs/tap_p_s_s_wide.svg')"
   document.querySelector(".tabBtn__2").style.backgroundPosition = "left"
   document.querySelector(".tabBtn__2").style.color = "var(--violet_P)"
   document.querySelector(".tabBtn__1").style.background = "none"
   document.querySelector(".tabBtn__1").style.color = "var(--second_06)"
   document.querySelector(".tabBtn__3").style.background = "none"
   document.querySelector(".tabBtn__3").style.color = "var(--second_06)"
})
document.querySelector(".tabBtn__3").addEventListener("click", function () {
   document.querySelector(".tabBtn__3").style.background = "url('../../imgs/tap_p_s_s_wide.svg')"
   document.querySelector(".tabBtn__3").style.backgroundPosition = "left"
   document.querySelector(".tabBtn__3").style.color = "var(--violet_P)"
   document.querySelector(".tabBtn__1").style.background = "none"
   document.querySelector(".tabBtn__1").style.color = "var(--second_06)"
   document.querySelector(".tabBtn__2").style.background = "none"
   document.querySelector(".tabBtn__2").style.color = "var(--second_06)"
})

const btn = document.querySelector(".btn_select")
const list = document.querySelector(".list_item")
btn.addEventListener("click", () => {
   btn.classList.toggle("on")
})
list.addEventListener("click", (event) => {
   if (event.target.nodeName === "BUTTON") {
      btn.innerText = event.target.innerText
      btn.classList.remove("on")
   }
})

let checkIconOn = document.querySelector("#checkIconOn")
let checkIconOnAll = document.querySelector("#checkIconOn")
let checkIconoff = document.querySelector("#checkIconoff")
checkIconOn.style.display = "none"

function toggleIcon1() {
   if (checkIconOn.style.display == "none") {
      checkIconOn.style.display = "block"
      checkIconoff.style.display = "none"
   } else if (checkIconOn.style.display == "block") {
      checkIconOn.style.display = "none"
      checkIconoff.style.display = "block"
   }
}
