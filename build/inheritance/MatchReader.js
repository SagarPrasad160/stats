"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileParser_1 = require("./CsvFileParser");
const utils_1 = require("../utils");
class MatchReader extends CsvFileParser_1.CsvFileParser {
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5],
            row[6],
        ];
    }
}
