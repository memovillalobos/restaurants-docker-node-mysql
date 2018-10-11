FROM node:7
WORKDIR /app
COPY /app/package.json /app
RUN npm install
COPY /app/. /app
CMD node app.js
