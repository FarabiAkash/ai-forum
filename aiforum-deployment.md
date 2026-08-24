# AI Forum (`aiforumbd.org`) — Docker Deployment Guide

Live production is **Docker Compose + Nginx** on `srv1895345` (`187.77.140.187`), beside CMED and Susastho.

The old Azure VM (`20.198.17.229`) used **PM2**. That is not this server.

---

## 1) Live summary (as deployed)

| Item | Value |
| --- | --- |
| Host | `srv1895345` |
| Public IP | `187.77.140.187` |
| App | `ai-forum` (Next.js 15) |
| Domain | `aiforumbd.org` |
| Repo | `git@github.com:FarabiAkash/ai-forum.git` |
| Branch | `main` |
| App folder | `/srv/apps/ai-forum` |
| Container | `ai-forum` (`ai-forum:latest`) |
| Host bind | `127.0.0.1:3002` → container `:3000` |
| Nginx site | `/etc/nginx/sites-available/aiforumbd.org` |
| Enabled as | `/etc/nginx/sites-enabled/aiforumbd.org` |
| TLS | Certbot **webroot** `/var/www/certbot` |
| Cert files | `/etc/letsencrypt/live/aiforumbd.org/fullchain.pem` |
| Cert expiry | **2026-11-22** (auto-renew scheduled) |

Do **not** publish the app on a public host port. Nginx is the only public entry (80/443).

`www.aiforumbd.org` had **no A record** at deploy time. The certificate was issued for **`aiforumbd.org` only**. HTTP still lists `www` for ACME; HTTPS `server_name` is the apex.

---

## 2) Server layout (this box)

| Domain | Repo folder | Host port | Container |
| --- | --- | --- | --- |
| `cmedinnovation.com` | `/srv/apps/si-initiative` | `127.0.0.1:3000` | `si-initiative-web-1` |
| `admin.cmedinnovation.com` | `/srv/apps/si-initiative-backend` | `127.0.0.1:3001` | `si-initiative-backend-web-1` |
| `email.cmedinnovation.com` | `/srv/apps/email-service-flask` | `127.0.0.1:8001` | `email-service-flask-api-1` |
| **`aiforumbd.org`** | **`/srv/apps/ai-forum`** | **`127.0.0.1:3002`** | **`ai-forum`** |
| (Susastho backend) | | `127.0.0.1:8000` | `susastho-backend` |
| (Susastho frontend) | | `127.0.0.1:4200` | `susastho-frontend` |

Do **not** use host `8000` (susastho-backend), `8001` (email), `3000`, or `3001`.

`HOST_PORT` in `.env` must stay `3002`.

Each repo has `Dockerfile` + `docker-compose.yml`. Next.js bakes `NEXT_PUBLIC_*` at **image build time**. If those values change, edit the server `.env` and rebuild.

This server does **not** use `/etc/nginx/snippets/proxy-common.conf`. Proxy headers are inline, same as `cmedinnovation.com`. TLS is **webroot**, not `certbot --nginx`.

---

## 3) Files in this repo

| File | Purpose |
| --- | --- |
| `Dockerfile` | Multi-stage production image (standalone `server.js`) |
| `docker-compose.yml` | Build, `restart: unless-stopped`, loopback port map |
| `.dockerignore` | Keeps `node_modules`, `.next`, git, markdown out of the context |
| `.env.example` | Required keys (copy to `.env`; `.env` is not in git) |
| `next.config.mjs` | `output: "standalone"` |

`.env` is **not** listed in `.dockerignore`, so `COPY . .` during build can read `NEXT_PUBLIC_*`.

---

## 4) Environment file

Path on server: `/srv/apps/ai-forum/.env` (never commit).

```bash
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_czczrwq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_lbdoy56
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Yj2jipxpTQMZBo3k9
HOST_PORT=3002
```

Notes:

- `NEXT_PUBLIC_*` is inlined into the browser bundle at build time.
- Changing any `NEXT_PUBLIC_*` key requires `docker compose up -d --build`.
- `HOST_PORT` is only used by Compose for the host publish mapping.

---

## 5) First deploy (what was actually run)

Run as `root` on `srv1895345`.

### 5.1 Check host and free port

```bash
curl -4 ifconfig.me; echo
ss -ltnp | grep -E ':80|:443|:3002' || true
ls /srv/apps
docker ps
```

Expected: public IP `187.77.140.187`, Nginx on 80/443, **no** listener on `3002`.

### 5.2 GitHub SSH

```bash
ssh -T git@github.com
```

Expected: `Hi FarabiAkash! You've successfully authenticated...`

### 5.3 Clone

```bash
cd /srv/apps
git clone git@github.com:FarabiAkash/ai-forum.git ai-forum
cd /srv/apps/ai-forum
ls Dockerfile docker-compose.yml .env.example
```

### 5.4 Create `.env`

```bash
cd /srv/apps/ai-forum
cat > .env <<'EOF'
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_czczrwq
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_lbdoy56
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=Yj2jipxpTQMZBo3k9
HOST_PORT=3002
EOF
```

### 5.5 Build and start

