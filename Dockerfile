# stage1 - build react app first 
FROM node:14-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./package*.json /app/
RUN npm i
COPY . /app
RUN npm run build

# stage 2 - build the final image and copy the react build files
FROM nginx:alpine
COPY --from=build /app/dist/blk-design-system-angular /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
