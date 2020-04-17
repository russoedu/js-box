# base image
FROM node:13

# Env vars
ENV JS_BOX_ANGULAR_PRODUCTION=true

# Set working directory as the client dir
WORKDIR /app/client

# Install envsubst
RUN apt-get update && apt-get install -y gettext-base

# Install Angular CLI
RUN npm install -g @angular/cli@9.1.1

# Substitute environmnt vars and start the Angular app
CMD envsubst < ./src/environments/environment-template.ts > ./src/environments/environment.ts && ng serve --disable-host-check --hmr=true --poll=1000 --host 0.0.0.0
