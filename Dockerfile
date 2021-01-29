FROM node:15

MAINTAINER Maxim Zelenkin <nudepatch@gmail.com>

RUN npm install -g live-server

ENV APP_PATH /app
RUN mkdir -p $APP_PATH
WORKDIR $APP_PATH

CMD live-server public