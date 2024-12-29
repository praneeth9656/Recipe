FROM node:20-alpine

WORKDIR /recipe


COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 3000

ENTRYPOINT [ "npm" ,"start" ]
