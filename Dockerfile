# Use Node.js version 18.17.1 as a parent image
FROM node:18.17.1

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies using yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Expose a port (if needed)
EXPOSE 3000

# Build the TypeScript code
RUN yarn build:ts

# Define the command to start your Node.js application
CMD ["yarn", "start"]
