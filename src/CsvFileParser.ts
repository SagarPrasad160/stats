import fs from "fs";

export abstract class CsvFileParser<T> {
  data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((a: string): string[] => a.split(","))
      .map(this.mapRow);
  }
}
