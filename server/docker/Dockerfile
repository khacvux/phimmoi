FROM node:16

EXPOSE 8001

WORKDIR /app

RUN npm i npm@latest -g

COPY package.json package-lock.json ./

RUN npm install

COPY . . 

CMD ['node', 'dist/index.js']
