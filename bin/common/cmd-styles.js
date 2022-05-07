"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.style = void 0;
var chalk_1 = __importDefault(require("chalk"));
exports.style = {
    keywords: chalk_1["default"].magenta,
    error: chalk_1["default"].red,
    warning: chalk_1["default"].yellow,
    ok: chalk_1["default"].green,
    bold: chalk_1["default"].bold
};
