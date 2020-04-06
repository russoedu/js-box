# base image
FROM node:12 as js-dock-api-development

# Set default env vars
ARG JS_DOCK_ENVIRONMENT=development
ARG JS_DOCK_NGINX_HOST=localhost
ARG JS_DOCK_NGINX_PORT=80

# set working directory
WORKDIR /app/api

# install and cache app dependencies
COPY ./api/package.json ./package.json
RUN npm install

RUN npm install -g nodemon


# start app
CMD ["nodemon", "app.js"]
