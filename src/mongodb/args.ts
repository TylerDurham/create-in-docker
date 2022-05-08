import path from "path";
import { IMongoInDockerCmdArgs } from "../common/interfaces";

/**
 * 
 * @param args 
 * @returns 
 */
const mongoInDockerArgs = (args: string[]): IMongoInDockerCmdArgs => {
    let project = args[0];
    if (project === undefined || project.trim().length === 0) throw "First argument must be project name! Enter '.' to use current directory."
    project = project.trim();

    const parsedArgs = {
        cwd: path.resolve(project),
        project: project === '.' ? path.basename(path.resolve(project)) : project,
        rootUsername: undefined,
        rootPassword: undefined,
        includeMongoExpress: false,
        port: 27017
    }

    for (let i = 1; i < args.length; i += 2) {
        const key = args[i].toLowerCase().trim();
        
        if (key === "-u" || key === "--uid") {
            parsedArgs.rootUsername = args[i + 1];
        } else if (key === "-p" || key === "--pwd") {
            parsedArgs.rootPassword = args[i + 1];
        } else if (key === "-i" || key === "--ime") {
            parsedArgs.includeMongoExpress = true;
        } else if (key === "-n" || key === "--name") {
            parsedArgs.project = args[i + 1];
        } else if (key === "--port") {
            parsedArgs.port = convertToNumber(args[i + 1], parsedArgs.port);
        }
    }

    return Object.freeze(parsedArgs);
}

const convertToNumber = (value: string, defaultValue: number) => {
    try { return parseInt(value); } 
    catch { return defaultValue}
}

export { mongoInDockerArgs, IMongoInDockerCmdArgs }