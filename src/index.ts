import * as  path from 'path';
import { error, warning } from './common/cmd-styles';

const run = () => {
    const argv = process.argv;
    if (argv.length >= 2) {
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
}

export { run }