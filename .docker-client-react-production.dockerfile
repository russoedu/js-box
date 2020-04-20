# Latest Nginx as base image
FROM nginx

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
RUN npm install --production --quiet

# Install React CLI
RUN npm install -g react-scripts

# Build the React app
RUN react-scripts build

# Set default env vars
ENV REACT_APP_NGINX_PORT=${JS_BOX_NGINX_PORT}
ENV REACT_APP_ENVIRONMENT=production
ENV REACT_APP_CLIENT=${JS_BOX_CLIENT}
ENV REACT_APP_NGINX_PORT=${JS_BOX_NGINX_PORT}
ENV REACT_APP_NGINX_HOST=${JS_BOX_NGINX_HOST}
ENV REACT_APP_MONGODB_PORT=${JS_BOX_MONGODB_PORT}
