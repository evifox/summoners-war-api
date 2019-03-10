"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const fetch_cookie_1 = __importDefault(require("fetch-cookie"));
const fetchAsync = fetch_cookie_1.default(node_fetch_1.default);
exports.default = fetchAsync;
