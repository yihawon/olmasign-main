const warning = document.querySelector("#warning")
const reason = document.querySelector("#reason")
reason.style.display = "none"
const confirm = document.querySelector("#confirm")
confirm.style.display = "none"
const done = document.querySelector("#done")
done.style.display = "none"

const warningBtn = document.querySelector("#warning_btn")
warningBtn.addEventListener("click", function () {
   warning.style.display = "none"
   reason.style.display = "block"
})
const reasonBtn = document.querySelector("#reason_btn")
reasonBtn.addEventListener("click", function () {
   reason.style.display = "none"
   confirm.style.display = "block"
})
const doneBtn = document.querySelector("#done_btn")
doneBtn.addEventListener("click", function () {
   confirm.style.display = "none"
   done.style.display = "block"
})
