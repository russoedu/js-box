# Latest Nginx as base image
FROM nginx

# Set default env vars
ARG JS_DOCK_ENVIRONMENT=production
ARG JS_DOCK_NGINX_HOST=localhost
ARG JS_DOCK_NGINX_PORT=80

# Install node 12
RUN apt-get update && apt-get install -y curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt -y install nodejs

# Set Nginx production config
COPY ./nginx/client-production.conf /etc/nginx/conf.d/default.conf

# Set working directory as the client dir
WORKDIR /app/client

# Install and cache app dependencies
COPY ./client/package.json ./package.json
COPY ./client/package-lock.json ./package-lock.json
RUN npm install --production

# Build the react app
COPY ./client/src ./src
COPY ./client/public ./public
RUN npx react-scripts build
