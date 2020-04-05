# base image
FROM node:12 as js-dock-api-development

# set working directory
WORKDIR /app/api

# install and cache app dependencies
COPY ./api/package.json ./package.json
RUN npm install

RUN npm install -g nodemon


# start app
CMD ["nodemon", "app.js"]
