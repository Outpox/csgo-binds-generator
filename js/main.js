var radioList = ["primaryradio", "secondary", "grenade", "other"];
var currentKey = {};
var BGCUSEDKEY = "#16a085";


window.onload = function () {
    var selectedkey = document.getElementById("selectedkey");
    var keys = document.querySelectorAll(".keyboard table tbody tr td");
    var textArea = document.getElementById("text-result");
    window.defaultBgColor = keys[0].style.backgroundColor;

    function selectKey(key) {
        selectedkey.innerText = key.getValue();
        deselectAllKey();
        deselectAllWep();
        key.ref.style.backgroundColor = "darkgreen";
    }

    function selectWep(wep) {
        if (typeof currentKey.primary === "undefined")
            return false;
        switch (wep.name) {
            case "primaryradio":
                currentKey.itemsRef["primary"] = wep;
                currentKey.primary = wep.value;
                update();
                break;
            case "secondary":
                currentKey.itemsRef["secondary"] = wep;
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

    function showUsedKey() {
        for (var i = 0; i < KeyList.length; i++) {
            if (KeyList[i].getString() != false) {
                KeyList[i].ref.style.backgroundColor = BGCUSEDKEY;
            }
        }
    }

    function deselectAllKey() {
        for (var key = 0; key < keys.length; key++) {
            keys[key].s = false;
            keys[key].style.backgroundColor = defaultBgColor;
        }
        showUsedKey()
    }

    function deselectAllWep() {
        for (var radio in radioList) {
            var ele = document.getElementsByName(radioList[radio]);
            for (var i = 0; i < ele.length; i++)
                ele[i].checked = false;
        }
        if (currentKey.itemsRef != undefined) {
            if (currentKey.itemsRef["primary"] != undefined)
                currentKey.itemsRef["primary"].checked = true;
            if (currentKey.itemsRef["secondary"] != undefined)
                currentKey.itemsRef["secondary"].checked = true;
        }
        if (currentKey.grenade != undefined) {
            for (var g in currentKey.grenade) {
                currentKey.grenade[g].checked = true;
            }
        }
        if (currentKey.other != undefined) {
            for (var o in currentKey.other) {
                currentKey.other[o].checked = true;
            }
        }
    }

    function update() {
        textArea.innerHTML = "";
        for (var i = 0; i < KeyList.length; i++) {
            if (KeyList[i].getString() != false)
                textArea.innerHTML += KeyList[i].getString();
        }
    }

//Keys
    for (var key = 0; key < keys.length; key++) {
        if (keys[key].className != "empty") {
            keys[key].addEventListener('click', function () {
                if (KeyList.contains(this)) {
                    currentKey = KeyList.get(this);
                }
                else {
                    currentKey = new ItemKey(this, true);
                }
                //console.log("------------------------------------------------");
                //KeyList.list();
                selectKey(currentKey);
            })
        }
    }
//Weapons
    var wep;
    for (var list in radioList) {
        var allRadios = document.getElementsByName(radioList[list]);
        for (var x = 0; x < allRadios.length; x++) {
            allRadios[x].addEventListener('click', function () {
                selectWep(this);
            })
        }
    }

    function reset() {
        currentKey = {};
        textArea.innerHTML = "";
        KeyList.length = 0;
        selectedkey.innerText = "";
        deselectAllKey();
        deselectAllWep();
    }

    function resetKey(key) {
        currentKey = {};
        KeyList.removeKey(key);
        update();
        deselectAllWep();
        deselectAllKey();
    }

    document.getElementById("resetkey").addEventListener('click', function () {
        resetKey(currentKey)
    });

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

    document.getElementById("disrifle").addEventListener('click', function (e) {
        toggleDisplay(document.getElementById("rifles"));
        e.preventDefault();
        return false;
    });
    document.getElementById("dissmg").addEventListener('click', function (e) {
        toggleDisplay(document.getElementById("smgs"));
        e.preventDefault();
        return false;
    });
    document.getElementById("disheavy").addEventListener('click', function (e) {
        toggleDisplay(document.getElementById("heavy"));
        e.preventDefault();
        return false;
    });
    document.getElementById("dissecondary").addEventListener('click', function (e) {
        toggleDisplay(document.getElementById("gun"));
        e.preventDefault();
        return false;
    });
    document.getElementById("disgre").addEventListener('click', function (e) {
        toggleDisplay(document.getElementById("grenades"));
        e.preventDefault();
        return false;
    });
    document.getElementById("disother").addEventListener('click', function (e) {
        toggleDisplay(document.getElementById("equipment"));
        e.preventDefault();
        return false;
    });
};