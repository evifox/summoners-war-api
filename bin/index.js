"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("Attribute", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Attribute;
    (function (Attribute) {
        Attribute[Attribute["Water"] = 1] = "Water";
        Attribute[Attribute["Fire"] = 2] = "Fire";
        Attribute[Attribute["Wind"] = 3] = "Wind";
        Attribute[Attribute["Light"] = 4] = "Light";
        Attribute[Attribute["Dark"] = 5] = "Dark";
    })(Attribute || (Attribute = {}));
    exports.default = Attribute;
});
define("Command", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Command;
    (function (Command) {
        Command["guestLogin"] = "GuestLogin";
        Command["battleScenarioStart"] = "BattleScenarioStart";
        Command["battleScenarioResult"] = "BattleScenarioResult";
        Command["updateAchievement"] = "UpdateAchievement";
    })(Command || (Command = {}));
    exports.default = Command;
});
define("Country", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Country;
    (function (Country) {
        Country["ru"] = "RU";
    })(Country || (Country = {}));
    exports.default = Country;
});
define("CraftMaterial", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CraftMaterial;
    (function (CraftMaterial) {
        CraftMaterial[CraftMaterial["HardWood"] = 1001] = "HardWood";
        CraftMaterial[CraftMaterial["ToughLeather"] = 1002] = "ToughLeather";
        CraftMaterial[CraftMaterial["SolidRock"] = 1003] = "SolidRock";
        CraftMaterial[CraftMaterial["SolidIronOre"] = 1004] = "SolidIronOre";
        CraftMaterial[CraftMaterial["ShiningMithril"] = 1005] = "ShiningMithril";
        CraftMaterial[CraftMaterial["ThickCloth"] = 1006] = "ThickCloth";
        CraftMaterial[CraftMaterial["RunePiece"] = 2001] = "RunePiece";
        CraftMaterial[CraftMaterial["MagicDust"] = 3001] = "MagicDust";
        CraftMaterial[CraftMaterial["SymbolOfHarmony"] = 4001] = "SymbolOfHarmony";
        CraftMaterial[CraftMaterial["SymbolOfTranscendence"] = 4002] = "SymbolOfTranscendence";
        CraftMaterial[CraftMaterial["SymbolOfChaos"] = 4003] = "SymbolOfChaos";
        CraftMaterial[CraftMaterial["FrozenWaterCrystal"] = 5001] = "FrozenWaterCrystal";
        CraftMaterial[CraftMaterial["FlamingFireCrystal"] = 5002] = "FlamingFireCrystal";
        CraftMaterial[CraftMaterial["WhirlingWingCrystal"] = 5003] = "WhirlingWingCrystal";
        CraftMaterial[CraftMaterial["ShinyLightCrystal"] = 5004] = "ShinyLightCrystal";
        CraftMaterial[CraftMaterial["PitchBlackDarkCrystal"] = 5005] = "PitchBlackDarkCrystal";
        CraftMaterial[CraftMaterial["CondensedMagicCrystal"] = 6001] = "CondensedMagicCrystal";
        CraftMaterial[CraftMaterial["PureMagicCrystal"] = 7001] = "PureMagicCrystal";
    })(CraftMaterial || (CraftMaterial = {}));
    exports.default = CraftMaterial;
});
define("Difficulty", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Difficulty;
    (function (Difficulty) {
        Difficulty[Difficulty["Normal"] = 1] = "Normal";
        Difficulty[Difficulty["Hard"] = 2] = "Hard";
        Difficulty[Difficulty["Hell"] = 3] = "Hell";
    })(Difficulty || (Difficulty = {}));
    exports.default = Difficulty;
});
define("Dungeon", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Dungeon;
    (function (Dungeon) {
        Dungeon[Dungeon["HallOfDark"] = 1001] = "HallOfDark";
        Dungeon[Dungeon["HallOfFire"] = 2001] = "HallOfFire";
        Dungeon[Dungeon["HallOfWater"] = 3001] = "HallOfWater";
        Dungeon[Dungeon["HallOfWind"] = 4001] = "HallOfWind";
        Dungeon[Dungeon["HallOfMagic"] = 5001] = "HallOfMagic";
        Dungeon[Dungeon["Necropolis"] = 6001] = "Necropolis";
        Dungeon[Dungeon["HallOfLight"] = 7001] = "HallOfLight";
        Dungeon[Dungeon["GiantsKeep"] = 8001] = "GiantsKeep";
        Dungeon[Dungeon["DragonsLair"] = 9001] = "DragonsLair";
    })(Dungeon || (Dungeon = {}));
    exports.default = Dungeon;
});
define("EssenceAttribute", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EssenceAttribute;
    (function (EssenceAttribute) {
        EssenceAttribute[EssenceAttribute["Water"] = 1] = "Water";
        EssenceAttribute[EssenceAttribute["Fire"] = 2] = "Fire";
        EssenceAttribute[EssenceAttribute["Wind"] = 3] = "Wind";
        EssenceAttribute[EssenceAttribute["Light"] = 4] = "Light";
        EssenceAttribute[EssenceAttribute["Dark"] = 5] = "Dark";
        EssenceAttribute[EssenceAttribute["Magic"] = 6] = "Magic";
    })(EssenceAttribute || (EssenceAttribute = {}));
    exports.default = EssenceAttribute;
});
define("EssenceGrade", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EssenceGrade;
    (function (EssenceGrade) {
        EssenceGrade[EssenceGrade["Low"] = 1] = "Low";
        EssenceGrade[EssenceGrade["Mid"] = 2] = "Mid";
        EssenceGrade[EssenceGrade["High"] = 3] = "High";
    })(EssenceGrade || (EssenceGrade = {}));
    exports.default = EssenceGrade;
});
define("Language", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Language;
    (function (Language) {
        Language["ru"] = "ru";
    })(Language || (Language = {}));
    exports.default = Language;
});
define("Monster", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Monster;
    (function (Monster) {
        Monster[Monster["Fairy"] = 101] = "Fairy";
        Monster[Monster["Imp"] = 102] = "Imp";
        Monster[Monster["Pixie"] = 103] = "Pixie";
        Monster[Monster["Yeti"] = 104] = "Yeti";
        Monster[Monster["Harpy"] = 105] = "Harpy";
        Monster[Monster["Hellhound"] = 106] = "Hellhound";
        Monster[Monster["Warbear"] = 107] = "Warbear";
        Monster[Monster["Elemental"] = 108] = "Elemental";
        Monster[Monster["Garuda"] = 109] = "Garuda";
        Monster[Monster["Inugami"] = 110] = "Inugami";
        Monster[Monster["Salamander"] = 111] = "Salamander";
        Monster[Monster["NineTiledFox"] = 112] = "NineTiledFox";
        Monster[Monster["Serpent"] = 113] = "Serpent";
        Monster[Monster["Golem"] = 114] = "Golem";
        Monster[Monster["Griffon"] = 115] = "Griffon";
        Monster[Monster["Undine"] = 116] = "Undine";
        Monster[Monster["Inferno"] = 117] = "Inferno";
        Monster[Monster["Sylph"] = 118] = "Sylph";
        Monster[Monster["Sylphid"] = 119] = "Sylphid";
        Monster[Monster["HightElemental"] = 120] = "HightElemental";
        Monster[Monster["Harpu"] = 121] = "Harpu";
        Monster[Monster["Slime"] = 122] = "Slime";
        Monster[Monster["ForestKeeper"] = 123] = "ForestKeeper";
        Monster[Monster["Mushroom"] = 124] = "Mushroom";
        Monster[Monster["ManedBoar"] = 125] = "ManedBoar";
        Monster[Monster["MonsterFlower"] = 126] = "MonsterFlower";
        Monster[Monster["Ghost"] = 127] = "Ghost";
        Monster[Monster["LowElemental"] = 128] = "LowElemental";
        Monster[Monster["Mimick"] = 129] = "Mimick";
        Monster[Monster["HornedFrog"] = 130] = "HornedFrog";
        Monster[Monster["Sandman"] = 131] = "Sandman";
        Monster[Monster["Howl"] = 132] = "Howl";
        Monster[Monster["Succubus"] = 133] = "Succubus";
        Monster[Monster["Joker"] = 134] = "Joker";
        Monster[Monster["Ninja"] = 135] = "Ninja";
        Monster[Monster["SurpriseBox"] = 136] = "SurpriseBox";
        Monster[Monster["Bearman"] = 137] = "Bearman";
        Monster[Monster["Valkyria"] = 138] = "Valkyria";
        Monster[Monster["Pierret"] = 139] = "Pierret";
        Monster[Monster["Werewolf"] = 140] = "Werewolf";
        Monster[Monster["PhantomThief"] = 141] = "PhantomThief";
        Monster[Monster["Angelmon"] = 142] = "Angelmon";
        Monster[Monster["Dragon"] = 144] = "Dragon";
        Monster[Monster["Phoenix"] = 145] = "Phoenix";
        Monster[Monster["Chimera"] = 146] = "Chimera";
        Monster[Monster["Vampire"] = 147] = "Vampire";
        Monster[Monster["Viking"] = 148] = "Viking";
        Monster[Monster["Amazon"] = 149] = "Amazon";
        Monster[Monster["MartialCat"] = 150] = "MartialCat";
        Monster[Monster["Vagabond"] = 152] = "Vagabond";
        Monster[Monster["EpikionPriest"] = 153] = "EpikionPriest";
        Monster[Monster["MagicalArcher"] = 154] = "MagicalArcher";
        Monster[Monster["Rakshasa"] = 155] = "Rakshasa";
        Monster[Monster["BountyHunter"] = 156] = "BountyHunter";
        Monster[Monster["Oracle"] = 157] = "Oracle";
        Monster[Monster["ImpChampion"] = 158] = "ImpChampion";
        Monster[Monster["MysticWitch"] = 159] = "MysticWitch";
        Monster[Monster["GrimReaper"] = 160] = "GrimReaper";
        Monster[Monster["OccultGirl"] = 161] = "OccultGirl";
        Monster[Monster["DeathKnight"] = 162] = "DeathKnight";
        Monster[Monster["Lich"] = 163] = "Lich";
        Monster[Monster["SkullSolider"] = 164] = "SkullSolider";
        Monster[Monster["LivingArmor"] = 165] = "LivingArmor";
        Monster[Monster["DragonKnight"] = 166] = "DragonKnight";
        Monster[Monster["MagicalArcherPromo"] = 167] = "MagicalArcherPromo";
        Monster[Monster["MonkeyKing"] = 168] = "MonkeyKing";
        Monster[Monster["Samurai"] = 169] = "Samurai";
        Monster[Monster["Archangel"] = 170] = "Archangel";
        Monster[Monster["DrunkenMaster"] = 172] = "DrunkenMaster";
        Monster[Monster["KungFuGirl"] = 173] = "KungFuGirl";
        Monster[Monster["BeastMonk"] = 174] = "BeastMonk";
        Monster[Monster["MischievousBat"] = 175] = "MischievousBat";
        Monster[Monster["BattleScorpion"] = 176] = "BattleScorpion";
        Monster[Monster["Minotauros"] = 177] = "Minotauros";
        Monster[Monster["Lizardman"] = 178] = "Lizardman";
        Monster[Monster["HellLady"] = 179] = "HellLady";
        Monster[Monster["BrownieMagician"] = 180] = "BrownieMagician";
        Monster[Monster["KoboldBomber"] = 181] = "KoboldBomber";
        Monster[Monster["KingAngelmon"] = 182] = "KingAngelmon";
        Monster[Monster["SkyDancer"] = 183] = "SkyDancer";
        Monster[Monster["Taosist"] = 184] = "Taosist";
        Monster[Monster["BeastHunter"] = 185] = "BeastHunter";
        Monster[Monster["Pioneer"] = 186] = "Pioneer";
        Monster[Monster["PenguinKnight"] = 187] = "PenguinKnight";
        Monster[Monster["BarbaricKing"] = 188] = "BarbaricKing";
        Monster[Monster["PolarQueen"] = 189] = "PolarQueen";
        Monster[Monster["BattleMammoth"] = 190] = "BattleMammoth";
        Monster[Monster["FairyQueen"] = 191] = "FairyQueen";
        Monster[Monster["Ifrit"] = 192] = "Ifrit";
        Monster[Monster["CowGirl"] = 193] = "CowGirl";
        Monster[Monster["PirateCaptain"] = 194] = "PirateCaptain";
        Monster[Monster["ChargerShark"] = 195] = "ChargerShark";
        Monster[Monster["Mermaid"] = 196] = "Mermaid";
        Monster[Monster["SeaEmperor"] = 197] = "SeaEmperor";
        Monster[Monster["MagicKnight"] = 198] = "MagicKnight";
        Monster[Monster["Assassin"] = 199] = "Assassin";
        Monster[Monster["NeostoneFighter"] = 200] = "NeostoneFighter";
        Monster[Monster["MartialArtist"] = 202] = "MartialArtist";
        Monster[Monster["Mummy"] = 203] = "Mummy";
        Monster[Monster["Anubis"] = 204] = "Anubis";
        Monster[Monster["DesertQueen"] = 205] = "DesertQueen";
        Monster[Monster["Horus"] = 206] = "Horus";
        Monster[Monster["JackOLantern"] = 207] = "JackOLantern";
        Monster[Monster["Frankenstein"] = 208] = "Frankenstein";
        Monster[Monster["ElvenRanger"] = 209] = "ElvenRanger";
        Monster[Monster["Harg"] = 210] = "Harg";
        Monster[Monster["FairyKing"] = 211] = "FairyKing";
        Monster[Monster["PandaWarrior"] = 212] = "PandaWarrior";
        Monster[Monster["DiceMagician"] = 213] = "DiceMagician";
        Monster[Monster["HarpMagician"] = 214] = "HarpMagician";
        Monster[Monster["Unicorn"] = 215] = "Unicorn";
        Monster[Monster["Paladin"] = 218] = "Paladin";
        Monster[Monster["ChakramDancer"] = 219] = "ChakramDancer";
        Monster[Monster["BoomerangWarrior"] = 220] = "BoomerangWarrior";
        Monster[Monster["Dryad"] = 221] = "Dryad";
        Monster[Monster["Druid"] = 222] = "Druid";
        Monster[Monster["GiantWarrior"] = 224] = "GiantWarrior";
        Monster[Monster["LightningEmperor"] = 226] = "LightningEmperor";
        Monster[Monster["SniperMkI1"] = 227] = "SniperMkI1";
        Monster[Monster["SniperMkI2"] = 228] = "SniperMkI2";
        Monster[Monster["CannonGirl"] = 229] = "CannonGirl";
        Monster[Monster["Devilmon"] = 151] = "Devilmon";
        Monster[Monster["Rainbowmon"] = 143] = "Rainbowmon";
        Monster[Monster["HomunculusAttack"] = 10001] = "HomunculusAttack";
        Monster[Monster["HomunculusSupport"] = 10002] = "HomunculusSupport";
    })(Monster || (Monster = {}));
    exports.default = Monster;
});
define("NumBool", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("ReturnCode", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ReturnCode;
    (function (ReturnCode) {
        ReturnCode[ReturnCode["ok"] = 0] = "ok";
        ReturnCode[ReturnCode["invalidRequestBody"] = 1002] = "invalidRequestBody";
        ReturnCode[ReturnCode["invalidCommand"] = 1004] = "invalidCommand";
    })(ReturnCode || (ReturnCode = {}));
    exports.default = ReturnCode;
});
define("RuneClass", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RuneClass;
    (function (RuneClass) {
        RuneClass[RuneClass["Common"] = 1] = "Common";
        RuneClass[RuneClass["Magic"] = 2] = "Magic";
        RuneClass[RuneClass["Rare"] = 3] = "Rare";
        RuneClass[RuneClass["Hero"] = 4] = "Hero";
        RuneClass[RuneClass["Legendary"] = 5] = "Legendary";
    })(RuneClass || (RuneClass = {}));
    exports.default = RuneClass;
});
define("RuneEffect", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RuneEffect;
    (function (RuneEffect) {
        RuneEffect[RuneEffect["None"] = 0] = "None";
        RuneEffect[RuneEffect["HpAbsolute"] = 1] = "HpAbsolute";
        RuneEffect[RuneEffect["HpRelative"] = 2] = "HpRelative";
        RuneEffect[RuneEffect["AtkAbsolute"] = 3] = "AtkAbsolute";
        RuneEffect[RuneEffect["AtkRelative"] = 4] = "AtkRelative";
        RuneEffect[RuneEffect["DefAbsolute"] = 5] = "DefAbsolute";
        RuneEffect[RuneEffect["DefRelative"] = 6] = "DefRelative";
        RuneEffect[RuneEffect["Speed"] = 7] = "Speed";
        RuneEffect[RuneEffect["CritRate"] = 8] = "CritRate";
        RuneEffect[RuneEffect["CritDamage"] = 9] = "CritDamage";
        RuneEffect[RuneEffect["Resistance"] = 10] = "Resistance";
        RuneEffect[RuneEffect["Accuracy"] = 11] = "Accuracy";
    })(RuneEffect || (RuneEffect = {}));
    exports.default = RuneEffect;
});
define("RuneQuality", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RuneQuality;
    (function (RuneQuality) {
        RuneQuality[RuneQuality["Common"] = 1] = "Common";
        RuneQuality[RuneQuality["Magic"] = 2] = "Magic";
        RuneQuality[RuneQuality["Rare"] = 3] = "Rare";
        RuneQuality[RuneQuality["Hero"] = 4] = "Hero";
        RuneQuality[RuneQuality["Legent"] = 5] = "Legent";
    })(RuneQuality || (RuneQuality = {}));
    exports.default = RuneQuality;
});
define("RuneSet", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RuneSet;
    (function (RuneSet) {
        RuneSet[RuneSet["Energy"] = 1] = "Energy";
        RuneSet[RuneSet["Guard"] = 2] = "Guard";
        RuneSet[RuneSet["Swift"] = 3] = "Swift";
        RuneSet[RuneSet["Blade"] = 4] = "Blade";
        RuneSet[RuneSet["Rage"] = 5] = "Rage";
        RuneSet[RuneSet["Focus"] = 6] = "Focus";
        RuneSet[RuneSet["Endure"] = 7] = "Endure";
        RuneSet[RuneSet["Fatal"] = 8] = "Fatal";
        RuneSet[RuneSet["Despair"] = 10] = "Despair";
        RuneSet[RuneSet["Vampire"] = 11] = "Vampire";
        RuneSet[RuneSet["Violent"] = 13] = "Violent";
        RuneSet[RuneSet["Nemesis"] = 14] = "Nemesis";
        RuneSet[RuneSet["Will"] = 15] = "Will";
        RuneSet[RuneSet["Shield"] = 16] = "Shield";
        RuneSet[RuneSet["Revenge"] = 17] = "Revenge";
        RuneSet[RuneSet["Destroy"] = 18] = "Destroy";
        RuneSet[RuneSet["Fight"] = 19] = "Fight";
        RuneSet[RuneSet["Determination"] = 20] = "Determination";
        RuneSet[RuneSet["Enhance"] = 21] = "Enhance";
        RuneSet[RuneSet["Accuracy"] = 22] = "Accuracy";
        RuneSet[RuneSet["Tolerance"] = 23] = "Tolerance";
        RuneSet[RuneSet["Immemorial"] = 99] = "Immemorial";
    })(RuneSet || (RuneSet = {}));
    exports.default = RuneSet;
});
define("Scenario", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Scenario;
    (function (Scenario) {
        Scenario[Scenario["GarezForest"] = 1] = "GarezForest";
        Scenario[Scenario["MtSiz"] = 2] = "MtSiz";
        Scenario[Scenario["KabirRuins"] = 3] = "KabirRuins";
        Scenario[Scenario["MtWhiteRagon"] = 4] = "MtWhiteRagon";
        Scenario[Scenario["TelainForest"] = 5] = "TelainForest";
        Scenario[Scenario["HydeniRuins"] = 6] = "HydeniRuins";
        Scenario[Scenario["TamorDesert"] = 7] = "TamorDesert";
        Scenario[Scenario["VrofagusRuins"] = 8] = "VrofagusRuins";
        Scenario[Scenario["FaimonVolcano"] = 9] = "FaimonVolcano";
        Scenario[Scenario["AidenForest"] = 10] = "AidenForest";
        Scenario[Scenario["FerunCastle"] = 11] = "FerunCastle";
        Scenario[Scenario["MtRunar"] = 12] = "MtRunar";
        Scenario[Scenario["ChirukaRemains"] = 13] = "ChirukaRemains";
    })(Scenario || (Scenario = {}));
    exports.default = Scenario;
});
define("Slot", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Stage", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("UtcTime", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class UtcTime {
        static get now() {
            const date = new Date();
            return date.getTime() - date.getTimezoneOffset() * 60 * 1000;
        }
        static get nowInSeconds() {
            return (this.now / 1000) >> 0;
        }
    }
    exports.default = UtcTime;
});
define("calculateSmon", ["require", "exports", "sha1", "summoners-war-encoder"], function (require, exports, sha1_1, summoners_war_encoder_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    sha1_1 = __importDefault(sha1_1);
    function calculateSmon(data) {
        const body = summoners_war_encoder_1.encryptRequest(JSON.stringify(data));
        const smonChecker = sha1_1.default(`60e2e90bb43b37fb${body}${data.ts_val}`);
        const smonTmVal = 1186835363;
        return {
            smonChecker: smonChecker.toString(),
            smonTmVal: smonTmVal,
            body: body
        };
    }
    exports.default = calculateSmon;
});
define("fetchAsync", ["require", "exports", "node-fetch", "fetch-cookie"], function (require, exports, node_fetch_1, fetch_cookie_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    node_fetch_1 = __importDefault(node_fetch_1);
    fetch_cookie_1 = __importDefault(fetch_cookie_1);
    const fetchAsync = fetch_cookie_1.default(node_fetch_1.default);
    exports.default = fetchAsync;
});
define("middle-contracts/ItemModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("middle-contracts/ItemsIndex", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("middle-contracts/NpcFriendModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("middle-contracts/NpcFriendIndex", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("middle-contracts/RuneModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("middle-contracts/RunesIndex", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("middle-contracts/UnitModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("middle-contracts/UnitsIndex", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("middle-contracts/GameInfoModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("request-contracts/GatewayRequestBase", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("response-contracts/GatewayResponseBase", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("response-contracts/WizardInfoModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("gateway-api/invokeAsync", ["require", "exports", "summoners-war-encoder", "calculateSmon", "fetchAsync", "UtcTime"], function (require, exports, summoners_war_encoder_2, calculateSmon_1, fetchAsync_1, UtcTime_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    calculateSmon_1 = __importDefault(calculateSmon_1);
    fetchAsync_1 = __importDefault(fetchAsync_1);
    UtcTime_1 = __importDefault(UtcTime_1);
    function invokeAsync(host, userAgent, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const smonCalcResult = calculateSmon_1.default(Object.assign({}, request, { ts_val: UtcTime_1.default.nowInSeconds }));
            const response = yield fetchAsync_1.default(`http://${host}/api/gateway_c2.php`, {
                method: 'POST',
                headers: {
                    ['SmonChecker']: smonCalcResult.smonChecker,
                    ['SmonTmVal']: smonCalcResult.smonTmVal.toString(),
                    ['User-Agent']: userAgent,
                    ['Content-Type']: 'application/octet-stream',
                    ['Accept-Encoding']: 'gzip'
                },
                credentials: 'include',
                body: smonCalcResult.body
            });
            const body = yield response.text();
            return JSON.parse(summoners_war_encoder_2.decryptResponse(body));
        });
    }
    exports.default = invokeAsync;
});
define("gateway-api/goScenarioAsync", ["require", "exports", "Command", "ReturnCode", "gateway-api/invokeAsync", "lodash"], function (require, exports, Command_1, ReturnCode_1, invokeAsync_1, lodash_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Command_1 = __importDefault(Command_1);
    ReturnCode_1 = __importDefault(ReturnCode_1);
    invokeAsync_1 = __importDefault(invokeAsync_1);
    var OppUnitResult;
    (function (OppUnitResult) {
        OppUnitResult[OppUnitResult["defined"] = 2] = "defined";
    })(OppUnitResult || (OppUnitResult = {}));
    function goScenarioAsync(gameInfoModel, scenario, difficulty, stage, unitIds) {
        return __awaiter(this, void 0, void 0, function* () {
            const startResponse = yield invokeAsync_1.default(gameInfoModel.host, gameInfoModel.userAgent, {
                command: Command_1.default.battleScenarioStart,
                channel_uid: gameInfoModel.channelUid,
                difficulty: difficulty,
                helper_list: [],
                infocsv: gameInfoModel.infocsv,
                mentor_helper_list: [],
                npc_friend_helper_list: [],
                proto_ver: gameInfoModel.protocol,
                region_id: scenario,
                retry: 0,
                session_key: gameInfoModel.sessionKey,
                stage_no: stage,
                unit_id_list: unitIds.map(unitId => ({
                    unit_id: unitId
                })),
                wizard_id: gameInfoModel.wizardId
            });
            if (startResponse.ret_code !== ReturnCode_1.default.ok)
                throw JSON.stringify(startResponse, null, 2);
            const resultResponse = yield invokeAsync_1.default(gameInfoModel.host, gameInfoModel.userAgent, {
                battle_key: startResponse.battle_key,
                channel_uid: gameInfoModel.channelUid,
                clear_time: 4 * 60 * 1000,
                command: Command_1.default.battleScenarioResult,
                infocsv: gameInfoModel.infocsv,
                opp_unit_status_list: lodash_1.flatten(startResponse.opp_unit_list).map(item => ({
                    unit_id: item.unit_id,
                    result: OppUnitResult.defined
                })),
                position: {
                    island_id: 1,
                    pos_x: 14,
                    pos_y: 24
                },
                proto_ver: gameInfoModel.protocol,
                retry: 0,
                session_key: gameInfoModel.sessionKey,
                unit_id_list: unitIds.map(unitId => ({
                    unit_id: unitId
                })),
                win_lose: 1,
                wizard_id: gameInfoModel.wizardId
            });
            if (resultResponse.ret_code !== ReturnCode_1.default.ok)
                throw JSON.stringify(startResponse, null, 2);
            return resultResponse.reward;
        });
    }
    exports.default = goScenarioAsync;
});
define("request-contracts/GuestLoginRequest", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("response-contracts/GuestLoginResponse", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("middle-contracts/VersionInfoModel", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("request-contracts/GetVersionInfoRequest", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("response-contracts/GetVersionInfoResponse", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VersionDataTopic;
    (function (VersionDataTopic) {
        VersionDataTopic["infocsv"] = "infocsv";
        VersionDataTopic["cdnres"] = "cdnres";
        VersionDataTopic["protocol"] = "protocol";
        VersionDataTopic["ban_appid"] = "ban_appid";
        VersionDataTopic["intro"] = "intro";
        VersionDataTopic["text"] = "text";
    })(VersionDataTopic = exports.VersionDataTopic || (exports.VersionDataTopic = {}));
});
define("version-info-api/invokeAsync", ["require", "exports", "summoners-war-encoder", "fetchAsync"], function (require, exports, summoners_war_encoder_3, fetchAsync_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    fetchAsync_2 = __importDefault(fetchAsync_2);
    function invokeAsync(host, userAgent, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetchAsync_2.default(`http://${host}/api/version_info_c2.php`, {
                method: 'POST',
                headers: {
                    ['User-Agent']: userAgent,
                    ['Content-Type']: 'application/octet-stream',
                    ['Accept-Encoding']: 'gzip'
                },
                body: summoners_war_encoder_3.encryptRequest(JSON.stringify(request))
            });
            const body = yield response.text();
            return JSON.parse(summoners_war_encoder_3.decryptResponse(body));
        });
    }
    exports.default = invokeAsync;
});
define("version-info-api/getVersionInfoAsync", ["require", "exports", "lodash", "response-contracts/GetVersionInfoResponse", "version-info-api/invokeAsync"], function (require, exports, lodash_2, GetVersionInfoResponse_1, invokeAsync_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    invokeAsync_2 = __importDefault(invokeAsync_2);
    function getVersionInfoAsync(host, userAgent, gameIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield invokeAsync_2.default(host, userAgent, {
                game_index: gameIndex
            });
            const versionDataByTopic = lodash_2.keyBy(response.version_data, (data) => data.topic);
            return {
                infocsv: versionDataByTopic[GetVersionInfoResponse_1.VersionDataTopic.infocsv].version,
                protocol: Number.parseInt(versionDataByTopic[GetVersionInfoResponse_1.VersionDataTopic.protocol].version)
            };
        });
    }
    exports.default = getVersionInfoAsync;
});
define("gateway-api/guestLoginAsync", ["require", "exports", "lodash", "Command", "ReturnCode", "version-info-api/getVersionInfoAsync", "gateway-api/invokeAsync"], function (require, exports, lodash_3, Command_2, ReturnCode_2, getVersionInfoAsync_1, invokeAsync_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Command_2 = __importDefault(Command_2);
    ReturnCode_2 = __importDefault(ReturnCode_2);
    getVersionInfoAsync_1 = __importDefault(getVersionInfoAsync_1);
    invokeAsync_3 = __importDefault(invokeAsync_3);
    function guestLoginAsync(host, userAgent, gameIndex, appVersion, userId, deviceId, country, language, macAddress, deviceName, osVersion, advertisingId, createIfNotExist) {
        return __awaiter(this, void 0, void 0, function* () {
            const versionInfo = yield getVersionInfoAsync_1.default(host, userAgent, gameIndex);
            const response = yield invokeAsync_3.default(host, userAgent, {
                command: Command_2.default.guestLogin,
                adid: advertisingId,
                app_version: appVersion,
                binary_check: '',
                binary_size: 0,
                channel_uid: userId,
                country: country,
                create_if_not_exist: createIfNotExist ? 1 : 0,
                device_name: deviceName,
                did: deviceId,
                game_index: gameIndex,
                idfv: '00000000-0000-0000-0000-000000000000',
                infocsv: versionInfo.infocsv,
                is_emulator: 0,
                lang: language,
                lang_game: 1,
                mac_address: macAddress,
                os_version: osVersion,
                proto_ver: versionInfo.protocol,
                push: 1,
                session_key: userId.toString(),
                token: '0000000000000000000000000000000000000000000000000000000000000000',
                uid: userId,
                wizard_id: null
            });
            if (response.ret_code !== ReturnCode_2.default.ok)
                throw JSON.stringify(response, null, 2);
            return {
                userAgent: userAgent,
                arenaEnergy: response.wizard_info.arena_energy,
                arenaEnergyMax: response.wizard_info.arena_energy_max,
                channelUid: userId,
                crystal: response.wizard_info.wizard_crystal,
                currentSummonSpecialUnitIds: response.summon_special_info.this,
                defenseUnitIds: response.defense_unit_list.map(unit => unit.unit_id),
                energy: response.wizard_info.wizard_energy,
                energyMax: response.wizard_info.energy_max,
                energyPerMin: response.wizard_info.energy_per_min,
                eventCoin: response.wizard_info.event_coin,
                guildPoint: response.wizard_info.guild_point,
                honorPoint: response.wizard_info.honor_point,
                host: host,
                infocsv: versionInfo.infocsv,
                itemsIndex: lodash_3.keyBy(response.inventory_info.map(item => ({
                    masterId: item.item_master_id,
                    type: item.item_master_type,
                    quantity: item.item_quantity
                })), (item) => item.masterId),
                level: response.wizard_info.wizard_level,
                mana: response.wizard_info.wizard_mana,
                name: response.wizard_info.wizard_name,
                nextArenaEnergyGain: response.wizard_info.arena_energy_next_gain,
                nextEnergyGain: response.wizard_info.next_energy_gain,
                nextWishUpdate: response.wish_list.next_update,
                obstacleIds: response.obstacle_list.map(item => item.obstacle_id),
                protocol: versionInfo.protocol,
                runesIndex: lodash_3.keyBy(response.runes.map(item => ({
                    class: item.class,
                    currentUpgrade: item.upgrade_curr,
                    rank: item.rank,
                    runeId: item.rune_id,
                    set: item.set_id,
                    slot: item.slot_no,
                    upgradeLimit: item.upgrade_limit
                })), (item) => item.runeId),
                sessionKey: userId.toString(),
                unitsIndex: lodash_3.keyBy(response.unit_list.map(item => ({
                    attribute: item.unit_master_id % 10,
                    awakened: ((item.unit_master_id % 100) / 10) << 0 > 0,
                    class: item.class,
                    level: item.unit_level,
                    type: (item.unit_master_id / 100) << 0,
                    unitId: item.unit_id
                })), (item) => item.unitId),
                wishRemained: response.wish_list.trial_remained,
                wizardId: response.wizard_info.wizard_id,
                npcFriendIndex: Object.values(response.npc_friend_list).map((item) => ({
                    nextAssistTime: item.next_assist_time,
                    npcFriendId: item.npc_friend_id,
                    npcFriendLevel: item.npc_friend_level,
                    unitClass: item.unit_class,
                    unitId: item.unit_id,
                    unitLevel: item.unit_level,
                    unitMasterId: item.unit_master_id,
                    wizardId: item.wizard_id
                }))
            };
        });
    }
    exports.default = guestLoginAsync;
});
define("index", ["require", "exports", "Attribute", "Country", "gateway-api/goScenarioAsync", "gateway-api/guestLoginAsync", "Language", "Monster"], function (require, exports, Attribute_1, Country_1, goScenarioAsync_1, guestLoginAsync_1, Language_1, Monster_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Attribute_1 = __importDefault(Attribute_1);
    Country_1 = __importDefault(Country_1);
    goScenarioAsync_1 = __importDefault(goScenarioAsync_1);
    guestLoginAsync_1 = __importDefault(guestLoginAsync_1);
    Language_1 = __importDefault(Language_1);
    Monster_1 = __importDefault(Monster_1);
    const host = 'summonerswar-gb.qpyou.cn';
    const userAgent = 'Dalvik/2.1.0 (Linux; U; Android 9; Mi A1 MIUI/V10.0.5.0.PDHMIXM)';
    const gameIndex = 2624;
    const appVersion = '4.2.3';
    const userId = 90195446442;
    const deviceId = 557019587;
    const country = Country_1.default.ru;
    const language = Language_1.default.ru;
    const macAddress = '02:00:00:00:00:00';
    const device = 'Mi A1';
    const osVersion = '9';
    const advertisingId = '3ad3066b-e83c-44d3-b782-5877ca55f1a5';
    class Api {
        constructor() {
            this.gameInfoModel = null;
        }
        login() {
            return __awaiter(this, void 0, void 0, function* () {
                this.gameInfoModel = yield guestLoginAsync_1.default(host, userAgent, gameIndex, appVersion, userId, deviceId, country, language, macAddress, device, osVersion, advertisingId, false);
            });
        }
        get gameInfo() {
            return this.gameInfoModel;
        }
        get units() {
            return this.gameInfoModel
                ? Object.values(this.gameInfoModel.unitsIndex).map((unit) => ({
                    attribute: Attribute_1.default[unit.attribute],
                    awakened: unit.awakened,
                    id: unit.unitId,
                    type: Monster_1.default[unit.type],
                    class: unit.class,
                    level: unit.level
                }))
                : null;
        }
        goScenario(scenario, difficulty, stage, unitIds) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!this.gameInfoModel)
                    throw 'Login before!';
                return yield goScenarioAsync_1.default(this.gameInfoModel, scenario, difficulty, stage, unitIds);
            });
        }
    }
    exports.default = Api;
});
