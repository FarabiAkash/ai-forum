# CMED Innovation — Server Preparation & Deployment Notes
*(File: `cmed-deployment.md`)*

This document captures the exact steps taken to prepare the **Azure Ubuntu VM** to host three services behind Nginx:

1. **si-initiative** (Next.js) → `cmedinnovation.com` → **PM2** → `127.0.0.1:3000`
2. **si-initiative-backend** (Next.js) → `admin.cmedinnovation.com` → **PM2** → `127.0.0.1:3001`
3. **email-service** (FastAPI) → `email.cmedinnovation.com` → **Docker Compose** → `127.0.0.1:8000`


---

## 1) Server details & conventions

- User account used: `azureuser` (no separate deploy user)
- OS: Ubuntu 24.04 (codename `noble`)
- Services used:
  - **Nginx** (reverse proxy)
  - **PM2** (process manager for Next.js)
  - **Docker Engine + docker compose plugin** (FastAPI service)
  - **UFW** firewall (ports 22, 80, 443 open)

### Ports used locally (loopback)
- `si-initiative` → `3000`
- `si-initiative-backend` → `3001`
- `email-service` → `8000`

---

## 2) Firewall (UFW)

Enabled and opened required ports:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'   # opens 80,443
sudo ufw --force enable
sudo ufw status verbose
```

Expected rules:
- 22/tcp (OpenSSH)
- 80,443/tcp (Nginx Full)

---

## 3) Docker installation (Ubuntu 24.04 / noble)

### 3.1 Add Docker GPG key
```bash
sudo apt update
sudo apt -y install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

### 3.2 Add Docker apt repo (fixed)
The repo file **must** contain the correct codename (`noble`) and not shell expressions.

File: `/etc/apt/sources.list.d/docker.sources`
```bash
sudo tee /etc/apt/sources.list.d/docker.sources > /dev/null <<'EOF'
Types: deb
URIs: https://download.docker.com/linux/ubuntu
Suites: noble
Components: stable
Signed-By: /etc/apt/keyrings/docker.asc
EOF
```

Update apt:
```bash
sudo apt update
```

### 3.3 Install Docker Engine + compose plugin
```bash
sudo apt -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### 3.4 Allow `azureuser` to run docker without sudo
```bash
sudo usermod -aG docker azureuser
# reconnect SSH or run:
newgrp docker
```

Verify:
```bash
docker run --rm hello-world
docker compose version
```

---

## 4) Node.js + PM2 setup

Node is installed via **NVM** for `azureuser`.

### 4.1 Install NVM
```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

# load nvm now (or reconnect shell)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm --version
```

### 4.2 Install Node (LTS) and verify
In this setup Node ended up as:
- `node -v` → `v24.14.0`
- `npm -v` → `11.9.0`

Commands:
```bash
nvm install --lts
node -v
npm -v
```

### 4.3 Install PM2
```bash
npm i -g pm2
pm2 -v
```

---

## 5) PM2 boot startup (systemd)

### 5.1 Generate startup unit
```bash
pm2 startup systemd -u azureuser --hp /home/azureuser
```

Then run the command PM2 prints (example):
```bash
sudo env PATH=$PATH:/home/azureuser/.nvm/versions/node/v24.14.0/bin pm2 startup systemd -u azureuser --hp /home/azureuser
```

### 5.2 Fix: systemd PIDFile issue
The default PM2 unit expected a PID file like:
- `/home/azureuser/.pm2/pm2.pid`

But the service failed with:
- “Can't open PID file … pm2.pid”

We replaced the unit with a more reliable `oneshot` unit that resurrects processes from the PM2 dump file and does **not** rely on a PID file.

File: `/etc/systemd/system/pm2-azureuser.service`
```ini
[Unit]
Description=PM2 process manager
Documentation=https://pm2.keymetrics.io/
After=network.target

