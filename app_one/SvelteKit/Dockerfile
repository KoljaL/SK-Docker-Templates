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