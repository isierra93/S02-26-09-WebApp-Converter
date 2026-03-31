# ==========================================
# 1. Etapa de Dependencias
# ==========================================
FROM node:20-alpine AS deps

WORKDIR /app

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ==========================================
# 2. Etapa de Build
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

RUN corepack enable pnpm

# Copiamos dependencias instaladas
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build de produccion de Next.js
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}
RUN pnpm run build

# ==========================================
# 3. Etapa de Ejecucion (imagen final liviana)
# ==========================================
FROM node:20-alpine

WORKDIR /app

RUN corepack enable pnpm

# Copiamos solo lo necesario para ejecutar
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

# Ejecutamos en modo produccion
CMD ["pnpm", "start"]