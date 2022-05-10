![Sudo-Nymd](https://avatars.githubusercontent.com/u/105267952?s=400&u=5b23774139ad9c420a39743ce89133e0ba807d9f&v=4)
# Create in Docker (Pre-Release)

**Note:** This package is a pre-release, and not all functionality is ready at this time.

A simple NPX script to quickly setup development assets (like [Mongo DB]) in a [Docker] Container within an NPM project. You can run this command to add [Mongo DB] to an existing project or you can create a new one -- the script detects your existing ```package.json``` file if it exists, and creates a new one if it doesn't.

**Command Syntax**

```
npx create-in-docker <command> <dirname> [options]
```
# Supported Commands

The following commands are supported as of this release:
## Create Mongo in Docker

Get up and running with [Mongo DB] in a docker container in an existing project.

**Generated Project Artifacts**

* ```docker-compose.yaml``` - File which can be used to start [Mongo DB] in docker. Reads options from generated ```.env``` file.
* ```.env``` - File which contains options specified when running the command.
* ```package.json``` - NPM package file which contains start/stop NPM scripts for managing the [Docker] containers. **Note:** if you have an existing ```package.json``` file, only the NPM scripts will be added.

### Command Syntax

```
npx create-in-docker mongodb <dirname> [options]
```

**Example Commands**

Create in current directory:

```
npx create-in-docker mongodb .
```
Or, specify a new project directory name:
```
npx create-in-docker mongodb my-mongo-docker-project
```

Call with the ```-u``` and ```-p``` flags to specify an admin username and password for [Mongo DB].
```
npx create-in-docker mongodb . -u admin -p ASecurePassword01
```

Call with the ```-i``` flag to include [Mongo Express], a lightweight GUI for managing Mongo DB:

```
npx create-in-docker mongodb . -u admin -p ASecurePassword01 -i
```

At this point, you have a proper ```docker-compose.yaml``` and ```.env``` file. You can tweak to further suit your needs, or if you want to get started ASAP run the following command:

```
npm run start-mongo
```

This will call ```docker-compose``` with the ```docker-compose.yaml``` and ```.env``` configuration. When you are ready to shut down, type the following command:

```
npm run stop-mongo
```

Your database data is stored in a persistent volume in between sessions.

# Local Development

## Building the Project

To see a list of [Gulp] tasks, run the following command in the project root directory:

```
gulp --tasks
```

[Docker]: https://www.docker.com/
[Gulp]: https://gulpjs.com/
[Mongo DB]: https://www.mongodb.com/
[Mongo Express]: https://hub.docker.com/_/mongo-express
