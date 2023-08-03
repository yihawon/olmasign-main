let depthArrowBtn = document.querySelector("#depth_arrow_btn"),
   lnbDepthContent = document.querySelector(".lnb_depth_content"),
   $body = document.querySelector("body"),
   menuPopBtn = document.querySelector("#menu_pop_btn"),
   menuPop = document.querySelector("#menu_pop")

depthArrowBtn.addEventListener("click", function (e) {
   e.stopPropagation()
   lnbDepthContent.style.display = "block"
   lnbDepthContent.style.position = "absolute"
   lnbDepthContent.style.zIndex = 999
   lnbDepthContent.style.top = 0
   lnbDepthContent.style.left = "inherit"
   lnbDepthContent.style.right = 0
   lnbDepthContent.style.width = "auto"
   lnbDepthContent.style.height = "100vh"
   lnbDepthContent.style.padding = "10px"
   lnbDepthContent.style.boxShadow = "inherit"
})

$body.addEventListener("click", function () {
   menuPop.style.display = "none"
   lnbDepthContent.style.display = "none"
})
lnbDepthContent.addEventListener("click", function () {
   menuPop.style.display = "none"
})

menuPopBtn.addEventListener("click", function (e) {
   e.stopPropagation()
   menuPop.style.display = "block"
})
menuPop.addEventListener("click", function () {
   menuPop.style.display = "none"
})
