import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;

    for (const match of matches) {
      if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }
    return `Man United Won ${wins} games`;
  }
}
