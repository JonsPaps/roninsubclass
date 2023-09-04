var iFileName = "Wakizashi - Weapon.js";
RequiredSheetVersion("13.0.6");

SourceList["HB"] = {
	name : "Wakizashi", 
	abbreviation : "HB", 
	group : "Homebrew",
	url : "https://www.dandwiki.com/wiki/Wakizashi_(5e_Equipment)",
	date: "2023/09/04"
};

WeaponsList["wakizashi"] = {
    name : "Wakizashi",
    source : ["HB", 0],
    regExpSearch : /Wakizashi/i,
    type : "Simple",
    ability : 1,
    abilitytodamage : true,
    damage : [1, 6, "Slashing"],
    range : "Melee",
    description : "Finesse, Versatile(1d8)",
    tooltip : "Similar in shape to other curved, single-bladed swords, wakazashi range between slightly shorter than a katana, referred to as an ō-wakazashi, to slightly longer than a tanto, referred to as a kō-wakazashi. They were primarily wielded alongside a katana as a status symbol to differentiate an average katana-wielding nobody with a samurai",
    list : "melee",
	weight : 1,
}

