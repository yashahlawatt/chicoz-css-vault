# Sharing CHICOZ CSS VAULT with the world

The sandbox preview URL is private to your session — nobody else can open it.
To give your friend (or anyone) a working link, publish the app on a public
host. Everything needed is already in this repo: standalone Next.js output,
`Dockerfile`, `.env.example`, and a SQLite database with zero external deps.

---

## Option 1 — Vercel (easiest, free, ~5 minutes)

> Best if you don't own a server. You get a free `https://<your-app>.vercel.app` URL.

1. Put the project on GitHub:

   ```bash
   cd my-project
   git init && git add -A && git commit -m "CHICOZ CSS VAULT"
   git remote add origin https://github.com/<you>/chicoz-css-vault.git
   git push -u origin main
   ```

2. Go to https://vercel.com/new → import the repo → Deploy.
   (Framework preset: Next.js. No env vars required — `NEXT_PUBLIC_SITE_URL`
   defaults to the brand domain; set it to the Vercel URL for clean canonicals.)

3. Share `https://<your-app>.vercel.app` with your friend. Done.

**Note on favorites:** Vercel's filesystem is ephemeral, so the SQLite file
resets between requests. The site handles this gracefully — favorites keep
working per-device via the localStorage fallback. If you want shared
server-side favorites later, swap the Prisma provider to Postgres/Neon or
Turso (both have free tiers).

---

## Option 2 — Docker on any VPS (full persistence)

> Best if you have (or want) a cheap/free server: Oracle Cloud free tier,
> Hetzner, DigitalOcean, a home Raspberry Pi, etc. Favorites persist in SQLite.

```bash
# on the server, inside the project folder
docker build -t chicoz-css-vault .
docker run -d --name chicoz --restart unless-stopped -p 80:3000 \
  -e NEXT_PUBLIC_SITE_URL=http://<your-server-ip-or-domain> \
  chicoz-css-vault
```

Your friend opens `http://<your-server-ip-or-domain>`.

**Free domain options:** nic.eu.org (free eu.org subdomain), DuckDNS, or any
domain registrar. Point an A record at your server IP.

---

## Option 3 — Instant demo link from your own machine (no deploy)

If the project runs on your laptop, expose it for a quick demo in seconds:

```bash
# with Node installed
npx localtunnel --port 3000
# or: ngrok http 3000   /   cloudflared tunnel --url http://localhost:3000
```

You get a temporary public HTTPS URL — perfect for "check this out", not for
permanent hosting.

---

## Production build (any host, no Docker)

```bash
bun install
bun run db:push        # creates db/custom.db
bun run build          # standalone output in .next/standalone
bun run start          # serves on :3000
```

Environment variables (see `.env.example`):

| Variable               | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL` | Canonical / OG URL — set to your domain    |
| `DATABASE_URL`         | SQLite file, e.g. `file:/app/db/custom.db` |
