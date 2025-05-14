# 🛠️ Local Development Setup (GitHub Desktop + HostGator)

## 1. Clone with GitHub Desktop
1. **File → Clone Repository…**  
2. Paste your repo URL (`https://github.com/your-username/trailblazer-analytics.git`).  
3. Choose a local path and clone.

## 2. Install prerequisites
- **Node.js 18 or 20**  
- **PNPM** → `npm i -g pnpm`

## 3. First‑time setup
```bash
pnpm install
pnpm run dev        # open http://localhost:4321
```
Astro will hot‑reload on file saves.

## 4. Build & preview static output
```bash
pnpm run build      # generates /dist
pnpm run preview    # serves /dist locally on 4173
```

## 5. Package for HostGator
```bash
pnpm run package    # zip /dist → trailblazer-analytics-dist.zip
```
Upload the **contents** of that zip via HostGator’s File Manager.

## 6. Commit & push
Use GitHub Desktop **Commit → Push origin**.  
GitHub Actions will also build & attach the same zip as an artifact.
