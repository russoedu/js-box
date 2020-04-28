# Latest Nginx as base image
FROM nginx

# Install node 14
RUN apt-get update && apt-get install -y curl dirmngr apt-transport-https lsb-release ca-certificates gettext-base
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt -y install nodejs

# Set Nginx production config
COPY ./nginx/client-production.conf /etc/nginx/conf.d/default.conf

# Set working directory as the client dir
WORKDIR /app/client

# Copy source
COPY ./client-vue .

# Install and cache app dependencies
RUN npm install --silent

# Install Vue CLI
RUN npm install -g @vue/cli@4 @vue/cli-service-global@4 --silent

# Substitute env vars for the Vue app, build the Vue app and run
CMD /bin/bash -c "envsubst < env-template > .env && \
                  vue build src/main.js --dest build && \
                  exec nginx -g 'daemon off;'"