[Service]
Type=oneshot
RemainAfterExit=yes
User=azureuser
Environment=PM2_HOME=/home/azureuser/.pm2
Environment=PATH=/home/azureuser/.nvm/versions/node/v24.14.0/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

ExecStart=/home/azureuser/.nvm/versions/node/v24.14.0/bin/pm2 resurrect
ExecReload=/home/azureuser/.nvm/versions/node/v24.14.0/bin/pm2 reload all
ExecStop=/home/azureuser/.nvm/versions/node/v24.14.0/bin/pm2 kill

[Install]
WantedBy=multi-user.target
```

Apply:
```bash
sudo systemctl daemon-reload
sudo systemctl restart pm2-azureuser
sudo systemctl status pm2-azureuser --no-pager
```

### 5.3 Keepalive process (optional but used)
A minimal keepalive process was started under PM2:
```bash
pm2 start /bin/bash --name pm2-keepalive -- -c "sleep infinity"
```

---

## 6) GitHub SSH key setup (for cloning via `git@github.com:...`)

### 6.1 Generate key
```bash
ssh-keygen -t ed25519 -C "azureuser@cmedinnovation-vm" -f ~/.ssh/id_ed25519_github
cat ~/.ssh/id_ed25519_github.pub
```

The public key was added to GitHub (**Settings → SSH and GPG keys**).

### 6.2 SSH config so git uses the key automatically
File: `~/.ssh/config`
```sshconfig
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_github
  IdentitiesOnly yes
```

Set perms:
```bash
chmod 600 ~/.ssh/config
```

Verify:
```bash
ssh -T git@github.com
```

---

## 7) Folder structure & repos

Base folder: `/srv/apps`

Projects:
- `/srv/apps/si-initiative/repo`
- `/srv/apps/si-initiative-backend/repo`
- `/srv/apps/email-service/repo`

(Recommended structure also includes `config/` and `logs/` folders for each app.)

---

## 8) Environment files

Each repository required a local `.env` file, created manually:

- `/srv/apps/si-initiative/repo/.env`
- `/srv/apps/si-initiative-backend/repo/.env`
- `/srv/apps/email-service/repo/.env`

Edit using:
```bash
nano .env
```

> Tip: Back up these `.env` files somewhere safe. They are not in git.

---

## 9) Running the applications (local verification)

### 9.1 si-initiative (Next.js) — port 3000
Install deps:
```bash
cd /srv/apps/si-initiative/repo
npm ci
```

Build and test:
```bash
npm run build
PORT=3000 npm run start
```

Run under PM2:
```bash
pm2 start npm --name si-initiative -- start -- -p 3000
```

Check:
```bash
curl -I http://127.0.0.1:3000
pm2 ls
```

### 9.2 si-initiative-backend (Next.js) — port 3001
Install deps:
```bash
cd /srv/apps/si-initiative-backend/repo
npm ci
```

Build and test:
```bash
npm run build
npm run start -- -p 3001
```

Run under PM2:
```bash
pm2 start npm --name si-initiative-backend -- start -- -p 3001
```

Check:
```bash
curl -I http://127.0.0.1:3001
pm2 ls
```

### 9.3 email-service (FastAPI) — Docker Compose on port 8000
Run:
```bash
cd /srv/apps/email-service/repo
docker compose up -d --build
docker compose ps
```

Check:
```bash
curl -I http://127.0.0.1:8000
```

Logs:
```bash
docker compose logs -f
```

Stop:
```bash
docker compose down
```

---

## 10) Nginx reverse proxy setup

### 10.1 Common proxy headers snippet
File: `/etc/nginx/snippets/proxy-common.conf`
```nginx
proxy_http_version 1.1;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header X-Forwarded-Proto $scheme;

