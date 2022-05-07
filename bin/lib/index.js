"use strict";
exports.__esModule = true;
exports.run = void 0;
var docker_1 = require("./docker");
var style_1 = require("./style");
var run = function () {
    if (!(0, docker_1.isDockerInstalled)()) {
        console.warn("".concat(style_1.style.bold(style_1.style.error('WARNING!')), " ").concat(style_1.style.warning('Docker does not appear to be installed.')));
    }
};
exports.run = run;
