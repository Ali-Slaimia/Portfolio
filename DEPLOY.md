# Go live (step by step)

## Option A — Fastest (~5 min): Vercel + GitHub

### 1. Create a GitHub repo

- Go to [github.com/new](https://github.com/new)
- Name it `portfolio` (or anything you like)
- Leave it **empty** (no README)
- Create the repo

### 2. Push your code

Replace `YOUR_USERNAME` with your GitHub username:

```bash
cd /Users/alislaimia/Desktop/PORTFOLIO
git add -A
git commit -m "Initial portfolio — Ali Slaimia CV"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with **GitHub**
2. Click **Add New… → Project**
3. Import your `portfolio` repository
4. Leave all settings as default (Next.js is auto-detected)
5. Click **Deploy**

You’ll get a URL like `https://portfolio-xyz.vercel.app`.

### 4. Custom domain (optional, later)

Vercel → Project → **Settings → Domains** → add e.g. `alislaimia.dev`

---

## Option B — Deploy from terminal (no GitHub)

```bash
cd /Users/alislaimia/Desktop/PORTFOLIO
npx vercel login
npx vercel --prod
```

Follow the prompts. Vercel prints your live URL when done.

---

## After you’re live — upgrade checklist

Do these one at a time; redeploy happens automatically on each push (if using GitHub + Vercel).

| Step | What to do |
|------|------------|
| 1 | Fix LinkedIn & GitHub URLs in `src/data/portfolio.ts` |
| 2 | Add `public/resume.pdf` + enable download button |
| 3 | Add project repo/demo links on DATS & addiction center |
| 4 | Add a real photo (replace initials block in Hero) |
| 5 | Custom domain + update `public/robots.txt` sitemap URL |

---

## Troubleshooting

- **Build fails on Vercel:** Run `npm run build` locally first; fix any errors, push again.
- **Old content showing:** Hard refresh (`Cmd+Shift+R`) or wait ~1 min for CDN cache.
