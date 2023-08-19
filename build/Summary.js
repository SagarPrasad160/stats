"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
class Summary {
    constructor(analyzer, printReport) {
        this.analyzer = analyzer;
        this.printReport = printReport;
    }
    buildAndPrintReport(matches) {
        const result = this.analyzer.run(matches);
        this.printReport.print(result);
    }
}
exports.Summary = Summary;
