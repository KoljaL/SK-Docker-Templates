# syntax=docker/dockerfile:1

# https://github.com/tradingstrategy-ai/frontend/blob/master/Dockerfile

#######################################
# Build stage
#######################################

FROM node:16.19.0-alpine3.16 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npm ci --prod

#######################################
# Serve stage
#######################################

FROM node:16.19.0-alpine3.16
USER node:node
WORKDIR /app
COPY --from=builder --chown=node:node /app/build ./build
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json .
CMD ["node","build"]




#######################################
# TESTS
#######################################

# FROM node:16.19.0-alpine3.16
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build



# # https://jenyus.web.app/blog/2021-05-30-setting-up-a-development-environment-for-sveltekit-with-docker-and-compose
# # Our Node base image
# FROM node:16.19.0-alpine3.16
# # Set the Node environment to development to ensure all packages are installed
# ENV NODE_ENV development
# # Change our current working directory
# WORKDIR /usr/src/app
# # Copy over `package.json` and lock files to optimize the build process
# COPY ["package.json", "package-lock.json*", "./"]
# # Install Node modules
# RUN npm install
# # Copy over rest of the project files
# COPY . .
# # Expose port 3000 for the SvelteKit app and 24678 for Vite's HMR
# EXPOSE 3000
# EXPOSE 24678
# # Run `yarn dev` and set the host to 0.0.0.0 so we can access the web app from outside
# CMD ["npm", "run", "dev", "--host", "0.0.0.0"]