# THIS DOCKERFILE IS USED BY THE DIGITALOCEAN APP PLATFORM TO BUILD THE STATIC SITE

FROM node:20-alpine

RUN apk add --no-cache libc6-compat

RUN apk add --no-cache bash

#need to set bash as default shell because pnpm setup command is expecting bash, zsh, or fish
SHELL ["/bin/bash", "-c"]

RUN npm install --global pnpm \
    && SHELL=bash pnpm setup \
    && source /root/.bashrc

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm run build

