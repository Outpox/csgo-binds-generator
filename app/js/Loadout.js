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