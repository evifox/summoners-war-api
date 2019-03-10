"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Attribute_1 = __importDefault(require("./Attribute"));
const Country_1 = __importDefault(require("./Country"));
const goScenarioAsync_1 = __importDefault(require("./gateway-api/goScenarioAsync"));
const guestLoginAsync_1 = __importDefault(require("./gateway-api/guestLoginAsync"));
const Language_1 = __importDefault(require("./Language"));
const Monster_1 = __importDefault(require("./Monster"));
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
