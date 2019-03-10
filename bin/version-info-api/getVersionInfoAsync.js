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
const lodash_1 = require("lodash");
const GetVersionInfoResponse_1 = require("../response-contracts/GetVersionInfoResponse");
const invokeAsync_1 = __importDefault(require("./invokeAsync"));
function getVersionInfoAsync(host, userAgent, gameIndex) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield invokeAsync_1.default(host, userAgent, {
            game_index: gameIndex
        });
        const versionDataByTopic = lodash_1.keyBy(response.version_data, (data) => data.topic);
        return {
            infocsv: versionDataByTopic[GetVersionInfoResponse_1.VersionDataTopic.infocsv].version,
            protocol: Number.parseInt(versionDataByTopic[GetVersionInfoResponse_1.VersionDataTopic.protocol].version)
        };
    });
}
exports.default = getVersionInfoAsync;
