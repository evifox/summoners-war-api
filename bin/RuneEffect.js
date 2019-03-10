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
