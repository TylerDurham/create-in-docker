export interface ICmdContext {

}

export interface ICmdArgs {
    name?: string;
    cwd: string;
    project: string;
}

export interface IMongoInDockerCmdArgs extends ICmdArgs {
    rootUsername: string | undefined;
    rootPassword: string | undefined;
    includeMongoExpress: boolean;
    port: number;
}