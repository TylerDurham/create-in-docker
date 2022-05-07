"use strict";
exports.__esModule = true;
exports.isDockerInstalled = void 0;
var child_process_1 = require("child_process");
var cmd_styles_1 = require("./cmd-styles");
/**
 * Checks if Docker is installed.
 * @returns TRUE if Docker is installed, FALSE if Docker is not installed.
 */
var isDockerInstalled = function () {
    try {
        console.log("You are running ".concat((0, cmd_styles_1.ok)((0, child_process_1.execSync)("docker -v").toString().trim()), "."));
        return true;
    }
    catch (err) {
        console.log((0, cmd_styles_1.error)(err));
        return false;
    }
};
exports.isDockerInstalled = isDockerInstalled;
