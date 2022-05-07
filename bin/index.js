"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.run = void 0;
var path = __importStar(require("path"));
var cmd_styles_1 = require("./common/cmd-styles");
var run = function () {
    var argv = process.argv;
    if (argv.length >= 2) {
        var scriptPath = argv[1];
        var scriptName = path.basename(scriptPath);
        var args = argv.splice(2);
        try {
            require('./' + scriptName + '/index.js').run(args);
        }
        catch (err) {
            console.error((0, cmd_styles_1.error)("ERROR! " + (0, cmd_styles_1.warning)(err)));
        }
    }
    else {
        console.error((0, cmd_styles_1.error)("ERROR! ") + (0, cmd_styles_1.warning)("This script must be executed in NODE!"));
    }
};
exports.run = run;
