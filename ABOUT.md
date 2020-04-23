<img src="./client-react/public/favicon/favicon-72.png" alt="JS Box logo" style="float: left;"/>

# About JS Box

This project started as a learning process to better understand Docker, docker-compose. After creating the first version with [React](https://reactjs.org/), I decided to include [Angular](https://angular.io/), so I could better understand the differences.

Later on, after everything was working, I decided to include [Vue](https://vuejs.org/).

## Clients

All the clients behave the same, with the same functionalities, the same ability to access environment variables (in different ways, check the instructions).

I tried my best to name files, components and methods the same, use the same logical behaviour, but needed to adapt some parts where the frameworks differ.

I have plans to keep expanding this project with new UI frameworks and maybe other backends, also.

## Docker-compose version

I decided to use docker-compose version 2 because it allows me to use `extends` and create different configurations for dev and prod. Version 3 lost this ability.

<a name="docker"></a>

## Docker

It took me a while to understand Docker, what runs when, when the files from the host are mounted, when should I run npm install, when to run build.

# TODO / Wish list

- [x] Protect MongoDB with a password, as it can be accessed externally.
- [x] Make all clients as similar as possible, including naming and logic.
- [ ] https://preactjs.com/
- [ ] https://svelte.dev/
- [ ] https://hapi.dev/
- [ ] https://koajs.com/
- [ ] Other DBs???
- [ ] https://lumen.laravel.com/ ???
- [ ] Understand and maybe implement Webpack compilation on all versions
- [ ] "Compile" - copy all configs selected to a single place
- [ ] CLI - cli to generate the app only with the chosen configuration
- [ ] Move each client / server to another git - see how much this complicates the whole development
