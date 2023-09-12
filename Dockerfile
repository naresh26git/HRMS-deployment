# Use the official Node.js image as the base image
FROM node:18.17.1

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the Node.js application from the /opt directory to the working directory
COPY /opt/node_app.tar.gz /app/

# Extract the Node.js application
RUN tar -xzvf node_app.tar.gz

# Remove the tarball
RUN rm node_app.tar.gz

# Expose the port on which your Node.js app listens
EXPOSE 3000

# Start the Node.js application
CMD ["node", "app.js"]
