import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map((match): MatchData => {
      return [
        dateStringToDate(match[0]),
        match[1],
        match[2],
        parseInt(match[3]),
        parseInt(match[4]),
        match[5] as MatchResult,
        match[6],
      ];
    });
  }
}
