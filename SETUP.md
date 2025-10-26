# Quick Setup Guide

Follow these steps to get your portfolio up and running:

## 1. Initial Setup

```bash
# Install dependencies
npm install

# Test locally
npm run dev
```

Visit `http://localhost:3000` to see your site.

## 2. Customize Your Content

### Update Personal Information

Edit `app/page.tsx`:
- Change the hero section text
- Update the "About Me" section with your background
- Modify the experience highlights
- Adjust the skills section to match your expertise

Edit `components/Footer.tsx`:
- Update GitHub, LinkedIn, and email links

Edit `app/layout.tsx`:
- Update site metadata (title, description)

## 3. Write Your First Blog Post

Create a new file in `posts/` directory:

```bash
touch posts/my-first-post.md
```

Add content with frontmatter:

```markdown
---
title: "My First Blog Post"
date: "2024-10-26"
excerpt: "An introduction to my blog"
tags: ["Announcement"]
---

# Welcome to My Blog

Your content here...
```

## 4. Set Up GitHub Deployment

### Create a GitHub Pages Repository

1. Go to GitHub and create a new repository
2. Name it `<your-username>.github.io` (or any name for project pages)
3. Initialize it with a README or leave it empty

### Add GitHub Secrets

In your **source** repository (this portfolio), go to:
**Settings → Secrets and variables → Actions → New repository secret**

Add these secrets:

1. **PAGES_REPO**
   - Value: `your-username/your-username.github.io`
   - Example: `johndoe/johndoe.github.io`

2. **PAGES_TOKEN**
   - Generate a Personal Access Token:
     - Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
     - Click "Generate new token (classic)"
     - Give it a name like "Portfolio Deployment"
     - Select scope: `repo` (all checkboxes under repo)
     - Click "Generate token"
     - Copy the token (you won't see it again!)
   - Paste the token as the secret value

3. **CUSTOM_DOMAIN** (optional, only if you have a custom domain)
   - Value: `www.yourdomai.com`
   - Skip this if using GitHub Pages default domain

## 5. Deploy

```bash
# Commit your changes
git add .
git commit -m "Initial portfolio setup"

# Push to main branch
git push origin main
```

The GitHub Action will automatically:
- Build your site
- Deploy to your GitHub Pages repository
- Your site will be live in a few minutes!

## 6. Access Your Site

- GitHub Pages default: `https://your-username.github.io`
- Custom domain: Configure in your Pages repo settings

## 7. Adding More Blog Posts

Simply add more `.md` files to the `posts/` directory and push to main. The site will automatically rebuild and deploy.

## Common Issues

### Build Fails
- Check that all markdown files have valid frontmatter
- Ensure all required fields (title, date, excerpt) are present

### Deployment Not Working
- Verify PAGES_REPO secret is in correct format: `username/repo-name`
- Check that PAGES_TOKEN has `repo` permissions
- Ensure the GitHub Pages repository exists and is accessible

### Site Not Updating
- Check the Actions tab in GitHub to see if workflow completed
- It can take a few minutes for GitHub Pages to update

## Next Steps

- Customize the design and colors
- Add more sections (projects, contact form, etc.)
- Optimize images
- Add analytics
- Set up a custom domain

---

Need help? Open an issue on GitHub!

