FROM node:latest as build-stage

# RUN mkdir -p /app

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build --prod

FROM nginx:latest as prod-stage

COPY --from=build-stage /usr/src/app/dist/sample /usr/share/nginx/html



EXPOSE 80