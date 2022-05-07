"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.bold = exports.ok = exports.warning = exports.error = exports.keywords = void 0;
var chalk_1 = __importDefault(require("chalk"));
exports.keywords = chalk_1["default"].magenta;
exports.error = chalk_1["default"].red;
exports.warning = chalk_1["default"].yellow;
exports.ok = chalk_1["default"].green;
exports.bold = chalk_1["default"].bold;
