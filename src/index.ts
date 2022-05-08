import * as  path from 'path';
import { error, warning } from './common/cmd-styles';

const argv = process.argv; // Get args
if (argv.length >= 2) {
    // NODE SCRIPT <args>
    const scriptPath = argv[1];
    const scriptName = path.basename(scriptPath);
    const args = argv.splice(2);

    try {
        require('./' + scriptName + '/index.js').run(args);
    } catch (err) {
        console.error(error("ERROR! " + warning(err)));
    }
} else {
    console.error(error("ERROR! ") + warning("This script must be executed in NODE!"));
}


