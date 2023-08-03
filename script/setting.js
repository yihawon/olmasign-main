let signAddPop = document.querySelector(".sign_add_pop")
let stampAddPop = document.querySelector(".stamp_add_pop")

function signPop() {
   signAddPop.style.display = "block"
}

document.querySelector(".add_sign").addEventListener("click", function () {
   signAddPop.classList.add("on")
   console.log(0)
})

document.querySelector(".add_stamp").addEventListener("click", function () {
   stampAddPop.classList.add("on")
})

let toggleSign = document.querySelectorAll(".btn_close")
for (let i = 0; i < toggleSign.length; i++) {
   toggleSign[i].addEventListener("click", function () {
      signAddPop.classList.remove("on")
   })
}

let toggleStamp = document.querySelectorAll(".btn_close2")
for (let i = 0; i < toggleStamp.length; i++) {
   toggleStamp[i].addEventListener("click", function () {
      stampAddPop.classList.remove("on")
   })
}

let tabBtn = document.querySelectorAll(".tab_btn1")
let cont = document.querySelectorAll(".sign_draw_content1")

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

function highLight(num) {
   let highLight = document.querySelector(".signMade")
   const newLeft = tabBtn[num].offsetLeft
   const newWidth = tabBtn[num].offsetWidth
   highLight.style.left = newLeft + "px"
   highLight.style.width = newWidth + "px"
}
contentShow(0)

let tabBtn2 = document.querySelectorAll(".tab_btn2")
let cont2 = document.querySelectorAll(".sign_draw_content2")
function contentShow2(num) {
   cont2.forEach((item, idx) => {
      item.classList.add("active")
   })
   cont2[num].classList.remove("active")
}
tabBtn2.forEach((item, idx) => {
   item.addEventListener("click", () => {
      contentShow2(idx)
      highLight2(idx)
   })
})
function highLight2(num) {
   let highLight = document.querySelector(".signMade2")
   const newLeft = tabBtn2[num].offsetLeft
   const newWidth = tabBtn2[num].offsetWidth
   highLight.style.left = newLeft + "px"
   highLight.style.width = newWidth + "px"
}
contentShow2(0)

signAddPop.querySelector(".tabBtn__1").addEventListener("click", function () {
   signAddPop.querySelector(".tabBtn__1").style.color = "var(--violet_P)"
   signAddPop.querySelector(".tabBtn__2").style.color = "var(--second_06)"
   signAddPop.querySelector(".tabBtn__3").style.color = "var(--second_06)"
   signAddPop.querySelector(".tabBtn__4").style.color = "var(--second_06)"
})
signAddPop.querySelector(".tabBtn__2").addEventListener("click", function () {
   signAddPop.querySelector(".tabBtn__2").style.color = "var(--violet_P)"
   signAddPop.querySelector(".tabBtn__1").style.color = "var(--second_06)"
   signAddPop.querySelector(".tabBtn__3").style.color = "var(--second_06)"
   signAddPop.querySelector(".tabBtn__4").style.color = "var(--second_06)"
})
signAddPop.querySelector(".tabBtn__3").addEventListener("click", function () {
   signAddPop.querySelector(".tabBtn__3").style.color = "var(--violet_P)"
   signAddPop.querySelector(".tabBtn__1").style.color = "var(--second_06)"
   signAddPop.querySelector(".tabBtn__2").style.color = "var(--second_06)"
   signAddPop.querySelector(".tabBtn__4").style.color = "var(--second_06)"
})
signAddPop.querySelector(".tabBtn__4").addEventListener("click", function () {
   signAddPop.querySelector(".tabBtn__4").style.color = "var(--violet_P)"
   signAddPop.querySelector(".tabBtn__1").style.color = "var(--second_06)"
   signAddPop.querySelector(".tabBtn__2").style.color = "var(--second_06)"
   signAddPop.querySelector(".tabBtn__3").style.color = "var(--second_06)"
})

stampAddPop.querySelector(".tabBtn__1").addEventListener("click", function () {
   stampAddPop.querySelector(".tabBtn__1").style.color = "var(--violet_P)"
   stampAddPop.querySelector(".tabBtn__2").style.color = "var(--second_06)"
   stampAddPop.querySelector(".tabBtn__3").style.color = "var(--second_06)"
   stampAddPop.querySelector(".tabBtn__4").style.color = "var(--second_06)"
})
stampAddPop.querySelector(".tabBtn__2").addEventListener("click", function () {
   stampAddPop.querySelector(".tabBtn__2").style.color = "var(--violet_P)"
   stampAddPop.querySelector(".tabBtn__1").style.color = "var(--second_06)"
   stampAddPop.querySelector(".tabBtn__3").style.color = "var(--second_06)"
   stampAddPop.querySelector(".tabBtn__4").style.color = "var(--second_06)"
})
stampAddPop.querySelector(".tabBtn__3").addEventListener("click", function () {
   stampAddPop.querySelector(".tabBtn__3").style.color = "var(--violet_P)"
   stampAddPop.querySelector(".tabBtn__1").style.color = "var(--second_06)"
   stampAddPop.querySelector(".tabBtn__2").style.color = "var(--second_06)"
   stampAddPop.querySelector(".tabBtn__4").style.color = "var(--second_06)"
})
stampAddPop.querySelector(".tabBtn__4").addEventListener("click", function () {
   stampAddPop.querySelector(".tabBtn__4").style.color = "var(--violet_P)"
   stampAddPop.querySelector(".tabBtn__1").style.color = "var(--second_06)"
   stampAddPop.querySelector(".tabBtn__2").style.color = "var(--second_06)"
   stampAddPop.querySelector(".tabBtn__3").style.color = "var(--second_06)"
})

function show() {
   document.querySelector(".item_tabBtn_btn").style.display = "block"
}
function hide() {
   document.querySelector(".item_tabBtn_btn").style.display = "none"
}
document.querySelector(".item_list_wrap").addEventListener("mouseenter", show)
document.querySelector(".item_list_wrap").addEventListener("mouseleave", hide)

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
