"use strict";
exports.__esModule = true;
exports.run = void 0;
var path = require('path');
var run = function () {
    var argv = process.argv;
    if (argv.length >= 2) {
        var scriptPath = argv[1];
        var scriptName = path.basename(scriptPath);
        var args = argv.splice(2);
        require('./' + scriptName + '/index.js').run(args);
    }
    else {
        console.error("This script must be executed within NodeJS.");
    }
};
exports.run = run;
