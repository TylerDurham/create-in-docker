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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ensure = void 0;
var fs = __importStar(require("fs"));
var path_1 = __importDefault(require("path"));
var child_process_1 = require("child_process");
var cmd_styles_1 = require("./cmd-styles");
/**
 * Ensures that the project directory exists and package.json exists.
 * @param args The current working directory and the project directory name.
 */
var ensure = function (args) {
    ensureDirectory(args);
    ensurePackageJson(args);
};
exports.ensure = ensure;
/**
 * Ensures the project directory exists... creates the directory if it doesn't exist.
 * @param args The current working directory and the project directory name.
 */
var ensureDirectory = function (args) {
    try {
        fs.accessSync(args.cwd, fs.constants.R_OK);
        console.debug("Sweet... project directory ".concat((0, cmd_styles_1.keywords)(args.project), " already exists."));
    }
    catch (err) {
        console.debug("Creating project directory ".concat((0, cmd_styles_1.keywords)(args.project), " because it did not exist."));
        fs.mkdirSync(args.cwd);
        process.chdir(args.cwd);
    }
};
/**
 * Ensures package.json exists in the current project directory... creates package.json if it doesn't exist.
 * @param args The current working directory and the project directory name.
 */
var ensurePackageJson = function (args) {
    var fileName = "package.json";
    try {
        fs.accessSync(path_1["default"].join(args.cwd, fileName), fs.constants.R_OK);
        console.debug("Cool! ".concat((0, cmd_styles_1.keywords)(fileName), " already exists in ").concat((0, cmd_styles_1.keywords)(args.project), "."));
    }
    catch (_a) {
        console.debug("Creating ".concat((0, cmd_styles_1.keywords)(fileName), " in ").concat((0, cmd_styles_1.keywords)(args.project), " because it did not exist."));
        (0, child_process_1.execSync)("npm init -y").toString();
    }
};
