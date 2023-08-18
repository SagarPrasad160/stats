import { CsvFileParser } from "./CsvFileParser";
import { MatchResult } from "./MatchResult";

const csvFileParser = new CsvFileParser("football.csv");
csvFileParser.read();
//console.log(csvFileParser.data);

// finding the number of match wins of manchester united

let manUnitedWins = 0;

for (const match of csvFileParser.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
