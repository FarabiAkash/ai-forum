# AI Forum (`aiforumbd.org`) — Docker Deployment Guide

This document describes how to run **ai-forum** as a Docker Compose service behind Nginx, matching the same layout used for the other apps (`si-initiative`, `si-initiative-backend`, `email-service-flask`).

The previous PM2 process on `127.0.0.1:3002` is replaced by a container bound to the **same loopback port**, so existing Nginx + Certbot for `aiforumbd.org` can stay as-is.

---

## 1) Deployment summary

| Item | Value |
| --- | --- |
| App | `ai-forum` (Next.js 15) |
| Domain | `aiforumbd.org`, `www.aiforumbd.org` |
| Repo | `git@github.com:FarabiAkash/ai-forum.git` |
| Branch | `main` |
| Server app folder | `/srv/apps/ai-forum` (or `/srv/apps/ai-forum/repo` if that clone already exists) |
| Container name | `ai-forum` |
| Container listen | `0.0.0.0:3000` |
| Host bind | `127.0.0.1:3002` |
| Reverse proxy | Nginx → `http://127.0.0.1:3002` |
| HTTPS | Certbot (`/etc/letsencrypt/live/aiforumbd.org/`) |

Do **not** publish the app on a public host port. Nginx is the only public entry (80/443).

---

## 2) How this app fits the server layout

Same pattern as the other Docker apps:

| Domain | Repo folder on server | Host port |
| --- | --- | --- |
| `cmedinnovation.com` | `/srv/apps/si-initiative` | `127.0.0.1:3000` |
| `admin.cmedinnovation.com` | `/srv/apps/si-initiative-backend` | `127.0.0.1:3001` |
| `email.cmedinnovation.com` | `/srv/apps/email-service-flask` | `127.0.0.1:8001` |
| **`aiforumbd.org`** | **`/srv/apps/ai-forum`** | **`127.0.0.1:3002`** |

`HOST_PORT` in `.env` must stay `3002` so Nginx does not need to change.

Each repo has `Dockerfile` + `docker-compose.yml`. Next.js bakes `NEXT_PUBLIC_*` at **image build time**. If those values change, edit the server `.env` and rebuild.

---

## 3) Files in this repo

| File | Purpose |
| --- | --- |
| `Dockerfile` | Multi-stage production image (`next start` via standalone `server.js`) |
| `docker-compose.yml` | Build, restart policy, loopback port map |
| `.dockerignore` | Keep image context small (`node_modules`, `.next`, git, markdown) |
| `.env.example` | Required keys (copy to `.env` on the server; `.env` is not in git) |
| `next.config.mjs` | `output: "standalone"` for a small runtime image |

`.env` is copied into the **build** stage (it is not listed in `.dockerignore`) so `next build` can inline `NEXT_PUBLIC_*`.

---

## 4) Environment file

Create `/srv/apps/ai-forum/.env` (never commit it):

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_czczrwq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_lbdoy56
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Yj2jipxpTQMZBo3k9

# Docker maps 127.0.0.1:HOST_PORT -> container :3000
HOST_PORT=3002
```

Notes:

- `NEXT_PUBLIC_*` values are public in the browser bundle after build.
- Changing any `NEXT_PUBLIC_*` key requires `docker compose up -d --build`.
- `HOST_PORT` is only used by Compose for the host publish mapping.

---

## 5) Local test (Windows / laptop)

From the project root, with Docker Desktop running:

```bash
docker compose up -d --build
docker compose ps
curl -I http://127.0.0.1:3002
```

Expected:

- container `ai-forum` is `running` / healthy
- `curl -I http://127.0.0.1:3002` → `HTTP/1.1 200 OK`

Logs:

```bash
docker compose logs -f --tail=100
```

Stop:

```bash
docker compose down
```

---

## 6) First deploy on the server

### 6.1 Stop the old PM2 app (if it is still running)

Only needed on the original VM that used PM2:

```bash
pm2 delete ai-forum
pm2 save
ss -ltnp | grep :3002
```

Port `3002` must be free before Compose starts.

### 6.2 Clone / update the repo

