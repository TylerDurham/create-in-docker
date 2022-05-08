import path from "path";
import fs from 'fs';
import { IMongoInDockerCmdArgs } from "./interfaces";
import { keywords } from "./cmd-styles";

export const ensure = (args: IMongoInDockerCmdArgs, buffer: string) => {

    const { cwd } = args;

    try {
        console.debug(`Writing to ENV file ${keywords(".env")}.`);
        fs.writeFileSync(path.join(cwd, '.env'), buffer.toString() + "\n", { flag: 'a+' });
        
        return true;
    } catch (err) {
        console.error(`ERROR writing to "${path.join(cwd, '.env')}": ${err}`);
        return false;
    }
}