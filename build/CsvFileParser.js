"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileParser = void 0;
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
class CsvFileParser {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    read() {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: "utf-8",
        })
            .split("\n")
            .map((a) => a.split(","))
            .map((match) => {
            return [
                (0, utils_1.dateStringToDate)(match[0]),
                match[1],
                match[2],
                parseInt(match[3]),
                parseInt(match[4]),
                match[5],
                match[6],
            ];
        });
    }
}
exports.CsvFileParser = CsvFileParser;
