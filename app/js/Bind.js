var idBind = 0;
var bindsArray = [];

function Bind(key, loadout, tool) {
	this.id = idBind++;
	this.key = key || undefined;
	this.loadout = loadout || new Loadout();
	this.tool = tool || "buy";
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

Bind.prototype.setKey = function (key) {
	this.key = key;
};

function getBindByKey(key) {

}