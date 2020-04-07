# base image
FROM node:12

# Set default env vars
ARG JS_DOCK_ENVIRONMENT=production
ARG JS_DOCK_NGINX_HOST=localhost
ARG JS_DOCK_NGINX_PORT=80

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
