FROM node:latest as node

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli

COPY . .

CMD npm install && ng serve -o --host=0.0.0.0 --port=4200
EXPOSE 4200
