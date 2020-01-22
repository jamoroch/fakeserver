FROM node:10

RUN apt-get update && apt-get -y upgrade &&  apt-get clean

WORKDIR /usr/src/fakeserver

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
