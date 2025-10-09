# ------------------------------ Build stage ------------------------------
FROM node:22-slim AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm ci
RUN npx prisma generate

COPY . .
RUN npm run build

# Prune dev dependencies
RUN npm prune --production

# ------------------------------ Production stage ------------------------------
FROM node:22-slim
ENV NODE_ENV=production
WORKDIR /app

# Install OpenSSL and required libraries
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    openssl \
    libssl3 \
    ca-certificates \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app


# Copy everything needed from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./

# Copy prisma engines to avoid prisma errors
RUN mkdir -p ./build/server/
COPY --from=builder /app/app/utils/server/generated/libquery_engine-*.so.node ./build/server/
COPY --from=builder /app/app/utils/server/generated/libquery_engine-*.dylib.node ./build/server/


EXPOSE 3000

# Distroless uses different CMD format
CMD ["npm", "run", "start:docker"]
