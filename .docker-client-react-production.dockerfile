# Latest Nginx as base image
FROM nginx

# Set default env vars
ARG JS_BOX_ENVIRONMENT=production
ARG JS_BOX_NGINX_HOST=localhost
ARG JS_BOX_NGINX_PORT=80

# Install node 12
RUN apt-get update && apt-get install -y curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt -y install nodejs

# Set Nginx production config
COPY ./nginx/client-production.conf /etc/nginx/conf.d/default.conf

# Set working directory as the client dir
WORKDIR /app/client

# Copy source
COPY ./client-react .

# Install and cache app dependencies
RUN npm install --production

# Build the react app
RUN npx react-scripts build
