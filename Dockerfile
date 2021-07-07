FROM node:15.8.0-alpine3.10

WORKDIR /app

COPY package-lock.json ./
COPY package.json ./

RUN apk add --no-cache build-base gcc bash cmake git
RUN npm install

COPY . .

ENTRYPOINT [ "npm","run","dev" ]