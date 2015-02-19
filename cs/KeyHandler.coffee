KeyList = []
KeyList.contains = (ref) ->
  x = 0;
  while x < KeyList.length
    if KeyList[x].ref == ref
      return true
    else
      x++
  return false

KeyList.list = ->
  y = 0
  while y < KeyList.length
    console.log(KeyList[y])
    y++

KeyList.get = (ref) ->
  x = 0;
  while x < KeyList.length
    if KeyList[x].ref == ref
      return KeyList[x]
    else
      x++


class ItemKey
  constructor: (@ref, @selected = false, @primary = "", @secondary = "", @grenade = [], @other = [], @itemsRef = []) ->
    if !KeyList.contains(ref)
      KeyList.push(this)

  getValue: ->
    if this.ref.firstElementChild
      return this.ref.firstElementChild.innerHTML
    else
      return this.ref.innerHTML

  getString: ->
    grenadeS = ""
    otherS = ""
    if this.grenade.length > 0
      for g in this.grenade
        grenadeS += " " + g.value
    if this.other.length > 0
      for o in this.other
        otherS += " " + o.value
    if this.primary + this.secondary + grenadeS + otherS != ""
      return "bind " + "\"" + this.getValue() + "\" \"" + this.primary + this.secondary + grenadeS + otherS + "\"&#10;"
    else
      return false
    # &#10; = new line

  containsArr: (arr, ref) ->
    x = 0;
    while x < arr.length
      if arr[x].id == ref.id
        return true
      else
        x++
    return false

  addInArray: (arr, ref) ->
    if !this.containsArr(arr, ref)
      arr.push(ref)
    else
      y = arr.length
      while y--
        if arr[y] == ref
          arr.splice(y, 1)

  focus: ->
    console.log("focus")
    x = 0;
    while x < KeyList.length
      console.log(KeyList[x])
      KeyList[x].ref.classList.remove("focus")
      x++
    this.ref.classList.add("focus")




window.ItemKey = ItemKey
window.KeyList = KeyList