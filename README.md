# Esto Triramdani Portfolio

A sunlit-greenhouse editorial portfolio built with plain HTML, CSS, and JavaScript. Content is managed in JavaScript variables and prerendered into static files using a small Node.js generator.

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
│   └── style.css             # Editorial design system
├── js/
│   └── main.js               # Mobile menu, active nav, scroll effects
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

## Design System

The visual language is documented in [`DESIGN.md`](DESIGN.md) — a "sunlit greenhouse" editorial system: a pale sage canvas, deep forest text, one chartreuse accent, and flat surfaces with no shadows. The site is light-only; there is no theme toggle.

All tokens live in `css/style.css`:

```css
:root {
  --sage: #eef2e3;    /* page canvas */
  --paper: #fcfcfc;   /* elevated cards, nav, footer */
  --forest: #043f2e;  /* primary text, dark sections */
  --lime: #c8f169;    /* the only chromatic accent */
  --forest-mid: #2a6f2b; /* hover state */
}
```

- Display type: Fraunces (serif, weight 400, tight negative tracking) at 36px and above.
- UI and body type: Inter, weight 400–600, uppercase 12px labels with 0.06em tracking.
- Radii: `4px` for buttons/inputs, `16px` for cards and large surfaces, pill for tags.
- Section bands alternate sage → paper → sage, with the contact section inverted on deep forest.

## Motion

Motion is progressive enhancement — the page renders fully without JavaScript, because `js/main.js` is what tags elements with `data-reveal` before hiding them.

- **Scroll reveal** — an `IntersectionObserver` reveals sections and cards once, with an 80ms stagger (max 4 steps).
- **Parallax** — any element with `data-parallax` drifts against the scroll. The hero photo uses `0.08`, the about card `0.04`. Positions are measured once, then re-measured on resize, font load and page load so the animation never reads its own transform.
- **Reading progress** — a 2px chartreuse line under the header, driven by `scaleX()`.
- **Hover lift** — cards translate 3px, pointer devices only.

All of it is disabled under `prefers-reduced-motion: reduce`, and scroll work runs in a single `requestAnimationFrame` loop.

## Customization

### Change the accent color

```css
:root {
  --lime: #c8f169;       /* chartreuse accent */
  --forest-mid: #2a6f2b; /* its hover state */
}
```

### Change the canvas or text color

```css
:root {
  --sage: #eef2e3;
  --paper: #fcfcfc;
  --forest: #043f2e;
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
