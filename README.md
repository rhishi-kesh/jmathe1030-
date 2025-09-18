# Spring Clean Exteriors Website

This project contains the complete source code for the Spring Clean Exteriors website.

---

## 🚀 Quick Start

### 1. Install Requirements
- Install [Node.js](https://nodejs.org/) (LTS recommended).
- Open a terminal in this project folder.

Run:
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
- Opens a local preview at `http://localhost:5173` (if using Vite).

### 3. Build for Production
```bash
npm run build
```
- Produces a `/dist` folder with optimized static files.

---

## 🌍 Deployment Options

### Option A: Netlify (Recommended)
1. Go to [Netlify](https://netlify.com).
2. Create a free account.
3. Drag and drop the `/dist` folder into Netlify.
4. Connect your domain (`springcleanexteriors.com`) via DNS settings.

### Option B: Vercel
1. Go to [Vercel](https://vercel.com).
2. Import this project from GitHub (or upload ZIP).
3. Vercel builds and deploys automatically.
4. Point your domain in Vercel dashboard.

### Option C: GitHub Pages
- Run `npm run build`.
- Push `/dist` folder to GitHub Pages branch.
- Simpler, but less flexible than Netlify or Vercel.

---

## 📂 Assets (Before/After & Videos)
For each service, add files in `/public/assets/<service-folder>/`:
- `before.jpg`
- `after.jpg`
- `demo.mp4`

These will automatically display in the **Learn More** section.

Service folders:
- house-soft-wash
- roof-gutter-cleaning
- driveway-sidewalk-cleaning
- patio-deck-fence
- surface-sealing
- light-commercial

---

## 🔄 Continuous Deployment (Optional)
- Push code to GitHub.
- Link GitHub repo to Netlify or Vercel.
- Every code update auto-deploys.

---

✅ Once deployed, visit **springcleanexteriors.com** to see your live site.
