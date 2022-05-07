import { mongoInDockerArgs } from "./args";
import { isDockerInstalled } from "../common/docker";
import { style } from "../common/cmd-styles";

/**
 * 
 * @param args 
 */
const run = (args: string[]) => {
    if (!isDockerInstalled()) {
        console.warn(`${style.bold(style.error('WARNING!'))} ${style.warning('Docker does not appear to be installed.')}`);
    }

    const parsedArgs = mongoInDockerArgs(args);
    console.debug(parsedArgs);
}

export { run }


