import { execSync } from 'child_process';
import { style } from './cmd-styles';

/**
 * Checks if Docker is installed.
 * @returns TRUE if Docker is installed, FALSE if Docker is not installed.
 */
export const isDockerInstalled = () => {
    try {
        console.log(`You are running ${style.ok(execSync("docker -v").toString().trim())}.`);
        return true;

    } catch (err) {
        console.log(style.error(err));
        return false;
    }
}