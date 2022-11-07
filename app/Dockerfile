FROM node:18-alpine3.15
RUN mkdir app
WORKDIR /app
RUN mkdir /src
WORKDIR /app/src
RUN mkdir controllers
RUN mkdir database
RUN mkdir routes
COPY src/controllers /app/src/controllers
COPY src/routes /app/src/routes
COPY src/database /app/src/database
COPY src/app.js .
COPY src/index.js .
WORKDIR /app
COPY /package.json .
WORKDIR /app/src
RUN npm install
EXPOSE 1234
CMD node index.js