let tree1 = document.querySelectorAll(".tree_1depth")
let tree2 = document.querySelectorAll(".tree_2depth")

tree1.forEach((element) => {
   console.log(element.nextElementSibling)
   element.addEventListener("click", function () {
      element.nextElementSibling.classList.toggle("on")
   })
})
tree2.forEach((element) => {
   console.log(element.firstElementChild)
   element.addEventListener("click", function () {
      element.firstElementChild.classList.toggle("on")
   })
})
