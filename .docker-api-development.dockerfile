# base image
FROM node:12

# Set default env vars
ARG JS_DOCK_ENVIRONMENT=development
ARG JS_DOCK_NGINX_HOST=localhost
ARG JS_DOCK_NGINX_PORT=80

# set working directory
WORKDIR /app/api

# Install and cache app dependencies
COPY ./api/app.js ./app.js
COPY ./api/src ./src
COPY ./api/package.json ./package.json
COPY ./api/package-lock.json ./package-lock.json
RUN npm install

# Install Nodemon
RUN npm install -g nodemon

# start app
CMD ["nodemon", "app.js"]
