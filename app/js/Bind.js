var idBind = 0;
var bindsArray = [];

function Bind(key, loadout, tool) {
	this.id = idBind++;
	this.key = key;
	this.loadout = loadout || {"pistol": "", "rifle": "", "smg": "", "heavy": "", "grenades": [], "equipment": []};
	this.tool = tool || "too";
	this.saveBind();
}

Bind.prototype.saveBind = function () {
	if (!this.existBind()) {
		bindsArray.push(this);
	}
};

Bind.prototype.removeBind = function () {
	for (var i = 0; i < bindsArray.length; i++) {
		if (this.id === bindsArray[i].id) {
			bindsArray.splice(i, 1);
		}
	}
};

Bind.prototype.existBind = function () {
	for (var i = 0; i < bindsArray.length; i++) {
		if (this.id === bindsArray[i].id) {
			return true;
		}
	}
	return false;
};

function getBindByKey(key) {

}