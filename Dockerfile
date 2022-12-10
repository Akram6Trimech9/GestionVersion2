FROM  node:12.22.12-alpine3.15 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
WORKDIR /app
COPY    nginx.conf  /etc/nginx/nginx.conf
COPY   --from=node /app/dist/GestionApplication  /usr/share/nginx/html

