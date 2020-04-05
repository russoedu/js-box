# Latest Nginx as base image
FROM nginx:latest as js-dock-client

# Set default env vars
ARG JS_DOCK_ENVIRONMENT=production
ARG JS_DOCK_NGINX_HOST=localhost
ARG JS_DOCK_NGINX_PORT=80

# Set Nginx production config
COPY ./nginx/client-production.conf /app/nginx/client-production.conf
RUN envsubst < /app/nginx/client-production.conf > /etc/nginx/conf.d/default.conf

# Set working directory as the client dir
WORKDIR /app/client

# Install node 12
RUN apt-get update && apt-get install -y curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt -y install nodejs

# Install and cache app dependencies
COPY ./client/ ./
RUN npm install

# Build the react app
RUN npx react-scripts build
