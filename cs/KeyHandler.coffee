keyList = {}
class ItemKey
  constructor: (@ref, @selected = false, @primary = "", @secondary = "", @grenade = [], @other = []) ->
    if selected
      ref.classList.add("savedKey")

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
        grenadeS += g + " "
    if this.other.length > 0
      for o in this.other
        otherS += o + " "
    return "bind " + "\"" + this.getValue() + "\" \"" + this.primary + this.secondary + grenadeS + otherS + "\"&#10;"
    # &#10; = new line

  select: ->
    this.selected = true
    this.ref.classList.add("savedKey")

  deSelect: ->
    this.selected = false
    this.ref.classList.remove("savedKey")

window.itemKey = ItemKey
window.keyList = keyList