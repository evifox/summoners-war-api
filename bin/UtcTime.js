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
