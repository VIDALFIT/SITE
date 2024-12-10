# Build stage
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/ .
COPY docker/prod/nginx/default.conf /etc/nginx/conf.d/default.conf