```bash
cd /srv/apps/ai-forum
docker compose up -d --build
docker compose ps
curl -I http://127.0.0.1:3002
```

Expected: container `ai-forum` **healthy**, `127.0.0.1:3002->3000/tcp`, `HTTP/1.1 200 OK`.

### 5.6 Nginx HTTP-only (before the cert exists)

Site name matches the other apps on this box: **no `.conf` suffix**.

```bash
cat > /etc/nginx/sites-available/aiforumbd.org <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name aiforumbd.org www.aiforumbd.org;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

ln -sf /etc/nginx/sites-available/aiforumbd.org /etc/nginx/sites-enabled/aiforumbd.org
nginx -t
systemctl reload nginx
curl -I -H "Host: aiforumbd.org" http://127.0.0.1
```

`$connection_upgrade` is already defined in this server’s main Nginx config (same as CMED).

### 5.7 DNS

```bash
dig +short aiforumbd.org A
dig +short www.aiforumbd.org A
```

At deploy time:

- `aiforumbd.org` → `187.77.140.187`
- `www.aiforumbd.org` → empty

### 5.8 Certificate (webroot, apex only)

```bash
ls -ld /var/www/certbot
certbot certonly --webroot -w /var/www/certbot -d aiforumbd.org --non-interactive --agree-tos
```

Saved at:

- `/etc/letsencrypt/live/aiforumbd.org/fullchain.pem`
- `/etc/letsencrypt/live/aiforumbd.org/privkey.pem`

### 5.9 Nginx HTTP→HTTPS (final)

```bash
cat > /etc/nginx/sites-available/aiforumbd.org <<'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name aiforumbd.org www.aiforumbd.org;

    location ^~ /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name aiforumbd.org;

    ssl_certificate     /etc/letsencrypt/live/aiforumbd.org/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/aiforumbd.org/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers off;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 1d;
    ssl_session_tickets off;
    add_header Strict-Transport-Security "max-age=31536000" always;

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

nginx -t
systemctl reload nginx
curl -I https://aiforumbd.org
```

Expected: `HTTP/2 200`.

---

## 6) Redeploy (after `git push` to `main`)

```bash
cd /srv/apps/ai-forum
git pull origin main
docker compose up -d --build
docker compose ps
curl -I http://127.0.0.1:3002
curl -I https://aiforumbd.org
```

If you changed `NEXT_PUBLIC_*` or `HOST_PORT`, edit `/srv/apps/ai-forum/.env` **before** `--build`.

Logs:

```bash
cd /srv/apps/ai-forum
docker compose logs -f --tail=200
```

---

## 7) Health checks

```bash
docker ps
cd /srv/apps/ai-forum && docker compose ps
curl -I http://127.0.0.1:3002
curl -I -H "Host: aiforumbd.org" http://127.0.0.1
curl -I https://aiforumbd.org
```

Expected after TLS is live:

- local app: `200 OK`
- HTTP Host header: `301` to `https://aiforumbd.org/`
- public HTTPS: `HTTP/2 200`

---

## 8) Optional: add `www`

1. DNS: `www.aiforumbd.org` A → `187.77.140.187` (or CNAME to `@`).
2. Expand the cert:

```bash
certbot certonly --webroot -w /var/www/certbot -d aiforumbd.org -d www.aiforumbd.org --non-interactive --agree-tos
```

3. Add `www.aiforumbd.org` to the HTTPS `server_name` line, then `nginx -t` and `systemctl reload nginx`.

---

## 9) Local laptop test

From the project root, with Docker Desktop running:

```bash
docker compose up -d --build
docker compose ps
curl -I http://127.0.0.1:3002
```

`restart: unless-stopped` means the container comes back after a PC reboot unless you stop it:

```bash
docker compose down
```

---

## 10) Troubleshooting

### Port 3002 already in use

```bash
ss -ltnp | grep :3002
docker ps
```

Do not start a second Compose project on the same port.

### Container exits / unhealthy

```bash
cd /srv/apps/ai-forum
docker compose logs --tail=200 ai-forum
docker compose up -d --build --force-recreate
```

### EmailJS / public env looks stale

`NEXT_PUBLIC_*` is baked into the image. Edit `.env`, then rebuild.

### Nginx errors

```bash
nginx -t
tail -n 200 /var/log/nginx/error.log
```

### Certificate renew

```bash
certbot renew --dry-run
```

Renewal uses the same webroot (`/var/www/certbot`). Keep the `/.well-known/acme-challenge/` location on port 80.

---

## 11) Operational commands

```bash
cd /srv/apps/ai-forum
docker compose ps
docker compose logs -f --tail=200
docker compose up -d --build
docker compose restart
```

Nginx:

```bash
nginx -t
systemctl reload nginx
```

---

## 12) Backup checklist

- `/srv/apps/ai-forum/.env`
- `/etc/nginx/sites-available/aiforumbd.org`
- `/etc/letsencrypt/live/aiforumbd.org/`

---

## 13) Ports cheat sheet

| Place | URL |
| --- | --- |
| Laptop `npm run dev` | `http://localhost:3000` |
| Docker (laptop or server) | `http://127.0.0.1:3002` |
| Production | `https://aiforumbd.org` |
