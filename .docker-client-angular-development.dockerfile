# base image
FROM node:14

# Env vars
ENV JS_BOX_ANGULAR_PRODUCTION=false

# Set working directory as the client dir
WORKDIR /app/client

# Install envsubst
RUN apt-get update && apt-get install -qq gettext-base

# Install Angular CLI
RUN npm install -g @angular/cli@9

# Rebuild native modules to run on Docker, substitute environmnt vars and start the Angular app
CMD /bin/bash -c "npm rebuild && \
                  envsubst < ./src/environments/env-template.ts > ./src/environments/environment.ts && \
                  ng serve --disable-host-check --hmr=true --poll=1000 --host 0.0.0.0"
