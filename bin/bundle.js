/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 81:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bold = exports.ok = exports.warning = exports.error = exports.keywords = void 0;
const chalk_1 = __importDefault(__webpack_require__(22));
exports.keywords = chalk_1.default.magenta;
exports.error = chalk_1.default.red;
exports.warning = chalk_1.default.yellowBright;
exports.ok = chalk_1.default.green;
exports.bold = chalk_1.default.bold;


/***/ }),

/***/ 228:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isDockerInstalled = void 0;
const child_process_1 = __webpack_require__(493);
const cmd_styles_1 = __webpack_require__(81);
/**
 * Checks if Docker is installed.
 * @returns TRUE if Docker is installed, FALSE if Docker is not installed.
 */
const isDockerInstalled = () => {
    try {
        console.log(`You are running ${(0, cmd_styles_1.ok)((0, child_process_1.execSync)("docker -v").toString().trim())}.`);
        return true;
    }
    catch (err) {
        console.log((0, cmd_styles_1.error)(err));
        return false;
    }
};
exports.isDockerInstalled = isDockerInstalled;


/***/ }),

/***/ 141:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ensure = void 0;
const fs = __importStar(__webpack_require__(147));
const path_1 = __importDefault(__webpack_require__(17));
const child_process_1 = __webpack_require__(493);
const cmd_styles_1 = __webpack_require__(81);
/**
 * Ensures that the project directory exists and package.json exists.
 * @param args The current working directory and the project directory name.
 */
const ensure = (args) => {
    ensureDirectory(args);
    ensurePackageJson(args);
};
exports.ensure = ensure;
/**
 * Ensures the project directory exists... creates the directory if it doesn't exist.
 * @param args The current working directory and the project directory name.
 */
const ensureDirectory = (args) => {
    try {
        fs.accessSync(args.cwd, fs.constants.R_OK);
        console.debug(`Sweet... project directory ${(0, cmd_styles_1.keywords)(args.project)} already exists.`);
    }
    catch (err) {
        console.debug(`Creating project directory ${(0, cmd_styles_1.keywords)(args.project)} because it did not exist.`);
        fs.mkdirSync(args.cwd);
        process.chdir(args.cwd);
    }
};
/**
 * Ensures package.json exists in the current project directory... creates package.json if it doesn't exist.
 * @param args The current working directory and the project directory name.
 */
const ensurePackageJson = (args) => {
    const fileName = "package.json";
    try {
        fs.accessSync(path_1.default.join(args.cwd, fileName), fs.constants.R_OK);
        console.debug(`Cool! ${(0, cmd_styles_1.keywords)(fileName)} already exists in ${(0, cmd_styles_1.keywords)(args.project)}.`);
    }
    catch (_a) {
        console.debug(`Creating ${(0, cmd_styles_1.keywords)(fileName)} in ${(0, cmd_styles_1.keywords)(args.project)} because it did not exist.`);
        (0, child_process_1.execSync)(`npm init -y`).toString();
    }
};


/***/ }),

/***/ 502:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mongoInDockerArgs = void 0;
const path_1 = __importDefault(__webpack_require__(17));
/**
 *
 * @param args
 * @returns
 */
const mongoInDockerArgs = (args) => {
    let project = args[0];
    if (project === undefined || project.trim().length === 0)
        throw "First argument must be project name! Enter '.' to use current directory.";
    project = project.trim();
    const parsedArgs = {
        cwd: path_1.default.resolve(project),
        project: project,
        rootUsername: undefined,
        rootPassword: undefined,
        includeMongoExpress: false,
        port: 27017
    };
    for (let i = 1; i < args.length; i += 2) {
        const key = args[i].toLowerCase().trim();
        if (key === "-u" || key === "--uid") {
            parsedArgs.rootUsername = args[i + 1];
        }
        else if (key === "-p" || key === "--pwd") {
            parsedArgs.rootPassword = args[i + 1];
        }
        else if (key === "-i" || key === "--ime") {
            parsedArgs.includeMongoExpress = true;
        }
    }
    return Object.freeze(parsedArgs);
};
exports.mongoInDockerArgs = mongoInDockerArgs;


/***/ }),

/***/ 192:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.run = void 0;
const args_1 = __webpack_require__(502);
const docker_1 = __webpack_require__(228);
const cmd_styles_1 = __webpack_require__(81);
const project = __importStar(__webpack_require__(141));
/**
 *
 * @param args
 */
const run = (args) => {
    if (!(0, docker_1.isDockerInstalled)()) {
        console.warn(`${(0, cmd_styles_1.bold)((0, cmd_styles_1.error)('WARNING!'))} ${(0, cmd_styles_1.warning)('Docker does not appear to be installed.')}`);
    }
    const parsedArgs = (0, args_1.mongoInDockerArgs)(args);
    project.ensure(parsedArgs);
};
exports.run = run;


/***/ }),

/***/ 880:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const path = __importStar(__webpack_require__(17));
const cmd_styles_1 = __webpack_require__(81);
const argv = process.argv; // Get args
if (argv.length >= 2) {
    // NODE SCRIPT <args>
    const scriptPath = argv[1];
    const scriptName = path.basename(scriptPath);
    const args = argv.splice(2);
    try {
        __webpack_require__(644)("./" + scriptName + "/index.js").run(args);
    }
    catch (err) {
        console.error((0, cmd_styles_1.error)("ERROR! " + (0, cmd_styles_1.warning)(err)));
    }
}
else {
    console.error((0, cmd_styles_1.error)("ERROR! ") + (0, cmd_styles_1.warning)("This script must be executed in NODE!"));
}


/***/ }),

/***/ 644:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./create-mongo-in-docker/index.js": 192
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 644;

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("chalk");

/***/ }),

/***/ 493:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(880);
/******/ 	
/******/ })()
;