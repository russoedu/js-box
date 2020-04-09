# base image
FROM node:12

# Set default env vars
ARG JS_BOX_ENVIRONMENT=development
ARG JS_BOX_NGINX_HOST=localhost
ARG JS_BOX_NGINX_PORT=80
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true

# Set working directory as the client dir
WORKDIR /app/client

# Install and cache app dependencies
COPY ./client-angular/package.json ./package.json
COPY ./client-angular/package-lock.json ./package-lock.json
RUN npm install

# Start the Angular app
RUN npm install -g @angular/cli

CMD ["ng", "serve", "--watch", "--progress", "--disable-host-check"]