# WebSockets (needed for some Next.js features)
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Connection "upgrade";
```

### 10.2 Site configs

#### `cmedinnovation.com` → `127.0.0.1:3000`
File: `/etc/nginx/sites-available/cmedinnovation.com.conf`
```nginx
server {
  listen 80;
  server_name cmedinnovation.com www.cmedinnovation.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    include /etc/nginx/snippets/proxy-common.conf;
  }
}
```

#### `admin.cmedinnovation.com` → `127.0.0.1:3001`
File: `/etc/nginx/sites-available/admin.cmedinnovation.com.conf`
```nginx
server {
  listen 80;
  server_name admin.cmedinnovation.com;

  location / {
    proxy_pass http://127.0.0.1:3001;
    include /etc/nginx/snippets/proxy-common.conf;
  }
}
```

#### `email.cmedinnovation.com` → `127.0.0.1:8000`
File: `/etc/nginx/sites-available/email.cmedinnovation.com.conf`
```nginx
server {
  listen 80;
  server_name email.cmedinnovation.com;

  location / {
    proxy_pass http://127.0.0.1:8000;
    include /etc/nginx/snippets/proxy-common.conf;
  }
}
```

### 10.3 Enable sites + reload
```bash
sudo ln -sf /etc/nginx/sites-available/cmedinnovation.com.conf /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/admin.cmedinnovation.com.conf /etc/nginx/sites-enabled/
sudo ln -sf /etc/nginx/sites-available/email.cmedinnovation.com.conf /etc/nginx/sites-enabled/

sudo rm -f /etc/nginx/sites-enabled/default

sudo nginx -t
sudo systemctl reload nginx
```

### 10.4 Local host-header proxy test
```bash
curl -I -H "Host: cmedinnovation.com" http://127.0.0.1
curl -I -H "Host: admin.cmedinnovation.com" http://127.0.0.1
curl -I -H "Host: email.cmedinnovation.com" http://127.0.0.1
```

---

## 11) DNS status & required updates

VM public IP:
- `20.198.17.229`

At the time checked:
- `cmedinnovation.com` → `172.67.200.217`, `104.21.21.223`
- `admin.cmedinnovation.com` → `68.220.179.112`
- `email.cmedinnovation.com` → no A record returned

**Required DNS changes:**
Set A records to `20.198.17.229`:
- `@` → `20.198.17.229`
- `www` → `20.198.17.229` (or CNAME to `@`)
- `admin` → `20.198.17.229`
- `email` → `20.198.17.229`

Verify after updating:
```bash
dig +short cmedinnovation.com A
dig +short www.cmedinnovation.com A
dig +short admin.cmedinnovation.com A
dig +short email.cmedinnovation.com A
```

---

## 12) HTTPS (after DNS points to this VM)

Once DNS is correct, install certbot and issue certificates:

```bash
sudo apt update
sudo apt -y install certbot python3-certbot-nginx
```

Issue certs:
```bash
sudo certbot --nginx -d cmedinnovation.com -d www.cmedinnovation.com -d admin.cmedinnovation.com -d email.cmedinnovation.com
```

Test renewal:
```bash
sudo certbot renew --dry-run
```

---

# 13) Redeploy / Update Guide (when new code is pushed)

This section explains what to do after pushing new code to GitHub.

> Always run these steps inside the correct repo folder under `/srv/apps/.../repo`.

---

## 13.1 Redeploy: si-initiative (Next.js → PM2 → port 3000)

```bash
cd /srv/apps/si-initiative/repo

git pull
npm ci
npm run build

pm2 restart si-initiative
pm2 ls
curl -I http://127.0.0.1:3000
```

View logs:
```bash
pm2 logs si-initiative --lines 200
```

---

## 13.2 Redeploy: si-initiative-backend (Next.js → PM2 → port 3001)

```bash
cd /srv/apps/si-initiative-backend/repo

git pull
npm ci
npm run build

pm2 restart si-initiative-backend
pm2 ls
curl -I http://127.0.0.1:3001
```

Logs:
```bash
pm2 logs si-initiative-backend --lines 200
```

---

## 13.3 Redeploy: email-service (FastAPI → Docker Compose → port 8000)

```bash
cd /srv/apps/email-service/repo

