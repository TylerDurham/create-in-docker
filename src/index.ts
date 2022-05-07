const path = require('path');

const run = () => {
    const argv = process.argv;
    if (argv.length >= 2) {
        const scriptPath = argv[1];
        const scriptName = path.basename(scriptPath);
        const args = argv.splice(2);
        require('./' + scriptName + '/index.js').run(args);
    } else {
        console.error(`This script must be executed within NodeJS.`);
    }
}

export { run }