FROM node:lts

ENV PORT 3000
ENV NODE_ENV production

RUN mkdir -p /usr/src/krypto
WORKDIR /usr/src/krypto

COPY package*.json /usr/src/krypto/
RUN npm install

COPY . /usr/src/krypto

RUN npm run build
EXPOSE 3000

CMD "npm" "run" "start"