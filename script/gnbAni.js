let gnbMenu = document.querySelector(".gnb_menu"),
   gnbBtn1 = document.querySelector(".gnbBtn1"),
   gnbBtn2 = document.querySelector(".gnbBtn2"),
   gnbBtn3 = document.querySelector(".gnbBtn3"),
   gnbMenuAfter = window.getComputedStyle(gnbMenu, "::after"),
   btnGnb1 = document.querySelector(".btnGnb1"),
   btnGnb2 = document.querySelectorAll(".btnGnb2"),
   btnGnb3 = document.querySelectorAll(".btnGnb3")
function gnbSelect(elem) {
   if (elem == "Contract") {
      gnbMenu.style.setProperty("--gnbBtnAfterMarginLeft", "0")
      gnbBtn1.style.color = "#099a96"
      gnbBtn2.style.color = "#000"
      gnbBtn3.style.color = "#000"
      btnGnb1.classList.remove("btnGnb1")
      for (let i = 0; i < btnGnb2.length; i++) {
         btnGnb2[i].classList.add("btnGnb2")
      }
      for (let i = 0; i < btnGnb3.length; i++) {
         btnGnb3[i].classList.add("btnGnb3")
      }
   } else if (elem == "form") {
      gnbMenu.style.setProperty("--gnbBtnAfterMarginLeft", "120px")
      gnbBtn1.style.color = "#000"
      gnbBtn2.style.color = "#099a96"
      gnbBtn3.style.color = "#000"
      btnGnb1.classList.add("btnGnb1")

      for (let i = 0; i < btnGnb2.length; i++) {
         btnGnb2[i].classList.remove("btnGnb2")
      }
      for (let i = 0; i < btnGnb3.length; i++) {
         btnGnb3[i].classList.add("btnGnb3")
      }
   } else if (elem == "set") {
      gnbMenu.style.setProperty("--gnbBtnAfterMarginLeft", "240px")
      gnbBtn1.style.color = "#000"
      gnbBtn2.style.color = "#000"
      gnbBtn3.style.color = "#099a96"
      btnGnb1.classList.add("btnGnb1")
      for (let i = 0; i < btnGnb2.length; i++) {
         btnGnb2[i].classList.add("btnGnb2")
      }
      for (let i = 0; i < btnGnb3.length; i++) {
         btnGnb3[i].classList.remove("btnGnb3")
      }
   }
}
