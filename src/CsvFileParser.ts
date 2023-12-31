import fs from "fs";

export class CsvFileParser {
  data: string[][] = [];
  constructor(public filename: string) {}

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((a: string): string[] => a.split(","));
  }
}
