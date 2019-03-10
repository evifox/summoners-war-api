"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sha1_1 = __importDefault(require("sha1"));
const summoners_war_encoder_1 = require("summoners-war-encoder");
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
