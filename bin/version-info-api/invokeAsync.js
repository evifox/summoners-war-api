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
const fetchAsync_1 = __importDefault(require("../fetchAsync"));
function invokeAsync(host, userAgent, request) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetchAsync_1.default(`http://${host}/api/version_info_c2.php`, {
            method: 'POST',
            headers: {
                ['User-Agent']: userAgent,
                ['Content-Type']: 'application/octet-stream',
                ['Accept-Encoding']: 'gzip'
            },
            body: summoners_war_encoder_1.encryptRequest(JSON.stringify(request))
        });
        const body = yield response.text();
        return JSON.parse(summoners_war_encoder_1.decryptResponse(body));
    });
}
exports.default = invokeAsync;
