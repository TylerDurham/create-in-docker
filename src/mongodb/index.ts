import * as project from '../common/project';
import * as env from '../common/env';
import { bold, error, warning } from '../common/cmd-styles';
import { IMongoInDockerCmdArgs } from '../common/interfaces';
import { isDockerInstalled } from '../common/docker';
import { mongoInDockerArgs } from './args';

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
    env.ensure(parsedArgs, buffer(parsedArgs));
}

export const buffer = (args: IMongoInDockerCmdArgs) => {

    const { rootUsername, rootPassword, port, project } = args;
    const buffer = [];
    buffer.push(`MONGO_ROOT_USER=${rootUsername}`);
    buffer.push(`MONGO_ROOT_PASSWORD=${rootPassword}`);
    buffer.push(`MONGO_SERVER_PORT=${port}`);
    buffer.push(`CONTAINER_NAME=${project}`);

    return buffer.join("\n") + "\n";
}

export { run }


