import { MatchResult } from "./MatchResult";
import { CsvFileParser } from "./CsvFileParser";
import { MatchReader } from "./MatchReader";

const csvFileParser = new CsvFileParser("football.csv");
const matchReader = new MatchReader(csvFileParser);
matchReader.load();

// finding the number of match won by manchester united

let manUnitedWins = 0;

for (const match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United Won ${manUnitedWins} matches`);
