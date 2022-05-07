import { ICmdArgs } from "./interfaces"
import * as fs from 'fs';

export const ensure = (args: ICmdArgs) => {
    
}

const ensureDirectory  = (args: ICmdArgs) => {
    try {
        fs.accessSync(args.cwd, fs.constants.R_OK);
    } catch (err) {
        console.debug(`Creating project directory ${args.project}`);
        fs.mkdirSync(args.cwd);
        process.chdir(args.cwd);
    }

}