FROM node:alpine

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

ENV WATCHPACK_POLLING=true

CMD yarn start