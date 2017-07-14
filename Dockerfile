FROM node

RUN mkdir /runtime
WORKDIR /runtime
ADD package.json .

RUN npm install

CMD ["npm", "run", "docker-start"]