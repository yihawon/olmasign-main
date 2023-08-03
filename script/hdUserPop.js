const userPop = document.querySelector(".userPop")
const usrIcBtn = document.querySelector(".usr_ic_btn")
userPop.onclick = function (event) {
   event.stopPropagation()
}

function userPopHandler(event) {
   const userPop = document.querySelector(".userPop")
   event.preventDefault()
   event.stopPropagation()
   userPop.classList.add("on")
   console.log(0)
   const $body = document.querySelector("body")
   $body.addEventListener("click", function () {
      userPop.classList.remove("on")
   })
}
