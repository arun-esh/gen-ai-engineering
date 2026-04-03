# Stage 1: Build the application
FROM node:22-slim AS builder

# Install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Copy workspace configuration
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# Copy necessary library dependencies
# Note: We copy the whole lib and artifacts folders to ensure all workspace refs are resolved
COPY lib/ ./lib/
COPY artifacts/gen-ai-engineering ./artifacts/gen-ai-engineering

# Install dependencies (only what's needed for the web app)
RUN pnpm install --frozen-lockfile

# Build the web app
RUN pnpm --filter @workspace/gen-ai-engineering build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Cloud Run requires the server to listen on port 8080
ENV PORT 8080

# Copy the build output from the builder stage
# Based on your vite.config.ts, the output is in dist/public
COPY --from=builder /app/artifacts/gen-ai-engineering/dist/public /usr/share/nginx/html

# Configure Nginx for SPA (Single Page Application) routing
# This ensures that routes like /about or /services work correctly on refresh
RUN echo 'server { \
    listen 8080; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
    # Optional: Cache static assets for better performance \
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ { \
        expires 30d; \
        add_header Cache-Control "public, no-transform"; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
