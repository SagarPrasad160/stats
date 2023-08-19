"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const CsvFileParser_1 = require("./CsvFileParser");
const MatchReader_1 = require("./MatchReader");
const csvFileParser = new CsvFileParser_1.CsvFileParser("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileParser);
matchReader.load();
// finding the number of match won by manchester united
let manUnitedWins = 0;
for (const match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Manchester United Won ${manUnitedWins} matches`);
