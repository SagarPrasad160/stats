"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
function dateStringToDate(dateString) {
    const dateStrArr = dateString
        .split("/")
        .map((a) => parseInt(a));
    return new Date(dateStrArr[2], dateStrArr[1] - 1, dateStrArr[0]);
}
exports.dateStringToDate = dateStringToDate;
