let moreview = document.querySelector(".my_templates > li > ul > li > ul > li > img")
let tempLis = document.querySelectorAll(".my_templates > li > ul > li > ul > li")

for (let li of treelnb.querySelectorAll("li")) {
   let span = document.createElement("span")
   li.prepend(span)
   span.append(span.nextSibling)
}

treelnb.onclick = function (event) {
   if (event.target.tagName != "SPAN") {
      return
   }

   let childrenContainer = event.target.parentNode.querySelector("ul")
   if (!childrenContainer) return

   childrenContainer.hidden = !childrenContainer.hidden
}
