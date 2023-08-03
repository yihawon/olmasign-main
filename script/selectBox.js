const btn1 = document.querySelector(".selectBtn"),
   list1 = document.querySelector(".selectList")
btn1.addEventListener("click", () => {
   btn1.classList.toggle("on")
})
list1.addEventListener("click", (event) => {
   if (event.target.nodeName === "BUTTON") {
      btn1.innerText = event.target.innerText
      btn1.classList.remove("on")
   }
})

const btn2 = document.querySelector(".selectBtn2"),
   list2 = document.querySelector(".selectList2")
btn2.addEventListener("click", () => {
   btn2.classList.toggle("on")
})
list2.addEventListener("click", (event) => {
   if (event.target.nodeName === "BUTTON") {
      btn2.innerHTML = event.target.innerHTML
      btn2.classList.remove("on")
   }
})

const nameLists = document.querySelectorAll(".name_lists li")
const nameListBtn = document.querySelector(".name_lists li button")

console.log(nameListBtn)
for (let i = 0; i < nameLists.length; i++) {
   nameLists[i].addEventListener("click", (event) => {
      if (event.target.nodeName === "BUTTON") {
         btn2.style.color = event.target.style.color
      }
   })
}
