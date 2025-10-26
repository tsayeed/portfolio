# Backend Engineer Portfolio

A modern, responsive portfolio website built with Next.js, featuring a blog with markdown support and automated deployment to GitHub Pages.

## Features

- 🎨 **Modern & Aesthetic Design** - Clean, professional UI with Tailwind CSS
- 📝 **Blog/Articles** - Markdown-based blog system
- 🚀 **Static Site Generation** - Fast loading times with Next.js SSG
- 📱 **Responsive** - Works seamlessly on all devices
- 🔄 **Automated Deployment** - CI/CD pipeline with GitHub Actions
- ⚡ **Performance Optimized** - Lighthouse-ready

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Markdown**: gray-matter, remark, remark-html
- **Deployment**: GitHub Pages via GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/        # Individual blog posts
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer component
│   └── BlogCard.tsx       # Blog post card
├── lib/                   # Utility functions
│   └── posts.ts           # Blog post utilities
├── posts/                 # Markdown blog posts
│   ├── building-scalable-apis.md
│   ├── postgresql-performance-tips.md
│   └── microservices-lessons-learned.md
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions workflow
```

## Writing Blog Posts

Blog posts are written in Markdown and stored in the `posts/` directory.

### Creating a New Post

1. Create a new `.md` file in the `posts/` directory:

```bash
touch posts/my-new-post.md
```

2. Add frontmatter and content:

```markdown
---
title: "Your Post Title"
date: "2024-10-26"
excerpt: "A brief description of your post"
tags: ["Python", "Backend", "AWS"]
---

# Your Post Title

Your content here...
```

### Frontmatter Fields

- `title` (required): Post title
- `date` (required): Publication date (YYYY-MM-DD)
- `excerpt` (required): Brief description for previews
- `tags` (optional): Array of tags

## Deployment Setup

This portfolio uses GitHub Actions to automatically build and deploy to GitHub Pages.

### Step 1: Create GitHub Pages Repository

Create a new repository for GitHub Pages (e.g., `username.github.io`).

### Step 2: Configure Secrets

In your source repository, add these secrets (Settings → Secrets and variables → Actions):

1. **PAGES_REPO**: Your GitHub Pages repository (format: `username/repo-name`)
   ```
   example: yourusername/yourusername.github.io
   ```

2. **PAGES_TOKEN**: A Personal Access Token with `repo` permissions
   - Go to GitHub Settings → Developer settings → Personal access tokens
   - Generate new token (classic) with `repo` scope
   - Copy the token and add it as a secret

3. **CUSTOM_DOMAIN** (optional): Your custom domain if you have one
   ```
   example: www.yourdomain.com
   ```

### Step 3: Push to Main Branch

Once secrets are configured, pushing to the `main` branch will trigger the deployment:

```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

The workflow will:
1. Build your Next.js site
2. Push the static files to your GitHub Pages repository
3. Your site will be live at `https://username.github.io`

## Customization

### Personal Information

Update the following files with your information:

1. **app/page.tsx**: Update hero text, about section, and experience
2. **components/Footer.tsx**: Update social links and email
3. **app/layout.tsx**: Update metadata (title, description)

### Styling

- Edit `app/globals.css` for global styles
- Tailwind classes can be modified in any component
- Color scheme can be adjusted in `tailwind.config.ts`

### Skills Section

Update the skills in `app/page.tsx` to match your expertise.

## Building for Production

To build the site locally:

```bash
npm run build
```

This generates a static export in the `out/` directory.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
