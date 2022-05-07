import { execSync } from "child_process";
import { style } from "./cmd-styles";

export const isDockerInstalled = () => {
    try {
        console.log(`You are running ${style.ok(execSync("docker -v").toString().trim())}.`);
        return true;

    } catch (err) {
        console.log(style.error(err));
        return false;
    }
}