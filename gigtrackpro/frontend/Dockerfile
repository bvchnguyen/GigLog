FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon

COPY . .

ENV PORT=3001

EXPOSE 3001

CMD ["nodemon", "index.js"]