# Deployment Instructions

This guide explains how to deploy your portfolio to GitHub Pages.

## Architecture Overview

```
Source Repository (portfolio)
    ↓
GitHub Actions (on push to main)
    ↓
Build Next.js site → Static files
    ↓
Push to GitHub Pages Repository
    ↓
Live site on GitHub Pages
```

## Step-by-Step Deployment

### 1. Create GitHub Pages Repository

Create a **separate** repository for the deployed site:

**Option A: User/Organization Site**
- Repository name: `<your-username>.github.io`
- Site will be at: `https://<your-username>.github.io`

**Option B: Project Site**
- Repository name: any name (e.g., `portfolio-site`)
- Site will be at: `https://<your-username>.github.io/<repo-name>`
- Note: If using project site, update `basePath` in `next.config.ts`

### 2. Generate Personal Access Token

1. Go to GitHub → Settings → Developer settings
2. Click "Personal access tokens" → "Tokens (classic)"
3. Click "Generate new token (classic)"
4. Configure:
   - **Note**: "Portfolio Deployment"
   - **Expiration**: Your choice (recommend 90 days or No expiration)
   - **Scopes**: Check `repo` (this will check all sub-items)
5. Click "Generate token"
6. **IMPORTANT**: Copy the token immediately (you won't see it again!)

### 3. Configure GitHub Secrets

In your **source repository** (this portfolio):

1. Go to Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Add these secrets:

**Secret 1: PAGES_REPO**
```
Name: PAGES_REPO
Value: your-username/your-pages-repo-name

Example: johndoe/johndoe.github.io
```

**Secret 2: PAGES_TOKEN**
```
Name: PAGES_TOKEN
Value: [paste the Personal Access Token you generated]

Example: ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Secret 3: CUSTOM_DOMAIN** (optional)
```
Name: CUSTOM_DOMAIN
Value: www.yourdomain.com

Only add this if you have a custom domain
```

### 4. Enable GitHub Pages

In your **GitHub Pages repository** (destination):

1. Go to Settings → Pages
2. Under "Source", select "Deploy from a branch"
3. Under "Branch", select `main` and `/ (root)`
4. Click "Save"

### 5. Deploy

```bash
# Make sure you're on the main branch
git checkout main

# Commit any changes
git add .
git commit -m "Ready for deployment"

# Push to trigger deployment
git push origin main
```

### 6. Monitor Deployment

1. Go to the "Actions" tab in your source repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Click on it to see progress
4. Once complete (green checkmark), your site is deployed!

### 7. Access Your Site

- Wait 1-2 minutes for GitHub Pages to process
- Visit your site at `https://your-username.github.io`

## Troubleshooting

### Workflow Fails: "Authentication failed"

**Cause**: Invalid or expired Personal Access Token

**Solution**:
- Generate a new token with `repo` permissions
- Update the `PAGES_TOKEN` secret

### Workflow Fails: "repository not found"

**Cause**: Incorrect `PAGES_REPO` format or token doesn't have access

**Solution**:
- Verify `PAGES_REPO` is exactly: `username/repo-name`
- Ensure the token has access to both repositories
- Check that the Pages repository exists

### Site Shows 404 or Broken Styles

**Cause**: Incorrect base path configuration

**Solution for Project Sites**:
Edit `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/your-repo-name',  // Add this line
};
```

### Workflow Doesn't Trigger

**Cause**: Workflow file not in the right location or incorrect branch

**Solution**:
- Ensure workflow file is at `.github/workflows/deploy.yml`
- Ensure you're pushing to the `main` branch
- Check that workflow file is valid YAML

### Site Content Not Updating

**Cause**: GitHub Pages cache

**Solution**:
- Wait a few minutes
- Clear your browser cache
- Try incognito/private mode

## Custom Domain Setup

If you have a custom domain:

1. Add `CUSTOM_DOMAIN` secret with your domain
2. In your domain registrar, add DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```
   And for www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: your-username.github.io
   ```
3. In your GitHub Pages repo settings, add your custom domain
4. Enable "Enforce HTTPS"

## Updating Your Site

Every time you push to main:

```bash
git add .
git commit -m "Update content"
git push origin main
```

The site will automatically rebuild and deploy within a few minutes.

## Manual Build (Local Testing)

To test the build locally before deploying:

```bash
# Build the site
npm run build

# Serve the static files (optional, requires a static server)
npx serve out
```

## Workflow Explained

The `.github/workflows/deploy.yml` file:

1. **Triggers**: On push to main branch
2. **Checks out**: Your source code
3. **Installs**: Node.js and dependencies
4. **Builds**: Next.js static site
5. **Checks out**: Your Pages repository
6. **Copies**: Built files from `out/` to Pages repo
7. **Commits**: And pushes to Pages repository
8. **GitHub Pages**: Automatically deploys the updated content

## Security Notes

- Never commit secrets to your repository
- Use repository secrets for sensitive data
- Personal Access Tokens should be treated like passwords
- Rotate tokens periodically for security

## Getting Help

If you encounter issues:

1. Check the Actions tab for error messages
2. Review the workflow logs
3. Verify all secrets are set correctly
4. Ensure both repositories exist and are accessible

---

Happy deploying! 🚀

