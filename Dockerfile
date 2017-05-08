FROM node

RUN mkdir /runtime
WORKDIR /runtime

ADD package.json .
ADD app ./app
ADD webpack.config.js .

RUN npm install
RUN npm install webpack -g
RUN npm install webpack-dev-server -g

#EXPOSE 8008:8008

CMD ["npm", "run", "docker-start"]
#CMD ["ls"]