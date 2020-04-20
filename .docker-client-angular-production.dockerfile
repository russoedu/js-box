# Latest Nginx as base image
FROM nginx

# Set default env vars
ARG JS_BOX_ANGULAR_PRODUCTION=true

# Install node 13
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
RUN npm install -g @angular/cli@9 --quiet

# Substitute env vars for the Angular app, build the Angular app and run
CMD /bin/bash -c "envsubst < ./src/environments/environment-template.ts > ./src/environments/environment.prod.ts && ng build --prod=true --output-path=./build && exec nginx -g 'daemon off;'"
