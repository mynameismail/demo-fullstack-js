FROM node:latest

WORKDIR /app/demo-fullstack-js-server

COPY server /app/demo-fullstack-js-server
COPY package.json /app/demo-fullstack-js-server/package.json

RUN npm install

EXPOSE 3000

CMD ["node", "main.js"]
