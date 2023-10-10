# Use an official Node runtime as the parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the content of the local src directory to the working directory
COPY . .

# Specify the command to run on container start
CMD ["npm", "start"]
