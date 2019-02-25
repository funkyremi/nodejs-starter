FROM node:lts-slim
WORKDIR /app
COPY package.json /app
RUN npm install --production
COPY ./build/ /app
ENTRYPOINT ["node", "index.js"]
