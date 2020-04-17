# base image
FROM node:13

# Set volumes to avoid replacement by host data
VOLUME [ "/app/api/node_modules" ]

# Set working directory
WORKDIR /app/api

# Install and cache app dependencies
COPY ./api/package.json ./package.json
COPY ./api/package-lock.json ./package-lock.json
RUN npm install --production

# Install PM2
RUN npm install -g pm2

# start app
CMD ["pm2-runtime", "app.js"]
