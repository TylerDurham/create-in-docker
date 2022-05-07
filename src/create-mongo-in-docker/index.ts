import { mongoInDockerArgs } from "./args";
import { isDockerInstalled } from "../common/docker";
import { error, bold, warning } from "../common/cmd-styles";
import * as project from '../common/project';

/**
 * 
 * @param args 
 */
const run = (args: string[]) => {
    if (!isDockerInstalled()) {
        console.warn(`${bold(error('WARNING!'))} ${warning('Docker does not appear to be installed.')}`);
    }

    const parsedArgs = mongoInDockerArgs(args);
    project.ensure(parsedArgs);
}

export { run }


