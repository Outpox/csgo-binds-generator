var radioList = ["primaryradio", "secondary", "grenade", "other"];
var currentKey = {};


window.onload = function () {
	var selectedkey = document.getElementById("selectedkey");
	var keys = document.querySelectorAll(".keyboard table tbody tr td");
	var textArea = document.getElementById("text-result");
	var defaultBgColor = keys[0].style.backgroundColor;
	var selectedBgColor = "#16a085";
	var output = {};
	output.p = output.s = output.g = output.o = "";

	function selectKey(key) {
		if (key.ref.className != "empty") {

			//if (key.selected) {
			//	key.deSelect()
			//	key.style.backgroundColor = defaultBgColor;
		}
		else {
			//k.select()
			//console.log(k.getString());
			//console.log(k.getValue());
			//console.log(k);
			//deselectAllKey();
			//key.s = true;
			//key.style.backgroundColor = selectedBgColor;
		}
	}

	function selectWep(wep) {
		if (wep.s) {
			wep.s = false;
			wep.checked = false;
			switch (wep.name) {
				case "primaryradio":
					output.p = "";
					break;
				case "secondary":
					output.s = "";
					break;
				case "grenade":
					output.g = "";
					break;
				case "other":
					output.o = "";
					break;
			}
		}
		else {
			wep.s = true;
			wep.checked = true;
			switch (wep.name) {
				case "primaryradio":
					output.p = ' ' + wep.value;
					break;
				case "secondary":
					output.s = ' ' + wep.value;
					break;
				case "grenade":
					output.g = ' ' + wep.value;
					break;
				case "other":
					output.o = ' ' + wep.value;
					break;
			}
		}
	}

	function deselectAllKey() {
		for (var key = 0; key < keys.length; key++) {
			keys[key].s = false;
			keys[key].style.backgroundColor = defaultBgColor;
		}
	}

	function update() {
		textArea.innerHTML = "";
		for (var i = 0; i < KeyList.length; i++) {
			textArea.innerHTML += KeyList[i].getString();
		}
	}

//Keys
	for (var key = 0; key < keys.length; key++) {
		keys[key].onclick = function () {
			if (KeyList.contains(this)) {
				currentKey = this;
			}
			else {
				currentKey = new ItemKey(this, true);
			}
			console.log("------------------------------------------------");
			KeyList.list();
		}
	}
//Weapons
	var wep;
	for (var list in radioList) {
		var allRadios = document.getElementsByName(radioList[list]);
		for (var x = 0; x < allRadios.length; x++) {
			allRadios[x].onclick = function () {
				//console.log(this);
				//console.log(currentKey.grenade);
				switch (this.name)	 {
					case "primaryradio":
						currentKey.primary = this.value;
						update();
						break;
					case "secondary":
						currentKey.secondary = this.value;
						update();
						break;
					case "grenade":
						currentKey.addInArray(currentKey.grenade, this);
						update();
						break;
					case "other":
						currentKey.addInArray(currentKey.other, this);
						update();
						break;
				}
			}
		}
	}
	var btn = document.getElementById("disrifle");
	btn.onclick = function () {
		document.getElementById("rifles").style.display = "none";
		return false;
	};
}