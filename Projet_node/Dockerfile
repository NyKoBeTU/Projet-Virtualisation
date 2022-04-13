FROM node:8

RUN mkdir /src
WORKDIR /src

ADD package.json /src/package.json
RUN npm install

COPY . /src

EXPOSE 3000

CMD npm start