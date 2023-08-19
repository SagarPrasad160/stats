"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (const match of matches) {
            if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === "Man United" &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Man United Won ${wins} games`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
