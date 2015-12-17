//{"Pistols": "", "Rifles": "", "SMGs": "", "Heavies": "", "Grenades": [], "Equipment": []}

function Loadout() {
    this.Pistol = "";
    this.Rifle = "";
    this.SMG = "";
    this.Heavy = "";
    this.Grenade = [];
    this.Equipment = [];
}

Loadout.prototype.setWeapon = function (weapon, type) {
    switch (type) {
        case "Pistols":
            this.Pistol = weapon;
            break;
        case "Rifles":
            this.Rifle = weapon;
            break;
        case "SMGs":
            this.SMG = weapon;
            break;
        case "Heavies":
            this.Heavy = weapon;
            break;
        case "Grenades":
            this.Grenade.push(weapon);
            break;
        case "Equipments":
            this.Equipment.push(weapon);
            break;
    }
};

Loadout.prototype.isEmpty = function () {
    return (this.Pistol.length === 0 && this.Rifle.length === 0 && this.SMG.length === 0 && this.Heavy.length === 0 && this.Grenade.length === 0 && this.Equipment.length === 0);
};

Loadout.prototype.isSelected = function (weapon, type) {
    switch (type) {
        case "Pistols":
            return this.Pistol === weapon;
        case "Rifles":
            return this.Rifle === weapon;
        case "SMGs":
            return this.SMG === weapon;
        case "Heavies":
            return this.Heavy === weapon;
        case "Grenades":
            break;
        case "Equipments":
            break;
        default:
            return false;
    }

};

Loadout.prototype.toString = function (tool) {
    if (this.Pistol !== "" || this.Rifle !== "" || this.SMG !== "" || this.Heavy !== "" || this.Grenade.length !== 0 || this.Equipment.length !== 0){
        var ret = "\"" + tool + " ";
        if (this.Pistol !== "") {
            ret += (this.Pistol.equivalent !== null) ? this.Pistol.value + "; " + this.Pistol.equivalent + "; " : this.Pistol.value + "; ";
        }
        if (this.Rifle !== "") {
            ret += (this.Rifle.equivalent !== null) ? this.Rifle.value + "; " + this.Rifle.equivalent + "; " : this.Rifle.value + "; ";
        }
        if (this.SMG!== "") {
            ret += (this.SMG.equivalent !== null) ? this.SMG.value + "; " + this.SMG.equivalent + "; " : this.SMG.value + "; ";
        }
        if (this.Heavy!== "") {
            ret += (this.Heavy.equivalent !== null) ? this.Heavy.value + "; " + this.Heavy.equivalent + "; " : this.Heavy.value + "; ";
        }
        return ret + "\"";
    } else {
        return "";
    }
};