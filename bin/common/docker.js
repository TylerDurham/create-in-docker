"use strict";
exports.__esModule = true;
exports.isDockerInstalled = void 0;
var child_process_1 = require("child_process");
var cmd_styles_1 = require("./cmd-styles");
/**
 *
 * @returns
 */
var isDockerInstalled = function () {
    try {
        console.log("You are running ".concat(cmd_styles_1.style.ok((0, child_process_1.execSync)("docker -v").toString().trim()), "."));
        return true;
    }
    catch (err) {
        console.log(cmd_styles_1.style.error(err));
        return false;
    }
};
exports.isDockerInstalled = isDockerInstalled;
