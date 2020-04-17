# base image
FROM node:13

# Set default env vars
ENV REACT_APP_NGINX_PORT=${JS_BOX_NGINX_PORT}
ENV REACT_APP_ENVIRONMENT=development
ENV REACT_APP_CLIENT=${JS_BOX_CLIENT}
ENV REACT_APP_NGINX_PORT=${JS_BOX_NGINX_PORT}
ENV REACT_APP_NGINX_HOST=${JS_BOX_NGINX_HOST}
ENV REACT_APP_MONGODB_PORT=${JS_BOX_MONGODB_PORT}

# Set working directory as the client dir
WORKDIR /app/client

# Install React Scripts
RUN npm install -g react-scripts@3

# Start the React app
CMD react-scripts start
