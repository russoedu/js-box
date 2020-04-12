# base image
FROM node:13

# Set default env vars
ENV CHOKIDAR_USEPOLLING=true

# Set working directory as the client dir
WORKDIR /app/client

# Install and cache app dependencies
COPY ./client-react/package.json ./package.json
COPY ./client-react/package-lock.json ./package-lock.json
RUN npm install

# Start the React app
RUN npm install -g react-scripts@3
CMD ["react-scripts", "start"]
