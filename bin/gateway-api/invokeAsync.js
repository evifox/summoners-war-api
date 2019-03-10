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
const summoners_war_encoder_1 = require("summoners-war-encoder");
const calculateSmon_1 = __importDefault(require("../calculateSmon"));
const fetchAsync_1 = __importDefault(require("../fetchAsync"));
const UtcTime_1 = __importDefault(require("../UtcTime"));
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
        return JSON.parse(summoners_war_encoder_1.decryptResponse(body));
    });
}
exports.default = invokeAsync;
