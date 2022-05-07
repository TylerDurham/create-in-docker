"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.mongoInDockerArgs = void 0;
var path_1 = __importDefault(require("path"));
/**
 *
 * @param args
 * @returns
 */
var mongoInDockerArgs = function (args) {
    var project = args[0];
    if (project === undefined || project.trim().length === 0)
        throw "First argument must be project name!";
    project = project.trim();
    var parsedArgs = {
        cwd: path_1["default"].resolve(project),
        project: project,
        rootUsername: undefined,
        rootPassword: undefined,
        includeMongoExpress: false,
        port: 27017
    };
    for (var i = 1; i < args.length; i += 2) {
        var key = args[i].toLowerCase().trim();
        var value = args[i + 1];
        console.debug("".concat(key, "=").concat(value));
        if (key === "-u" || key === "--uid") {
            parsedArgs.rootUsername = value;
        }
        else if (key === "-p" || key === "--pwd") {
            parsedArgs.rootPassword = value;
        }
        else if (key === "-i" || key === "--ime") {
            parsedArgs.includeMongoExpress = true;
        }
    }
    return Object.freeze(parsedArgs);
};
exports.mongoInDockerArgs = mongoInDockerArgs;
