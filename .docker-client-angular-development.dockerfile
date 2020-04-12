# base image
FROM node:13

# Set default env vars
ENV CHOKIDAR_USEPOLLING=true

# Set working directory as the client dir
WORKDIR /app/client

# Install and cache app dependencies
COPY ./client-angular/package.json ./package.json
COPY ./client-angular/package-lock.json ./package-lock.json
RUN npm install

# Start the Angular app
RUN npm install -g @angular/cli@9.1.1
CMD ["ng", "serve", "--disable-host-check", "--hmr=true", "--poll=1000", "--host", "0.0.0.0"]
