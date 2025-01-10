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

# Ajout du robots.txt
RUN echo "User-agent: *\n\
Allow: /\n\
\n\
# Sitemap\n\
Sitemap: https://vidalfit.fr/sitemap.xml\n\
\n\
# Interdire l'accès aux dossiers privés\n\
Disallow: /admin/\n\
Disallow: /private/\n\
Disallow: /assets/\n\
Disallow: /.env\n\
Disallow: /wp-admin/\n\
Disallow: /wp-includes/" > /usr/share/nginx/html/robots.txt && \
chmod 644 /usr/share/nginx/html/robots.txt
