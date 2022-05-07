#! /usr/bin/env node

function main() {
    require('./lib/index.js').run();
}

if(require.main === module) {
    main();
}