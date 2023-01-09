FROM node:14-alpine as base
ADD . /app
WORKDIR /app
COPY package.json .
RUN npm install --production

FROM node:10-alpine
WORKDIR /app
COPY --from=base /app /app
EXPOSE 8080
CMD [ "node", "get_ex1.js" ]