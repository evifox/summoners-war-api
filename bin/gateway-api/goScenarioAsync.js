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
const command_1 = __importDefault(require("../command"));
const ReturnCode_1 = __importDefault(require("../ReturnCode"));
const invokeAsync_1 = __importDefault(require("./invokeAsync"));
const lodash_1 = require("lodash");
var OppUnitResult;
(function (OppUnitResult) {
    OppUnitResult[OppUnitResult["defined"] = 2] = "defined";
})(OppUnitResult || (OppUnitResult = {}));
function goScenarioAsync(gameInfoModel, scenario, difficulty, stage, unitIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const startResponse = yield invokeAsync_1.default(gameInfoModel.host, gameInfoModel.userAgent, {
            command: command_1.default.battleScenarioStart,
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
            command: command_1.default.battleScenarioResult,
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
