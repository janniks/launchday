# build
FROM node:12.2.0-alpine AS build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production

COPY package.json /app/package.json
RUN npm install --silent

COPY . /app
RUN npm run build

# run
FROM nginx:1.17.3

COPY --from=build /app/build /usr/share/nginx/html
COPY docker/nginx.conf /etc/nginx/nginx.conf
