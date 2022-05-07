#! /usr/bin/env node

function main() {
    const runner = require('./index.js');
    if(runner && runner.run && typeof runner.run === 'function') {
        runner.run();
    }
}

if (require.main === module) {
    main();
}