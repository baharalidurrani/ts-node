FROM node:alpine
# RUN apk add g++ make python

WORKDIR /usr/src/app

# Separate docker layer for npm install (faster cached install)
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# ENV VM=1

COPY . .
RUN pnpm build

EXPOSE 8000
CMD [ "pnpm", "serve" ]
