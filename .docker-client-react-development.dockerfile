# base image
FROM node:14

# Set working directory as the client dir
WORKDIR /app/client

# Install envsubst
RUN apt-get update && apt-get install -y gettext-base

# Install React Scripts
RUN npm install -g react-scripts@3

# Rebuild native modules to run on Docker, substitute environmnt vars and start the React app
CMD /bin/bash -c "npm rebuild && envsubst < env-template > .env && react-scripts start"
