let modalProfileSetBtn = document.querySelector(".profile_set"),
   modalProfileSet = document.querySelector(".sign_draw_wrap"),
   modalProfileSetClose = document.querySelector(".btn_close"),
   uploadbtnCtr = document.querySelector(".uploadbtn_ctr")

modalProfileSetBtn.addEventListener("click", function () {
   modalProfileSet.classList.add("on")
})
uploadbtnCtr.addEventListener("click", function () {
   modalProfileSet.classList.add("on")
   console.log(0)
})
modalProfileSetClose.addEventListener("click", function () {
   modalProfileSet.classList.remove("on")
})

let photoimgsWrap = document.querySelectorAll(".photoimgs_wrap")

function clickHandler() {
   let remove = document.querySelector(".active_border")

   if (remove) {
      remove.classList.remove("active_border")
   }
   this.classList.add("active_border")
}

for (var i = 0; i < photoimgsWrap.length; i++) {
   photoimgsWrap[i].addEventListener("click", clickHandler)
}

let coImgWrap = document.querySelectorAll(".co_img_wrap")

function clickHandler2() {
   console.log(1)
   let remove = document.querySelector(".active_border")

   if (remove) {
      remove.classList.remove("active_border")
   }
   this.classList.add("active_border")
}

for (var i = 0; i < coImgWrap.length; i++) {
   coImgWrap[i].addEventListener("click", clickHandler2)
}
