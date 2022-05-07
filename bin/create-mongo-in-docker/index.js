"use strict";
exports.__esModule = true;
exports.run = void 0;
var args_1 = require("../common/args");
var docker_1 = require("../common/docker");
var cmd_styles_1 = require("../common/cmd-styles");
var run = function (args) {
    if (!(0, docker_1.isDockerInstalled)()) {
        console.warn("".concat(cmd_styles_1.style.bold(cmd_styles_1.style.error('WARNING!')), " ").concat(cmd_styles_1.style.warning('Docker does not appear to be installed.')));
    }
    var parsedArgs = (0, args_1.mongoInDockerArgs)(args);
    console.debug(parsedArgs);
};
exports.run = run;
