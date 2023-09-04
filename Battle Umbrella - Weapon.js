var iFileName = "Battle Umbrella - Weapon.js";
RequiredSheetVersion("13.0.6");

SourceList["HB"] = {
	name : "Battle Umbrella", 
	abbreviation : "HB", 
	group : "Homebrew",
	url : "https://www.dandwiki.com/wiki/Battle_Umbrella_(5e_Equipment)",
	date: "2023/09/04"
};

WeaponsList["battle umbrella"] = {
    name : "Battle Umbrella",
    source : ["HB", 0],
    regExpSearch : /^(?=.*battle)(?=.*umbrella).*$/i,
    type : "Simple",
    ability : 1,
    abilitytodamage : true,
    damage : [1, 4, "Pierce/Bludgeon"],
    range : "Melee",
    description : "Finesse, light, hidden",
    tooltip : "A weapon with the hidden property is designed to be easily concealed by the holder. If you have proficiency with a hidden weapon you also gain advantage on checks with Dexterity (Sleight of Hand) to hide the weapon. When sheathed, the battle umbrella does bludgeoning damage. When you take out the handle, it is a hidden, short rapier that does piercing damage. You can unsheathe or sheathe the blade as a bonus action.",
    list : "melee",
	weight : 3,
}

