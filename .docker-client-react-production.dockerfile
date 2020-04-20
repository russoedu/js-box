# Latest Nginx as base image
FROM nginx




# Install node 13
RUN apt-get update && apt-get install -y curl dirmngr apt-transport-https lsb-release ca-certificates gettext-base
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
RUN npm install -g react-scripts@3 --quiet

# Substitute env vars for the React app, build the React app and run
CMD /bin/bash -c "envsubst < env-template > .env && react-scripts build && exec nginx -g 'daemon off;'"
