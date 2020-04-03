# base image
FROM node:12 as js-dock-api

# set working directory
WORKDIR /app/api

# install and cache app dependencies
COPY ./api/package.json /app/api/package.json
RUN npm install

RUN npm install -g pm2


# start app
CMD ["pm2-runtime", "app.js"]
