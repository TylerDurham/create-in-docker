import path from "path";
import { IMongoInDockerCmdArgs } from "./interfaces";

/**
 * 
 * @param args 
 * @returns 
 */
const mongoInDockerArgs = (args: string[]): IMongoInDockerCmdArgs => {
    let project = args[0];
    if (project === undefined || project.trim().length === 0) throw "First argument must be project name!"
    project = project.trim();

    const parsedArgs = {
        cwd: path.resolve(project),
        project: project,
        rootUsername: undefined,
        rootPassword: undefined,
        includeMongoExpress: false,
        port: 27017
    }

    for (let i = 1; i < args.length; i += 2) {
        const key = args[i].toLowerCase().trim();
        const value = args[i + 1];

        console.debug(`${key}=${value}`)

        if (key === "-u" || key === "--uid") {
            parsedArgs.rootUsername = value;
        } else if (key === "-p" || key === "--pwd") {
            parsedArgs.rootPassword = value;
        } else if (key === "-i" || key === "--ime") {
            parsedArgs.includeMongoExpress = true;
        }
    }

    return Object.freeze(parsedArgs);
}


export { mongoInDockerArgs, IMongoInDockerCmdArgs }