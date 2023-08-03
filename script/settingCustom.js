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

let pick = document.getElementById("pick")
let hexCode = document.getElementById("hex_code")

pick.addEventListener(
   "input",
   function () {
      let code = pick.value
      hexCode.textContent = code
      hexCode.setAttribute("href", code)
   },
   false
)
