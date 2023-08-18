"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileParser_1 = require("./CsvFileParser");
const MatchResult_1 = require("./MatchResult");
const csvFileParser = new CsvFileParser_1.CsvFileParser("football.csv");
csvFileParser.read();
//console.log(csvFileParser.data);
// finding the number of match wins of manchester united
let manUnitedWins = 0;
for (const match of csvFileParser.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
