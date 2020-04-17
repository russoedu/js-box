# Latest Nginx as base image
FROM nginx

# Set volumes to avoid replacement by host data
VOLUME [ "/app/client/node_modules", "/app/client/build", "/app/client/src/environments" ]

# Set default env vars
ENV JS_BOX_ANGULAR_PRODUCTION=true

# Install node 12
RUN apt-get update && apt-get install -y curl dirmngr apt-transport-https lsb-release ca-certificates gettext-base
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt -y install nodejs

# Set Nginx production config
COPY ./nginx/client-production.conf /etc/nginx/conf.d/default.conf

# Set working directory as the client dir
WORKDIR /app/client

# Install and cache app dependencies
COPY ./client-angular/package.json ./package.json
COPY ./client-angular/package-lock.json ./package-lock.json
RUN npm install --quiet

# Build the angular app
RUN npm install -g @angular/cli@9.1.1

CMD envsubst < ./src/environments/environment-template.ts > ./src/environments/environment.prod.ts && ng build --prod=true --output-path=./build && exec nginx -g 'daemon off;'
