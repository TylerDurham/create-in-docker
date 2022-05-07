import { isDockerInstalled } from "./docker";
import { style } from "./style";

if (!isDockerInstalled()) {
    console.warn(`${style.bold(style.error('WARNING!'))} ${style.warning('Docker does not appear to be installed.')}`);
} 


