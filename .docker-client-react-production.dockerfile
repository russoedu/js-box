# Latest Nginx as base image
FROM nginx

# Install node 14
RUN apt-get update && apt-get install -qq curl dirmngr apt-transport-https lsb-release ca-certificates gettext-base
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt -y install nodejs

# Set Nginx production config
COPY ./nginx/client-production.conf /etc/nginx/conf.d/default.conf

# Set working directory as the client dir
WORKDIR /app/client

# Copy source
COPY ./client-react .

# Install and cache app dependencies
RUN npm install --production --silent

# Install React CLI
RUN npm install -g react-scripts@3 --silent

# Substitute env vars for the React app, build the React app and run
CMD /bin/bash -c "envsubst < env-template > .env && \
                  react-scripts build && \
                  exec nginx -g 'daemon off;'"
