# Blue's Experiments

A curated collection of innovative Web3 products and digital experiments, alphabetically organized from .ai to .zero. Built with love by CrestalBlue and co.

## 🚀 Live Site

Visit the live site at: [https://username.github.io/crestal.blue](https://username.github.io/crestal.blue)

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

## 📝 Content Management

Edit website data in `src/data/websites.json`:

```json
{
  "tld": ".example",
  "title": "Example Site",
  "description": "Description of the site",
  "url": "https://example.com",
  "color": "#FF6B6B"
}
```

## 🚀 Deployment

This site automatically deploys to GitHub Pages when you push to the `main` branch.

### Setup Instructions:

1. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Push to main branch** - The GitHub Action will automatically:
   - Build the Next.js site
   - Export static files
   - Deploy to GitHub Pages

3. **Access your site** at `https://yourusername.github.io/crestal.blue`

## 🎨 Features

- 📱 **Responsive Design** - Works on all devices
- 🎭 **3D Flip Animations** - Interactive tile hover effects
- 🎨 **Colorful UI** - Modern, warm color palette
- 📊 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards
- 🔧 **Easy Content Management** - JSON-based configuration
- ⚡ **Static Site** - Fast loading, optimized for GitHub Pages

## 🏗️ Tech Stack

- **Framework:** Next.js 15 with TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** GitHub Pages with GitHub Actions
- **Content:** JSON configuration files

## 📁 Project Structure

```
src/
  app/
    layout.tsx      # SEO metadata and layout
    page.tsx        # Main tile grid component
    globals.css     # Global styles and animations
  data/
    websites.json   # Website data configuration
public/
  .nojekyll        # GitHub Pages configuration
.github/
  workflows/
    deploy.yml      # GitHub Actions deployment
```