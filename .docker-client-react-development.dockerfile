# base image
FROM node:13

# Set working directory as the client dir
WORKDIR /app/client

# Install React Scripts
RUN npm install -g react-scripts@3

# Substitute environmnt vars and start the React app
CMD envsubst < ./env-template > ./.env && react-scripts start