If the app already lives under `/srv/apps/ai-forum/repo`, run Compose **from that folder** (where `Dockerfile` and `docker-compose.yml` are).

Fresh clone example:

```bash
sudo mkdir -p /srv/apps
sudo chown -R "$USER":"$USER" /srv/apps
cd /srv/apps
git clone git@github.com:FarabiAkash/ai-forum.git ai-forum
cd ai-forum
```

Existing clone:

```bash
cd /srv/apps/ai-forum/repo
git pull origin main
```

### 6.3 Place `.env`

```bash
cp .env.example .env
nano .env
```

Confirm `HOST_PORT=3002` and the EmailJS keys.

### 6.4 Build and start

```bash
docker compose up -d --build
docker compose ps
curl -I http://127.0.0.1:3002
```

---

## 7) Nginx (unchanged)

Site file: `/etc/nginx/sites-available/aiforumbd.org.conf`

```nginx
server {
  server_name aiforumbd.org www.aiforumbd.org;

  location / {
    proxy_pass http://127.0.0.1:3002;
    include /etc/nginx/snippets/proxy-common.conf;
  }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/aiforumbd.org/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/aiforumbd.org/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = aiforumbd.org) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


  listen 80;
  server_name aiforumbd.org www.aiforumbd.org;
    return 404; # managed by Certbot


}
```

Enable / reload only if you edited the file:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 8) HTTPS / DNS

Certificates already exist:

- `/etc/letsencrypt/live/aiforumbd.org/fullchain.pem`
- `/etc/letsencrypt/live/aiforumbd.org/privkey.pem`

Re-issue if needed:

```bash
sudo certbot --nginx -d aiforumbd.org -d www.aiforumbd.org
sudo certbot renew --dry-run
```

DNS A records should point to the VM public IP that Nginx is on.

---

## 9) Later updates (after `git push`)

```bash
cd /srv/apps/ai-forum/repo   # or /srv/apps/ai-forum if that is the clone root
git pull origin main
docker compose up -d --build
docker compose ps
curl -I http://127.0.0.1:3002
curl -I https://aiforumbd.org
```

If you changed `NEXT_PUBLIC_*` or `HOST_PORT`, edit `.env` on the server **before** `--build`.

---

## 10) Health checks

```bash
docker ps
docker compose ps
curl -I http://127.0.0.1:3002
curl -I -H "Host: aiforumbd.org" http://127.0.0.1
curl -I https://aiforumbd.org
```

Expected:

- local app: `200 OK`
- HTTP with Host header: `301` to `https://aiforumbd.org/`
- public HTTPS: `200 OK`

Logs:

```bash
docker compose logs -f --tail=200
```

---

## 11) Troubleshooting

### Port 3002 already in use

```bash
ss -ltnp | grep :3002
pm2 ls
```

Stop PM2 `ai-forum` (or whatever still binds 3002), then `docker compose up -d`.

### Container exits / unhealthy

```bash
docker compose logs --tail=200 ai-forum
```

Rebuild:

```bash
docker compose up -d --build --force-recreate
```

### EmailJS / public env looks stale

`NEXT_PUBLIC_*` is baked into the image. Edit `.env`, then:

```bash
docker compose up -d --build
```

### Nginx errors

```bash
sudo nginx -t
sudo tail -n 200 /var/log/nginx/error.log
```

---

## 12) Operational commands

```bash
docker compose ps
docker compose logs -f --tail=200
docker compose up -d --build
docker compose restart
docker compose down
```

Nginx:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 13) Backup checklist

- `/srv/apps/ai-forum/.env` (or `.../repo/.env`)
- `/etc/nginx/sites-available/aiforumbd.org.conf`
- `/etc/nginx/snippets/proxy-common.conf`
- Let's Encrypt live files for `aiforumbd.org`

---

## 14) Local vs production ports

| Place | Command | URL |
| --- | --- | --- |
| Laptop `npm run dev` | Next.js | `http://localhost:3000` |
| Laptop / server Docker | Compose `HOST_PORT=3002` | `http://127.0.0.1:3002` |
| Production site | Nginx + TLS | `https://aiforumbd.org` |
