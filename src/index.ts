import * as  path from 'path';
import * as fs from 'fs';
import { error, warning } from './common/cmd-styles';

const argv = process.argv; // Get args

const validCommands = ['mongodb'];

const run = (args: string[]) => {
    if (args.length >= 3) {
        // NODE SCRIPT <args>
        const scriptPath = args[1];
        const scriptName = path.basename(scriptPath);
        const commandName = args[2];

        if (ensureCommand(commandName)) {
            try {
                require('./' + commandName + '/index.js').run(argv.splice(3));
            } catch (err) {
                console.error(error("ERROR! " + warning(err)));
            }
        } else {
            showError(`Unsupported command ${commandName}`, true);
        }
    } else {
        console.error(error("ERROR! ") + warning("This script must be executed in NODE!"));
    }
}

function showError(msg: string, help = false) {
    console.error(error("ERROR! " + warning(msg)));
    if (help) showHelp();
}

function showWarning(msg: string, help = false) {
    console.error(warning("WARNING! " + (msg)));
    if(help) showHelp();
}

function showHelp() {
    console.log(
        `USAGE:
        npx create-in-docker <command> <options>
        `
    )
}

const ensureCommand = (commandName: string): boolean => {
    return validCommands.indexOf(commandName) > -1;
}

run(process.argv);


