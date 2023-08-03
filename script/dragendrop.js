;(() => {
   const $ = (select) => document.querySelectorAll(select)
   const draggables = $(".draggable")
   const dd_contains = $(".dd_contain")

   draggables.forEach((el) => {
      el.addEventListener("dragstart", () => {
         el.classList.add("dragging")
      })

      el.addEventListener("dragend", () => {
         el.classList.remove("dragging")
      })
   })

   function getDragAfterElement(dd_contain, y) {
      const draggableElements = [...dd_contain.querySelectorAll(".draggable:not(.dragging)")]

      return draggableElements.reduce(
         (closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            if (offset < 0 && offset > closest.offset) {
               return { offset: offset, element: child }
            } else {
               return closest
            }
         },
         { offset: Number.NEGATIVE_INFINITY }
      ).element
   }

   dd_contains.forEach((dd_contain) => {
      dd_contain.addEventListener("dragover", (e) => {
         e.preventDefault()
         const afterElement = getDragAfterElement(dd_contain, e.clientY)
         const draggable = document.querySelector(".dragging")

         dd_contain.insertBefore(draggable, afterElement)
      })
   })
})()
