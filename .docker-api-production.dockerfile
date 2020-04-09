# base image
FROM node:13

# Set default env vars
ARG JS_BOX_ENVIRONMENT=production
ARG JS_BOX_NGINX_HOST=localhost
ARG JS_BOX_NGINX_PORT=80

# Set working directory
WORKDIR /app/api

# Install and cache app dependencies
COPY ./api/package.json ./package.json
COPY ./api/package-lock.json ./package-lock.json
RUN npm install --production --quiet

# Install PM2
RUN npm install -g pm2 --quiet

# start app
CMD ["pm2-runtime", "app.js"]
