import fs from "fs";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileParser {
  data: MatchData[] = [];
  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((a: string): string[] => a.split(","))
      .map((match): MatchData => {
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
