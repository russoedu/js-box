# base image
FROM node:13

# Set volumes to avoid replacement by host data
VOLUME [ "/app/client/node_modules", "/app/client/build" ]

# Set default env vars
ENV CHOKIDAR_USEPOLLING=true
ENV REACT_APP_NGINX_PORT=${JS_BOX_NGINX_PORT}
ENV REACT_APP_ENVIRONMENT=development
ENV REACT_APP_CLIENT=${JS_BOX_CLIENT}
ENV REACT_APP_NGINX_PORT=${JS_BOX_NGINX_PORT}
ENV REACT_APP_NGINX_HOST=${JS_BOX_NGINX_HOST}
ENV REACT_APP_MONGODB_PORT=${JS_BOX_MONGODB_PORT}

# Set working directory as the client dir
WORKDIR /app/client

# Install and cache app dependencies
COPY ./client-react/package.json ./package.json
COPY ./client-react/package-lock.json ./package-lock.json
RUN npm install

# Start the React app
RUN npm install -g react-scripts@3
CMD react-scripts start
