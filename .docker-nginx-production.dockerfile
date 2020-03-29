# Latest Nginx as base image
FROM nginx:latest

# set working directory as the client dir
WORKDIR /app/client

# Install node 12
RUN apt-get update && apt-get install -y curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt -y install nodejs


# Install and cache app dependencies
COPY ./client/ ./
RUN npm install

# Build the app
RUN npx react-scripts build
