FROM node:12.18.3

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

EXPOSE 4444

CMD ["node", "server.js"]