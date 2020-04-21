# base image
FROM node:13

# Set working directory as the client dir
WORKDIR /app/client

# Install envsubst
RUN apt-get update && apt-get install -y gettext-base

# Install React Scripts
RUN npm install -g @vue/cli@4 @vue/cli-service-global@4

# Substitute environmnt vars and start the React app
# CMD /bin/bash -c "printenv && envsubst < env-template > .env && vue serve --port=3000 src/App.vue"
CMD /bin/bash -c "vue serve src/main.js"
