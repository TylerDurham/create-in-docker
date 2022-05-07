import { isDockerInstalled } from "./docker";
import { style } from "./style";

const run = () => {
    if (!isDockerInstalled()) {
        console.warn(`${style.bold(style.error('WARNING!'))} ${style.warning('Docker does not appear to be installed.')}`);
    }
}

export { run }


