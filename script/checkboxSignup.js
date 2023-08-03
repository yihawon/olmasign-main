let modalWelcome = document.querySelector(".modal_welcome")

function Modalpop() {
   modalWelcome.classList.add("on")
}
function closeModal() {
   modalWelcome.classList.remove("on")
}
document.querySelector(".modal_welcome_contain").addEventListener(
   "click",
   function (event) {
      event.stopPropagation()
   },
   true
)
