window.onload = ->
  selectedkey = document.getElementById("selectedkey")
  allKey = document.querySelectorAll(".keyboard table tbody tr td")
  textArea = document.getElementById("text-result")
  defaultBgColor = allKey[0].style.backgroundColor
  selectedBgColor = "#16a085"
  radioList = ["primaryradio", "secondary", "grenade", "other"]


  for l in radioList
    allRadios = document.getElementsByName(radioList[l])
    for r in allRadios
        allRadios[r].onclick = ->
          selectWep(this)

  x = 0

  while x < allRadios.length
    allRadios[x].addEventListener "click", (e) =>
      console.log(this)
    x++

#  console.log(document.getElementsByClassName("kb_up")[0].innerText)