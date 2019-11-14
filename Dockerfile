
FROM node:latest
MAINTAINER Lam Nguyen Ngoc<panasoniclam997@gmail.com>

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Bundle app src
COPY package.json /app
RUN npm install
# Bundle app source
COPY . /app

EXPOSE 3000
CMD [ "node", "/backend-rocketchat/server.js"]