# Latest Nginx as base image
FROM nginx

# Install node 12
RUN apt-get update && apt-get install -y curl dirmngr apt-transport-https lsb-release ca-certificates gettext-base
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt -y install nodejs

# Set Nginx production config
COPY ./nginx/client-production.conf /etc/nginx/conf.d/default.conf

# Set working directory as the client dir
WORKDIR /app/client

# Copy source
COPY ./client-angular .

# Install and cache app dependencies
RUN npm install --quiet

# Install Angular CLI
RUN npm install -g @angular/cli@9.1.1

# Substitute env vars for the Angular app
RUN envsubst < ./src/environments/environment-template.ts > ./src/environments/environment.prod.ts

# Build the Angular app
RUN ng build --prod=true --output-path=./build

# Set default env vars
ENV JS_BOX_ANGULAR_PRODUCTION=true
