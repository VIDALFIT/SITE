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
RUN printf "%s\n" \
    "User-agent: *" \
    "Allow: /" \
    "" \
    "# Sitemap" \
    "Sitemap: https://vidalfit.fr/sitemap.xml" \
    "" \
    "# Interdire l'accès aux dossiers privés" \
    "Disallow: /admin/" \
    "Disallow: /private/" \
    "Disallow: /assets/" \
    "Disallow: /.env" \
    "Disallow: /wp-admin/" \
    "Disallow: /wp-includes/" > /usr/share/nginx/html/robots.txt && \
    chmod 644 /usr/share/nginx/html/robots.txt
