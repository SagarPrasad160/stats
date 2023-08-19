import { CsvFileParser } from "./CsvFileParser";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { LogReport } from "./reportTargets/LogReport";

const csvFileParser = new CsvFileParser("football.csv");
const matchReader = new MatchReader(csvFileParser);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new LogReport());
summary.buildAndPrintReport(matchReader.matches);