git pull
docker compose up -d --build
docker compose ps
```

Verify:
```bash
curl -I http://127.0.0.1:8000
```

Logs:
```bash
docker compose logs -f --tail=200
```

If database migrations are required, follow the repo README / migration docs (see `README.md` and `MIGRATION_COMPLETE.md`).

---

## 14) Quick operational commands

### PM2
```bash
pm2 ls
pm2 logs --lines 200
pm2 restart all
pm2 save --force
```

### Docker
```bash
docker ps
docker compose ps
docker compose logs -f --tail=200
```

### Nginx
```bash
sudo nginx -t
sudo systemctl reload nginx
sudo tail -n 200 /var/log/nginx/error.log
```

---

## 15) What to back up

- `/etc/nginx/sites-available/*.conf`
- `/etc/nginx/snippets/proxy-common.conf`
- `.env` files in each repo
- PM2 process list:
  - `/home/azureuser/.pm2/dump.pm2`
- Any persistent Docker volumes (if added later)

---

## 16) Notes / Future improvements

- Add log rotation for PM2 logs if they grow large.
- Consider running Next.js behind PM2 with `pm2-runtime` or an ecosystem file for cleaner management.
- If using Cloudflare proxy (orange cloud), SSL issuance may require DNS-only for HTTP-01, or use DNS-01 challenge.
- Consider restricting inbound access to only 80/443 and keep apps bound to loopback only (already done via Nginx proxy).

---

## 17) DNS + HTTPS — what happened on this VM (actual run)

### 17.1 DNS was updated to point to this VM
VM public IP:
- `20.198.17.229`

Final DNS check (all correct):
- `cmedinnovation.com` → `20.198.17.229`
- `www.cmedinnovation.com` → `20.198.17.229`
- `admin.cmedinnovation.com` → `20.198.17.229`
- `email.cmedinnovation.com` → `20.198.17.229`

### 17.2 Certbot initially failed (root cause: Azure NSG inbound rules)
Certbot error (summary):
- HTTP-01 challenge timed out connecting to `http://<domain>/.well-known/acme-challenge/...`

Even though **UFW** allowed ports 80/443, the Azure **Network Security Group (NSG)** did not allow inbound HTTP/HTTPS.

**Fix (Azure Portal):**
- VM → **Networking** → **Inbound port rules**
  - Allow **TCP 80**
  - Allow **TCP 443**

After allowing port 80, public HTTP worked:
```bash
curl -I http://cmedinnovation.com
```

### 17.3 Issue certificates (successful)
Command:
```bash
sudo certbot --nginx \
  -d cmedinnovation.com \
  -d www.cmedinnovation.com \
  -d admin.cmedinnovation.com \
  -d email.cmedinnovation.com
```

Result (successful):
- Certificate saved at:
  - `/etc/letsencrypt/live/cmedinnovation.com/fullchain.pem`
  - `/etc/letsencrypt/live/cmedinnovation.com/privkey.pem`
- Expiry (from certbot output):
  - **2026-05-27**
- Certbot auto-renewal scheduled automatically.

Verify renewal:
```bash
sudo certbot renew --dry-run
```

### 17.4 Post-HTTPS checks (expected behavior)
```bash
curl -I https://cmedinnovation.com
curl -I https://admin.cmedinnovation.com
curl -I https://email.cmedinnovation.com
```

Expected:
- `cmedinnovation.com` → **200 OK**
- `admin.cmedinnovation.com` → **200 OK**
- `email.cmedinnovation.com` may return **405 Method Not Allowed** on `curl -I` because that is a **HEAD** request.
  - Use GET to validate instead:
```bash
curl -s https://email.cmedinnovation.com/ | head
# or, if enabled:
curl -I https://email.cmedinnovation.com/docs
```

