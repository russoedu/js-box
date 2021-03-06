<img src="./client-react/public/favicon/favicon-72.png" alt="JS Box logo" style="float: left;"/>

# JS Box

JS Box is a bolierplate Docker for server + client + DB stacks.

The current version implements the following stacks:

- MERN ([MongoDB](https://www.mongodb.com/) + [Express](https://expressjs.com/) + [React](https://reactjs.org/) + [Node](https://nodejs.org/));
- MEAN ([MongoDB](https://www.mongodb.com/) + [Express](https://expressjs.com/) + [Angular](https://angular.io/) + [Node](https://nodejs.org/));
- MEVN ([MongoDB](https://www.mongodb.com/) + [Express](https://expressjs.com/) + [Vue](https://vuejs.org/) + [Node](https://nodejs.org/)).

All these versions are proxied by an [NGINX](https://www.nginx.com/) server. 

JS Box is prepared to run both in **development** as in **production** mode, so you can easily create your project with a ready-made base. This should speed up the creation of client/server apps using any of these stacks.

<a name="back1"></a>In the development mode, both server and client files are updated in Docker as they are changed in your host machine<sup>[1](#footnote1)</sup>.

In the production mode, the client is compiled in the `build` folder and the static files are served through Nginx.

# Configuration

To configure JS Box, make a copy of `.env example` and save it as `.env` and change the configurations to suit your needs.

```
###### ENVIRONMENT => development OR production
JS_BOX_ENVIRONMENT=development

###### CLIENT => react, angular OR vue
JS_BOX_CLIENT=react

###### EXTERNAL ACCESS => host, port and DB port
JS_BOX_ACCESS_HOST=localhost
JS_BOX_ACCESS_PORT=8020
JS_BOX_MONGODB_PORT=9020

###### EXTERNAL PROTOCOL => server respond HTTP, but you could (you should!) deploy this behind a HTTPS load balancer, so the client needs this to access the api
JS_BOX_ACCESS_PROTOCOL=http

###### MONGO DB CONFIG => username and password
JS_BOX_MONGO_USERNAME=admin
JS_BOX_MONGO_PASSWORD=S3cret4ccessP4ssw0rd


###### DEVELOPMENT ONLY EXTERNAL PORTS => ports to directly access client and API
JS_BOX_DEV_CLIENT_PORT=3020
JS_BOX_DEV_API_PORT=4020

```

## Available external ports

The main system is accessible on the host and port defined in `JS_BOX_ACCESS_HOST` and `JS_BOX_ACCESS_PORT`.

MongoDB accessible on the port defined in `JS_BOX_MONGODB_PORT`.

In development mode, the client can be accessed on port `JS_BOX_DEV_CLIENT_PORT` and the API on port `JS_BOX_DEV_API_PORT`. **In production mode, these ports are closed**.

# Development mode

Running in with `JS_BOX_ENVIRONMENT` as **development** uses the host's `node_module` folder both for the client you chose and the API, so, before running `docker-compose up` you need to go to each folder (client and API) and run.

```
npm install
```

<a name="back2"></a>This will install all dependencies in the host machine that will be used by the Docker machine.<sup>[2](#footnote2)</sup>

## Accessing the machines

To access the Docker machines, you can use the command:

```
docker exec -it js-box-DOCKER_NAME /bin/bash
```

Replace `DOCKER_NAME` by the name and environment of the machine you wish to access, I.e.:

```
docker exec -it js-box-client-development-angular /bin/bash
```

or

```
docker exec -it js-box-client-production-react /bin/bash
```

or

```
docker exec -it js-box-nginx-production-react /bin/bash
```

# Environment variables

To expose env vars to the clients, you need to edit some specific files. The API doesn't need any configuration, all vars set in the `.env` file are accessible by the API app.

JS Box replaces all vars set in the root `.env` with the ones set in these configs files using the special `${VAR_NAME}` variable.

## Angular

On the client-angular, on `src/environments`, edit the `env-template.ts` file to include env vars you want to be able to access in Angular. 

## React

On the client-react, edit the `env-template` file to include env vars you want to be able to access in React.

**React only has access to vars if their name begins with `REACT_APP`.**

## Vue

On the client-vue, edit the `env-template` file to include env vars you want to be able to access in Vue.

**Vue only has access to vars if their name begins with `VUE_APP`.**

# Running

After configuring the system via the `.env` file, run:

```
docker-compose up --build -d
```

Docker will build the containers and images and run in the background. Remove the `-d` option to run in the foreground. Use `CONTROL + C` to stop it. <sup>[more about Docker](#docker)</sup>

To stop the containers, run:

```
docker-compose stop
```


If you want to delete ALL images and containers from Docker, you can run:

```
prune
```

# Log files

Log files generated by the servers running on Docker will be also accessible on the host in the `logs` folder.

Each server saves logs in their specific folder.

# About

[Read more about this project](/ABOUT.md)

# Footnotes

<a name="footnote1">1</a>: Some issues might occour, mostly when installing new packages via NPM, as they might have different native version from your host machine and the Docker container. <sup>[back](#back1)</sup>

<a name="footnote2">2</a>: In development mode, Docker executes `npm rebuild` before starting to make sure native dependencies are replaced to match the Docker container environment. <sup>[back](#back2)</sup>
