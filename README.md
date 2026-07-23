# Esto Triramdani Portfolio

A brutalist-professional portfolio website built with plain HTML, CSS, and JavaScript. Content is managed in JavaScript variables and prerendered into static files using a small Node.js generator.

- **Live site**: [https://estotriramdani.github.io](https://estotriramdani.github.io)
- **Branch**: `v-2026`
- **Hosting**: GitHub Pages

## Tech Stack

- HTML5 (semantic, prerendered)
- CSS3 (custom properties, no framework)
- Vanilla JavaScript
- Node.js (for static generation only)

## Project Structure

```
.
├── assets/
│   ├── profile-photo.jpeg    # Profile photo used in hero and OG image
│   └── resume.pdf            # Resume/CV download
├── src/
│   ├── content.js            # All website content as JS variables
│   ├── template.js           # HTML, sitemap, and robots templates
│   └── generate.js           # Static site generator
├── css/
│   └── style.css             # Brutalist design system
├── js/
│   └── main.js               # Mobile menu, active nav, theme toggle
├── index.html                # Generated (do not edit directly)
├── sitemap.xml               # Generated
├── robots.txt                # Generated
└── README.md                 # This file
```

## Development Workflow

### 1. Clone and switch branch

```bash
git clone https://github.com/estotriramdani/estotriramdani.github.io.git
cd estotriramdani.github.io
git checkout v-2026
```

### 2. Edit content

Open `src/content.js` and update the variables:

- `profile` — name, title, tagline, contact links, photo, resume
- `experiences` — work history
- `projects` — published projects
- `skills` — grouped skills
- `educations` — education history

### 3. Regenerate the site

```bash
node src/generate.js
```

This reads `src/content.js` and writes fresh `index.html`, `sitemap.xml`, and `robots.txt`.

### 4. Preview locally

You can open `index.html` directly in a browser:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

Or serve it with a simple static server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js npx
npx serve .
```

Then visit [http://localhost:8000](http://localhost:8000).

## Production Build

There is no separate production build step. The generated files are plain static assets ready for deployment.

1. Make sure `node src/generate.js` has been run and the generated files are up to date.
2. Stage, commit, and push:

```bash
node src/generate.js
git add .
git commit -m "feat: update portfolio content"
git push origin v-2026
```

3. GitHub Pages serves the site from the root of the `v-2026` branch (or `main`, depending on your Pages settings).

## Theme Toggle

The site supports light and dark themes:

- Default theme is **dark**, even if the device is set to light.
- Preference is saved to `localStorage`.
- Toggle button is in the footer.

Theme styles are controlled via the `data-theme` attribute on the `<html>` element in `css/style.css`.

## Customization

### Change accent color

The accent is defined in `css/style.css`:

```css
:root {
  --accent: #f7e017;      /* dark mode yellow */
  --accent-dark: #e3cd00;
}

[data-theme="light"] {
  --accent: #f7e017;      /* light mode yellow */
}
```

### Update colors for light theme

```css
[data-theme="light"] {
  --bg: #f5f5f5;
  --bg-elevated: #ffffff;
  --fg: #0a0a0a;
  --fg-muted: #525252;
  --border: #0a0a0a;
  --border-subtle: #d4d4d4;
}
```

### Update SEO / Open Graph

Edit `profile.siteUrl` in `src/content.js` if the domain changes, then regenerate.

### Update experience durations

Durations are calculated automatically from `startDate` and `endDate` in each role. Set `endDate` to `null` for current positions — the duration will be calculated up to today's date whenever you run `node src/generate.js`.

```javascript
{
  title: "Software Engineer",
  period: "Jan 2025 - Present",
  startDate: "2025-01-01",
  endDate: null, // current role
}
```

Company-level duration is calculated from the earliest role start date to the latest role end date (or today).

## Important Notes

- **Do not edit `index.html`, `sitemap.xml`, or `robots.txt` directly.** They are overwritten every time `node src/generate.js` runs.
- Keep `assets/profile-photo.jpeg` and `assets/resume.pdf` updated; they are referenced in the generated HTML and Open Graph meta tags.
- The source markdown file `Esto Triramdani Nurlutiawan_202606.md` is a local reference. It is not required for the build and should not be committed to GitHub Pages if you prefer to keep the repo clean.
