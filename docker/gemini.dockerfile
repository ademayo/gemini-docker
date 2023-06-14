FROM node:lts-alpine

USER node
WORKDIR /usr/src/app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
EXPOSE 1965
CMD [ "yarn", "start" ]