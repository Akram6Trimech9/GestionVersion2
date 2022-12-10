FROM  node:12.18.2  as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
WORKDIR /app
COPY    nginx.conf  /etc/nginx/nginx.conf
COPY   --from=node /app/dist/clrfms  /usr/share/nginx/html

