var iFileName = "Ranger - Ronin.js";

RequiredSheetVersion("13");

SourceList["RG:YR"] = {
	name : "Ryoko's Guide to the Yokai Realms", 
	abbreviation : "RG:YR", 
	group : "Homebrew",
	url : "",
	date: "2023/07/28"
};

AddSubClass("ranger", "ronin", { 
		regExpSearch : /ronin/i,
		subname : "Ronin",
		fullname : "Ronin",
		source : [["RG:YR", 1]],
		features : { 
			"subclassfeatures3" : {
				name : "Wandering Magic",
				source : [["RG:YR", 3]],
				minlevel : 3,
				description : desc([
					"You learn an additional spell when you reach certain levels in this class.",
					"Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know."
				]),
				spellcastingExtra : ["expeditious retreat", "blur", "remove curse", "death ward", "legend lore"],
				spellcastingExtraApplyNonconform : true
			},
			"subclassfeature3.1" : {
				name : "Slash Draw",
				source : [["RG:YR", 3]],
				minlevel : 3,				
				description : desc([
					"You have mastered the art of striking with sudden, explosive power at any moment.",
					"The first time each turn that you hit a creature with a melee weapon attack using a weapon you drew that turn, the attack deals an extra 1d6 damage of that weapon’s type.",
					"This extra damage increases to 1d8 when you reach 11th level in this class."
				])
			},
			"subclassfeature3.2" : {
				name : "Masterless",
				source : [["RG:YR", 1]],
				minlevel : 3,
				description : desc([
					"You are a solitary warrior, shackled by no code or authority beyond your own.",
					"Whenever you make a saving throw to avoid or end the charmed condition on yourself, roll a d6 and add the number rolled to the saving throw."
				])
			},
			"subclassfeature7" : {
				name : "Cleaving Parry",
				source : [["RG:YR", 1]],
				minlevel : 7,
				description : desc([
					"When a creature makes a weapon attack against you while you have a stowed melee weapon and a free hand, you can use your reaction to attempt to parry that blow, drawing your stowed weapon as you do so.",
					"Your AC increases by an amount equal to your Dexterity or Strength modifier (your choice) against that attack, and you gain temporary hit points equal to your proficiency bonus + your Wisdom modifier (minimum 1).",
					"After the attack hits or misses, you can then stow that weapon as a part of this reaction"
				]),
				action : [["reaction", ""]]
			},
			"subclassfeature11" : {
				name : "Multi-Weapon Mastery",
				source : ["RG:YR", 3],
				minlevel : 11,			
				description : desc([
					"You have advantage on the first melee weapon attack you make each turn, as well as advantage on the first ranged weapon attack you make each turn.",
					"In addition, being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls."
				])
			},
			"subclassfeature15" : {
				name : "Relentless Onslaught",
				source : ["RG:YR", 3],
				minlevel : 15,
				usages : 3,
				description : desc([
					"The speed and ferocity of your onslaught is legendary.",
					"When you take the Attack action, each time you score a critical hit or reduce a creature to 0 hit points as part of that action, you can make one additional weapon attack.",
					"You can make up to three additional attacks with this feature per turn."
				]),
				action : [["action", ""]]
			},
		}
	}
);

AddSubClass("rangerua", "ronin-ua", { 
	regExpSearch : /ronin/i,
	subname : "Ronin",
	fullname : "Ronin",
	source : [["RG:YR", 1]],
	features : { 
		"subclassfeatures3" : {
			name : "Wandering Magic",
			source : [["RG:YR", 3]],
			minlevel : 3,
			description : desc([
				"You learn an additional spell when you reach certain levels in this class.",
				"Each spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know."
			]),
			spellcastingExtra : ["expeditious retreat", "blur", "remove curse", "death ward", "legend lore"],
			spellcastingExtraApplyNonconform : true
		},
		"subclassfeature3.1" : {
			name : "Slash Draw",
			source : [["RG:YR", 3]],
			minlevel : 3,				
			description : desc([
				"You have mastered the art of striking with sudden, explosive power at any moment.",
				"The first time each turn that you hit a creature with a melee weapon attack using a weapon you drew that turn, the attack deals an extra 1d6 damage of that weapon’s type.",
				"This extra damage increases to 1d8 when you reach 11th level in this class."
			])
		},
		"subclassfeature3.2" : {
			name : "Masterless",
			source : [["RG:YR", 1]],
			minlevel : 3,
			description : desc([
				"You are a solitary warrior, shackled by no code or authority beyond your own.",
				"Whenever you make a saving throw to avoid or end the charmed condition on yourself, roll a d6 and add the number rolled to the saving throw."
			])
		},
		"subclassfeature7" : {
			name : "Cleaving Parry",
			source : [["RG:YR", 1]],
			minlevel : 7,
			description : desc([
				"When a creature makes a weapon attack against you while you have a stowed melee weapon and a free hand, you can use your reaction to attempt to parry that blow, drawing your stowed weapon as you do so.",
				"Your AC increases by an amount equal to your Dexterity or Strength modifier (your choice) against that attack, and you gain temporary hit points equal to your proficiency bonus + your Wisdom modifier (minimum 1).",
				"After the attack hits or misses, you can then stow that weapon as a part of this reaction"
			]),
			action : [["reaction", ""]]
		},
		"subclassfeature11" : {
			name : "Multi-Weapon Mastery",
			source : ["RG:YR", 3],
			minlevel : 11,			
			description : desc([
				"You have advantage on the first melee weapon attack you make each turn, as well as advantage on the first ranged weapon attack you make each turn.",
				"In addition, being within 5 feet of a hostile creature doesn’t impose disadvantage on your ranged attack rolls."
			])
		},
		"subclassfeature15" : {
			name : "Relentless Onslaught",
			source : ["RG:YR", 3],
			minlevel : 15,
			usages : 3,
			description : desc([
				"The speed and ferocity of your onslaught is legendary.",
				"When you take the Attack action, each time you score a critical hit or reduce a creature to 0 hit points as part of that action, you can make one additional weapon attack.",
				"You can make up to three additional attacks with this feature per turn."
			]),
			action : [["action", ""]]
		},
	}
}
);

