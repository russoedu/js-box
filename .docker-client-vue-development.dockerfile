# base image
FROM node:13

# Set working directory as the client dir
WORKDIR /app/client

# Install envsubst
RUN apt-get update && apt-get install -y gettext-base

# Install Vue
RUN npm install -g @vue/cli@4 @vue/cli-service-global@4

# Rebuild native modules to run on Docker, substitute environmnt vars and start the Vue app
CMD /bin/bash -c "npm rebuild && envsubst < env-template > .env && vue serve src/main.js"
