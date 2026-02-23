FROM node:20-alpine

WORKDIR /app

# Activamos pnpm
RUN corepack enable pnpm

# Copiamos los archivos de dependencias y las instalamos
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copiamos todo el código fuente del frontend
COPY . .

EXPOSE 3000

# Levantamos la app
CMD ["pnpm", "run", "dev"]