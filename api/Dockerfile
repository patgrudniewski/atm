FROM node:12-alpine

COPY . /srv

WORKDIR /srv
RUN npm i

EXPOSE 3000

CMD ["npm", "run", "server:dev"]
