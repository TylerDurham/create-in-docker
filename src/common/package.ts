import * as fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { ICmdArgs } from './interfaces';
import { keywords } from './cmd-styles';

/**
 * Ensures that the project directory exists and package.json exists.
 * @param args The current working directory and the project directory name.
 */
export const ensure = (args: ICmdArgs) => {
    ensureDirectory(args);
    ensurePackageJson(args);
}

/**
 * Ensures the project directory exists... creates the directory if it doesn't exist.
 * @param args The current working directory and the project directory name.
 */
const ensureDirectory = (args: ICmdArgs) => {
    try {
        fs.accessSync(args.cwd, fs.constants.R_OK);
        console.debug(`Sweet... project directory ${keywords(args.project)} already exists.`);
    } catch (err) {
        console.debug(`Creating project directory ${keywords(args.project)} because it did not exist.`);
        fs.mkdirSync(args.cwd);
        process.chdir(args.cwd);
    }
}

/**
 * Ensures package.json exists in the current project directory... creates package.json if it doesn't exist.
 * @param args The current working directory and the project directory name.
 */
const ensurePackageJson = (args: ICmdArgs) => {
    const fileName = "package.json";
    try {
        fs.accessSync(path.join(args.cwd, fileName), fs.constants.R_OK);
        console.debug(`Cool! ${keywords(fileName)} already exists in ${keywords(args.project)}.`);
    } catch {
        console.debug(`Creating ${keywords(fileName)} in ${keywords(args.project)} because it did not exist.`);
        execSync(`npm init -y`).toString();
    }
}