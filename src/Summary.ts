import { MatchData } from "./MatchData";

interface analyzer {
  run(matches: MatchData[]): string;
}

interface printReport {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: analyzer, public printReport: printReport) {}
  buildAndPrintReport(matches: MatchData[]) {
    const result = this.analyzer.run(matches);
    this.printReport.print(result);
  }
}
