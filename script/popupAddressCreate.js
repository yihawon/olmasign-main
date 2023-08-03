for (let li of tree.querySelectorAll("li")) {
   let span = document.createElement("span")
   li.prepend(span)
   span.append(span.nextSibling)
}

tree.onclick = function (event) {
   if (event.target.tagName != "SPAN") {
      return
   }

   let childrenContainer = event.target.parentNode.querySelector("ul")
   if (!childrenContainer) return

   childrenContainer.hidden = !childrenContainer.hidden
}

function arrowToggle_1() {
   let toggleArrow_1 = document.querySelector(".toggleArrow_1")
   toggleArrow_1.classList.toggle("on")
}
function arrowToggle_2() {
   toggleArrow_2 = document.querySelector(".toggleArrow_2")
   toggleArrow_2.classList.toggle("on")
}

const moreBtn = document.querySelector(".moreBtn")
const moreBtnPopWrap = document.querySelector(".moreBtn_pop_wrap")
moreBtnPopWrap.style.display = "none"
moreBtn.addEventListener("click", function (e) {
   e.stopPropagation()
   moreBtnPopWrap.style.display = "block"
})
document.querySelector("body").addEventListener("click", function () {
   moreBtnPopWrap.style.display = "none"
})

function createDIV() {
   document.querySelector(".create_div").insertAdjacentHTML(
      "afterend",
      `<section class="addinput flx alc gap10">
         <div class="flex adrs_m_inp gap10">
            <input type="text" placeholder="홍길동" />
            <input type="text" placeholder="ex@mail.com" />
         </div>
         <div class="flx adrs_m_inp gap10">
            <input type="text" placeholder="010-" />
            <article class="add_team_btn_wrap" style="width: 100%">
               <span class="add_team_btn">1팀</span>
            </article>
         </div>
         <div class="close_icon"><img src="../../imgs/ic_18_close.svg" alt="ic_18_close.svg" /></div>
      </section>`
   )
   let closeIcon = document.querySelectorAll(".close_icon")
   for (let i = 0; i < closeIcon.length; i++) {
      closeIcon[i].addEventListener("click", function () {
         this.parentNode.remove()
      })
   }
}

const popDefault = document.querySelector(".popup_wrap")

document.querySelector(".popup_close_btn").addEventListener("click", function () {
   popDefault.classList.remove("on")
})
document.querySelector(".addBtn").addEventListener("click", function () {
   popDefault.classList.add("on")
})

document.querySelector(".add_sign").addEventListener("click", function () {
   document.querySelector(".sign_draw_wrap").classList.add("on")
   document.querySelector(".sign_draw_wrap").style.zIndex = "9999"
   console.log(this)
})

function show() {
   document.querySelector(".item_tabBtn_btn").style.display = "block"
}
function hide() {
   document.querySelector(".item_tabBtn_btn").style.display = "none"
}

document.querySelector(".btn_close").addEventListener("click", function () {
   document.querySelector(".sign_draw_wrap").classList.remove("on")
   document.querySelector(".sign_draw_wrap").style.zIndex = "-1"
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
