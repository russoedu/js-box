# base image
FROM node:14

# Set working directory
WORKDIR /app/api

# Copy source
COPY ./api .

# Install and cache app dependencies
RUN npm install --production

# Install PM2
RUN npm install -g pm2

# start app
CMD pm2-runtime app.js
