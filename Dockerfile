# ---- Base Node ----
FROM node:18-slim AS base
WORKDIR /app
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
# Install node packages
RUN npm set progress=false && npm config set depth 0
# Install ALL node_modules, including 'devDependencies'
RUN npm install

# ---- Precheck & Build ----
FROM dependencies AS build
COPY . /app

# Running precheck (linting, type-checking, and formatting)
RUN npm run precheck

# Build the React app
RUN npm run build

# ---- Release ----
FROM nginx:alpine AS release
# Copy Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy production build from build stage
COPY --from=build /app/build /usr/share/nginx/html
# Expose port 80
EXPOSE 80
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
