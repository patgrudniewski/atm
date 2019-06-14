FROM node:12-alpine

RUN apk add \
    git

COPY . /srv
WORKDIR /srv

RUN npm --global install @angular/cli
RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host=0.0.0.0"]
