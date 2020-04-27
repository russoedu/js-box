# base image
FROM node:14

# set working directory
WORKDIR /app/api

# Install Nodemon
RUN npm install -g nodemon

# start app
CMD nodemon --trace-warnings app.js
