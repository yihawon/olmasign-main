let depthArrowBtn = document.querySelector("#depth_arrow_btn"),
   lnbDepthContent = document.querySelector(".lnb_depth_content"),
   bgClose = document.querySelector("body"),
   menuPopBtn = document.querySelector("#menu_pop_btn"),
   menuPop = document.querySelector("#menu_pop")

depthArrowBtn.addEventListener("click", function (e) {
   e.stopPropagation()
   lnbDepthContent.style.display = "block"
})

bgClose.addEventListener("click", function () {
   lnbDepthContent.style.display = "none"
})

menuPopBtn.addEventListener("click", function (e) {
   e.stopPropagation()
   menuPop.style.display = "block"
})
menuPop.addEventListener("click", function () {
   menuPop.style.display = "none"
})
