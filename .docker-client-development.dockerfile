# base image
FROM node:12

# Set default env vars
ARG JS_DOCK_ENVIRONMENT=development
ARG JS_DOCK_NGINX_HOST=localhost
ARG JS_DOCK_NGINX_PORT=80
ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true

# Set working directory as the client dir
WORKDIR /app/client

# Install and cache app dependencies
COPY ./client/package.json ./package.json
COPY ./client/package-lock.json ./package-lock.json
RUN npm install

# Start the React app
CMD ["npx", "react-scripts", "start"]
