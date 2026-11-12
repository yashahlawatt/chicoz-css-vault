# CHICOZ CSS VAULT — production container
# Build:  docker build -t chicoz-css-vault .
# Run:    docker run -p 3000:3000 -e NEXT_PUBLIC_SITE_URL=https://chicozcssvault.eu.org chicoz-css-vault

FROM oven/bun:1 AS base
WORKDIR /app
# Prisma needs the env var at build time (client instantiation is lazy, no DB
# connection is made during the build).
ENV DATABASE_URL=file:/app/db/custom.db

# ---------- deps ----------
FROM base AS deps
COPY package.json bun.lock ./
COPY prisma ./prisma
RUN bun install --frozen-lockfile
RUN bunx prisma generate

# ---------- build ----------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# ---------- runtime ----------
FROM base AS runner
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Standalone output already contains .next/static and public (copied by the
# build script). Bring the server, its node_modules subset and the SQLite DB.
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/db ./db

EXPOSE 3000
CMD ["bun", "server.js"]
