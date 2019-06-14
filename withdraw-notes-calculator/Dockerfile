FROM node:12-alpine

COPY . /srv

WORKDIR /srv
RUN npm install

EXPOSE 3000

CMD ["npm", "run", "server:dev"]
