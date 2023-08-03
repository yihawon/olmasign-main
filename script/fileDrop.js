;(function () {
   var $file = document.getElementById("file")
   var dropZone = document.querySelector(".drop-zone")

   var toggleClass = function (className) {
      console.log("current event: " + className)

      var list = ["dragenter", "dragleave", "dragover", "drop"]

      for (var i = 0; i < list.length; i++) {
         if (className === list[i]) {
            dropZone.classList.add("drop-zone-" + list[i])
         } else {
            dropZone.classList.remove("drop-zone-" + list[i])
         }
      }
   }

   var showFiles = function (files) {
      dropZone.innerHTML = ""
      for (var i = 0, len = files.length; i < len; i++) {
         dropZone.innerHTML += "<p>" + files[i].name + "</p>"
      }
   }

   var selectFile = function (files) {
      $file.files = files
      showFiles($file.files)
   }

   $file.addEventListener("change", function (e) {
      showFiles(e.target.files)
   })

   dropZone.addEventListener("dragenter", function (e) {
      e.stopPropagation()
      e.preventDefault()

      toggleClass("dragenter")
   })

   dropZone.addEventListener("dragleave", function (e) {
      e.stopPropagation()
      e.preventDefault()

      toggleClass("dragleave")
   })

   dropZone.addEventListener("dragover", function (e) {
      e.stopPropagation()
      e.preventDefault()

      toggleClass("dragover")
   })

   dropZone.addEventListener("drop", function (e) {
      e.preventDefault()

      toggleClass("drop")

      var files = e.dataTransfer && e.dataTransfer.files
      console.log(files)

      if (files != null) {
         if (files.length < 1) {
            alert("폴더 업로드 불가")
            return
         }
         selectFile(files)
      } else {
         alert("ERROR")
      }
   })
})()
