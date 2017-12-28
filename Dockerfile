FROM node:8-alpine as build

WORKDIR /sources
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.13-alpine
WORKDIR /usr/share/nginx/html/
COPY --from=build /sources/dist ./dist
COPY index.html .
COPY todo.css .
CMD ["nginx", "-g", "daemon off;"]
