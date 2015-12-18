//{"Pistols": "", "Rifles": "", "SMGs": "", "Heavies": "", "Grenades": [], "Equipment": []}

function Loadout() {
    this.Pistol = "";
    this.Primary = "";
    //this.Rifle = "";
    //this.SMG = "";
    //this.Heavy = "";
    this.Grenade = [];
    this.Equipment = [];
}

/**
 * Set the weapon of a type to this bind
 * @param weapon
 * @param type
 */
Loadout.prototype.setWeapon = function (weapon, type) {
    switch (type) {
        case "Pistols":
            this.Pistol = weapon;
            break;
        case "Rifles":
            this.Primary = weapon;
            break;
        case "SMGs":
            this.Primary = weapon;
            break;
        case "Heavies":
            this.Primary = weapon;
            break;
        case "Grenades":
            this.Grenade.push(weapon);
            break;
        case "Equipments":
            this.Equipment.push(weapon);
            break;
    }
};

/**
 * Remove the weapon from this bind
 * @param weapon
 * @param type
 */
Loadout.prototype.removeWeapon = function (weapon, type) {
    switch (type) {
        case "Pistols":
            this.setWeapon("", type);
            break;
        case "Rifles":
            this.setWeapon("", type);
            break;
        case "SMGs":
            this.setWeapon("", type);
            break;
        case "Heavies":
            this.setWeapon("", type);
            break;
        case "Grenades":
            this.removeOtherWeapon(weapon, type);
            break;
        case "Equipments":
            this.removeOtherWeapon(weapon, type);
            break;
    }
};

/**
 * Same as removeWeapon
 * @param weapon
 * @param type
 * @returns {boolean}
 */
Loadout.prototype.removeOtherWeapon = function (weapon, type) {
    if (type === "Grenades") {
        for (var i in this.Grenade) {
            if (this.Grenade[i] === weapon) {
                this.Grenade.splice(i, 1);
            }
        }
        return false;
    }
    if (type === "Equipments") {
        for (var j in this.Equipment) {
            if (this.Equipment[j] === weapon) {
                this.Equipment.splice(j, 1);
            }
        }
    }
};

/**
 * Returns true if the loadout is empty (aka not a single weapon added)
 * @returns {boolean}
 */
Loadout.prototype.isEmpty = function () {
    //return (this.Pistol.length === 0 && this.Primary.length === 0 && this.SMG.length === 0 && this.Heavy.length === 0 && this.Grenade.length === 0 && this.Equipment.length === 0);
    return (this.Pistol.length === 0 && this.Primary.length === 0 && this.Grenade.length === 0 && this.Equipment.length === 0);
};

/**
 * Returns true if the given weapon is already attributed to this bind
 * @param weapon
 * @param type
 * @returns {boolean}
 */
Loadout.prototype.isSelected = function (weapon, type) {
    switch (type) {
        case "Pistols":
            return this.Pistol === weapon;
        case "Rifles":
            return this.Primary === weapon;
        case "SMGs":
            return this.Primary === weapon;
        case "Heavies":
            return this.Primary === weapon;
        case "Grenades":
            return this.isOtherSelected(weapon, type);
        case "Equipments":
            return this.isOtherSelected(weapon, type);
        default:
            return false;
    }
};

/**
 * Same as isSelected but for the Grenade and the Equipment
 * @param weapon
 * @param type
 * @returns {boolean}
 */
Loadout.prototype.isOtherSelected = function (weapon, type) {
    if (type === "Grenades") {
        for (var i in this.Grenade) {
            if (this.Grenade[i] === weapon) {
                return true;
            }
        }
        return false;
    }
    if (type === "Equipments") {
        for (var j in this.Equipment) {
            if (this.Equipment[j] === weapon) {
                return true;
            }
        }
        return false;
    }
    return false;
};

/**
 * This is where the loadout string is generated
 * @param tool
 * @returns {*}
 */
Loadout.prototype.toString = function (tool) {
    if (this.Pistol !== "" || this.Primary !== "" || this.SMG !== "" || this.Heavy !== "" || this.Grenade.length !== 0 || this.Equipment.length !== 0) {
        var ret = "\"" + tool + " ";
        if (this.Pistol !== "") {
            ret += (this.Pistol.equivalent !== null) ? this.Pistol.value + "; " + this.Pistol.equivalent + "; " : this.Pistol.value + "; ";
        }
        if (this.Primary !== "") {
            ret += (this.Primary.equivalent !== null) ? this.Primary.value + "; " + this.Primary.equivalent + "; " : this.Primary.value + "; ";
        }
        //if (this.SMG!== "") {
        //    ret += (this.SMG.equivalent !== null) ? this.SMG.value + "; " + this.SMG.equivalent + "; " : this.SMG.value + "; ";
        //}
        //if (this.Heavy!== "") {
        //    ret += (this.Heavy.equivalent !== null) ? this.Heavy.value + "; " + this.Heavy.equivalent + "; " : this.Heavy.value + "; ";
        //}
        if (this.Grenade.length > 0) {
            for (var i in this.Grenade) {
                ret += this.Grenade[i].value + "; ";
            }
        }
        if (this.Equipment.length > 0) {
            for (var j in this.Equipment) {
                ret += this.Equipment[j].value + "; ";
            }
        }
        return ret + "\"";
    } else {
        return "";
    }
};