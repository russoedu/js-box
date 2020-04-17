# base image
FROM node:13

# set working directory
WORKDIR /app/api

# Install Nodemon
RUN npm install -g nodemon

# start app
CMD nodemon app.js
