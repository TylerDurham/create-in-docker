# Create in Docker

A simple NPX script to quickly setup [Mongo DB] in a [Docker] Container within an NPM project. You can run this command to add [Mongo DB] to an existing project or you can create a new one -- the script detects your existing ```package.json``` file if it exists, and creates a new one if it doesn't.

## Create Mongo in Docker

Get up and running with [Mongo DB] in a docker container in an existing project:

```
npx create-mongo-in-docker .
```
Or, specify a new project name:
```
npx create-mongo-in-docker my-mongo-docker-project
```

Call with the ```-u``` and ```-p``` flags to specify an admin username and password.
```
npx create-mongo-in-docker . -u admin -p ASecurePassword01
```

Call with the ```-i``` flag to include [Mongo Express], a lightweight GUI for managing Mongo DB.

```
npx create-mongo-in-docker . -u admin -p ASecurePassword01 -i
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

[Docker]: https://www.docker.com/
[Mongo DB]: https://www.mongodb.com/
[Mongo Express]: https://hub.docker.com/_/mongo-express