let modalWelcome = document.querySelector(".modal_welcome")
let modalplus = document.querySelector(".modalplus")

function Modalpop(elem) {
   modalWelcome.classList.add("on")
   if (elem == "subscription") {
      let subscriptionDoneWrap = document.querySelector(".subscription_done_wrap")
      console.log(subscriptionDoneWrap)
      modalWelcome.classList.remove("on")
      subscriptionDoneWrap.classList.add("on")
   } else if (elem == "temaSelect") {
      modalWelcome.classList.add("on")
   }
}
function closeModal(elem) {
   modalWelcome.classList.remove("on")
   modalplus.classList.remove("on")
   if (elem == "subscription") {
      let subscriptionDoneWrap = document.querySelector(".subscription_done_wrap")
      subscriptionDoneWrap.classList.remove("on")
   } else if (elem == "payclose") {
      const payMethodPop = document.querySelector(".pay_method_pop")
      payMethodPop.classList.remove("on")
   }
}

document.querySelector(".closeX").addEventListener("click", function () {
   modalWelcome.style.display = "none"
})

document.querySelector(".modal_welcome_contain").addEventListener(
   "click",
   function (event) {
      event.stopPropagation()
   },
   true
)
