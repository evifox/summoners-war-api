"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReturnCode;
(function (ReturnCode) {
    ReturnCode[ReturnCode["ok"] = 0] = "ok";
    ReturnCode[ReturnCode["invalidRequestBody"] = 1002] = "invalidRequestBody";
    ReturnCode[ReturnCode["invalidCommand"] = 1004] = "invalidCommand";
})(ReturnCode || (ReturnCode = {}));
exports.default = ReturnCode;
