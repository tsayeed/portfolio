# Quick Start Guide

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:3000
```

## Test Build

```bash
# Build static site
npm run build

# Check the 'out' folder for generated files
```

## Customize Your Portfolio

### 1. Personal Info
Edit `app/page.tsx`:
- Line 11: Hero title and subtitle
- Line 30: About section text
- Line 63-66: Experience highlights

### 2. Social Links
Edit `components/Footer.tsx`:
- Line 13-28: GitHub, LinkedIn, Email links

### 3. Skills
Edit `app/page.tsx`:
- Lines 76-138: Add/remove skills and technologies

### 4. Site Metadata
Edit `app/layout.tsx`:
- Line 10-11: Site title and description

## Add Blog Posts

Create `posts/your-post-name.md`:

```markdown
---
title: "Your Post Title"
date: "2024-10-26"
excerpt: "Brief description"
tags: ["Tag1", "Tag2"]
---

# Your Post Title

Your content here...
```

## Deploy to GitHub Pages

### One-Time Setup

1. **Create GitHub Pages repo** (e.g., `username.github.io`)

2. **Add GitHub Secrets** (in source repo → Settings → Secrets):
   - `PAGES_REPO`: `username/username.github.io`
   - `PAGES_TOKEN`: Generate at github.com/settings/tokens

3. **Push to main**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

4. **Wait 2-3 minutes** → Visit `https://username.github.io`

### Every Update After

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

Site auto-deploys in ~2 minutes.

## File Structure

```
portfolio/
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Site layout
│   └── blog/              # Blog pages
├── components/            # React components
├── posts/                 # Markdown blog posts ← Add new posts here
├── lib/                   # Utility functions
├── public/                # Static assets
└── .github/workflows/     # CI/CD automation
```

## Key Files

- `app/page.tsx` - Homepage content
- `components/Header.tsx` - Navigation
- `components/Footer.tsx` - Footer with links
- `posts/*.md` - Blog posts
- `next.config.ts` - Next.js configuration
- `.github/workflows/deploy.yml` - Deployment automation

## Helpful Commands

```bash
npm run dev          # Development server
npm run build        # Build for production
npm run lint         # Check code quality
```

## Need More Help?

- Full setup: See `SETUP.md`
- Deployment: See `DEPLOYMENT.md`
- General info: See `README.md`

## Troubleshooting

**Build fails?**
- Check markdown frontmatter is valid
- Ensure all blog posts have title, date, excerpt

**Site not deploying?**
- Check Actions tab in GitHub
- Verify secrets are set correctly
- Check PAGES_REPO format: `username/repo-name`

**Styles broken?**
- For project pages, add `basePath` in `next.config.ts`

---

Built with Next.js + Tailwind CSS 🚀

