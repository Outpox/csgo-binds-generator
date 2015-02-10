var radioList = ["primaryradio", "secondary", "grenade", "other"];
var currentKey = {};


window.onload = function () {
	var selectedkey = document.getElementById("selectedkey");
	var keys = document.querySelectorAll(".keyboard table tbody tr td");
	var textArea = document.getElementById("text-result");
	window.defaultBgColor = keys[0].style.backgroundColor;

	function selectKey(key) {
		if (key.ref.className != "empty") {
			selectedkey.innerText = key.getValue();
		}
	}

	function selectWep(wep) {
		switch (wep.name) {
			case "primaryradio":
				currentKey.primary = wep.value;
				update();
				break;
			case "secondary":
				currentKey.secondary = wep.value;
				update();
				break;
			case "grenade":
				currentKey.addInArray(currentKey.grenade, wep);
				update();
				break;
			case "other":
				currentKey.addInArray(currentKey.other, wep);
				update();
				break;
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
		keys[key].addEventListener('click', function () {
			if (KeyList.contains(this)) {
				currentKey = this;
			}
			else {
				currentKey = new ItemKey(this, true);
			}
			console.log("------------------------------------------------");
			KeyList.list();
			selectKey(currentKey);
		})
	}
//Weapons
	var wep;
	for (var list in radioList) {
		var allRadios = document.getElementsByName(radioList[list]);
		for (var x = 0; x < allRadios.length; x++) {
			allRadios[x].onclick = function () {
				selectWep(this)

			}
		}
	}

	function reset() {
		currentKey = {};
		textArea.innerHTML = "";
		KeyList.length = 0;
	}

	document.getElementById("reset").addEventListener('click', function () {
		reset();
	});

	document.getElementById("copy").addEventListener('click', function () {
		textArea.select();
	});

	function toggleDisplay(div) {
		if (div.style.display != "none") {
			div.style.display = "none";
		}
		else {
			div.style.display = "block";
		}
	}

	document.getElementById("disrifle").addEventListener('click', function () {
		toggleDisplay(document.getElementById("rifles"));
		return false;
	});
	document.getElementById("dissmg").addEventListener('click', function () {
		toggleDisplay(document.getElementById("smgs"));
		return false;
	});
	document.getElementById("disheavy").addEventListener('click', function () {
		toggleDisplay(document.getElementById("heavy"));
		return false;
	});
	document.getElementById("dissecondary").addEventListener('click', function () {
		toggleDisplay(document.getElementById("gun"));
		return false;
	});
	document.getElementById("disgre").addEventListener('click', function () {
		toggleDisplay(document.getElementById("grenades"));
		return false;
	});
	document.getElementById("disother").addEventListener('click', function () {
		toggleDisplay(document.getElementById("equipment"));
		return false;
	});
};