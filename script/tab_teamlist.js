let tabsTeamWrap = document.querySelector(".tabs_team_wrap"),
   tabContentTeam = tabsTeamWrap.querySelector(".tab_content_team"),
   tabContentTeamInvite = tabsTeamWrap.querySelector(".tab_content_team_invite"),
   tabTeamFirst = tabsTeamWrap.querySelector(".tab_team:first-child"),
   tabTeamLast = tabsTeamWrap.querySelector(".tab_team:last-child"),
   tabsTeamInner = document.querySelector(".tabs_team_inner"),
   tabsTeamInnerAfter = window.getComputedStyle(tabsTeamInner, "::after")

console.log(tabsTeamInnerAfter.backgroundColor)

tabContentTeam.classList.add("on")
function tabBtnTeam(elem) {
   if (elem == "member") {
      tabContentTeam.classList.add("on")
      tabContentTeamInvite.classList.remove("on")
      tabsTeamInner.style.setProperty("--tabsTeamInnerAfterMarginLeft", "0")
      tabsTeamInner.style.setProperty("--width", "100px")
      tabsTeamInner.style.flexDirection = "row"
      tabsTeamInner.style.justifyContent = "flex-start"
      tabTeamFirst.style.color = "#000"
      tabTeamLast.style.color = "#aaa"
   } else if (elem == "invite") {
      tabContentTeamInvite.classList.add("on")
      tabContentTeam.classList.remove("on")
      tabsTeamInner.style.setProperty("--tabsTeamInnerAfterMarginLeft", "0")
      tabsTeamInner.style.setProperty("--width", "110px")
      tabsTeamInner.style.flexDirection = "row-reverse"
      tabsTeamInner.style.justifyContent = "flex-end"
      tabTeamFirst.style.color = "#aaa"
      tabTeamLast.style.color = "#000"
   }
}
