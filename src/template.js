const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const tag = (name, label) =>
  `<span class="tag monospace" aria-label="${escapeHtml(label)}">${escapeHtml(
    name
  )}</span>`;

const techList = (items) =>
  `<div class="tech-list">${items
    .map((t) => tag(t, `Technology: ${t}`))
    .join("")}</div>`;

const sectionHeader = (number, title) =>
  `<div class="section-header">
    <span class="section-number monospace">${number}</span>
    <h2 class="section-title">${escapeHtml(title)}</h2>
  </div>`;

function renderHead({ profile }) {
  const title = `${profile.name} | ${profile.title}`;
  const description = profile.about;
  const imageUrl = `${profile.siteUrl}/${profile.photo}`;
  const canonicalUrl = profile.siteUrl;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="author" content="${escapeHtml(profile.name)}">
  <link rel="canonical" href="${escapeHtml(canonicalUrl)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
  
  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="${escapeHtml(canonicalUrl)}">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:image" content="${escapeHtml(imageUrl)}">
  <meta property="og:locale" content="en_US">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${escapeHtml(canonicalUrl)}">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:image" content="${escapeHtml(imageUrl)}">
  
  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">${renderJsonLd(profile)}</script>
  
  <!-- Theme preference applied before render to prevent flash. Default is dark. -->
  <script>
    (function () {
      const stored = localStorage.getItem('theme');
      const theme = stored === 'light' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>
</head>`;
}

function renderJsonLd(profile) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.about,
    email: profile.email,
    telephone: profile.phone,
    url: profile.siteUrl,
    image: `${profile.siteUrl}/${profile.photo}`,
    sameAs: [profile.linkedin, profile.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sukabumi",
      addressRegion: "West Java",
      addressCountry: "ID",
    },
  };
  return JSON.stringify(person);
}

function renderHeader({ profile }) {
  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return `<header class="site-header">
    <nav class="nav container" aria-label="Main navigation">
      <a href="#" class="logo monospace">ESTO.</a>
      <button class="menu-toggle" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle menu">
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
        <span class="menu-bar"></span>
      </button>
      <ul id="nav-menu" class="nav-menu">
        ${links
          .map(
            (link) =>
              `<li><a href="${link.href}" class="nav-link monospace">${escapeHtml(
                link.label
              )}</a></li>`
          )
          .join("")}
      </ul>
    </nav>
  </header>`;
}

function renderHero({ profile }) {
  return `<section id="about" class="hero section">
    <div class="container hero-grid">
      <div class="hero-content">
        <p class="eyebrow monospace">Fullstack Developer</p>
        <h1 class="hero-title">${escapeHtml(profile.name)}</h1>
        <p class="hero-tagline">${escapeHtml(profile.tagline)}</p>
        <p class="hero-location monospace">${escapeHtml(profile.location)}</p>
        <div class="hero-actions">
          <a href="${escapeHtml(profile.resume)}" class="btn btn-primary" download>
            <span>Download Resume</span>
          </a>
          <a href="${escapeHtml(profile.linkedin)}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
          </a>
          <a href="${escapeHtml(profile.github)}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div class="hero-photo">
        <div class="photo-frame">
          <img src="${escapeHtml(profile.photo)}" alt="${escapeHtml(
    profile.name
  )} profile photo" width="400" height="400" loading="eager">
        </div>
      </div>
    </div>
    <div class="container about-text">
      <p>${escapeHtml(profile.about)}</p>
    </div>
  </section>`;
}

function renderExperience({ experiences }) {
  const items = experiences
    .map(
      (exp, index) => `
    <article class="experience-card" id="exp-${index}">
      <div class="experience-header">
        <div>
          <h3 class="experience-company">${escapeHtml(exp.company)}</h3>
          <p class="experience-role monospace">${escapeHtml(exp.role)}</p>
        </div>
        <div class="experience-meta monospace">
          <span class="experience-period">${escapeHtml(exp.period)}</span>
          <span class="experience-location">${escapeHtml(exp.location)}</span>
        </div>
      </div>
      ${exp.description ? `<p class="experience-description">${escapeHtml(exp.description)}</p>` : ""}
      <ul class="experience-highlights">
        ${exp.highlights
          .map((h) => `<li>${escapeHtml(h)}</li>`)
          .join("")}
      </ul>
      ${techList(exp.techStack)}
    </article>
  `
    )
    .join("");

  return `<section id="experience" class="experience section">
    <div class="container">
      ${sectionHeader("01", "Experience")}
      <div class="experience-list">
        ${items}
      </div>
    </div>
  </section>`;
}

function renderProjects({ projects }) {
  const items = projects
    .map(
      (project) => `
    <article class="project-card">
      <a href="${escapeHtml(project.url)}" class="project-link" target="_blank" rel="noopener noreferrer">
        <span class="project-date monospace">${escapeHtml(project.date)}</span>
        <h3 class="project-title">${escapeHtml(project.title)}</h3>
        <p class="project-role monospace">${escapeHtml(project.role)}</p>
        <p class="project-description">${escapeHtml(project.description)}</p>
        ${techList(project.techStack)}
        <span class="project-arrow" aria-hidden="true">→</span>
      </a>
    </article>
  `
    )
    .join("");

  return `<section id="projects" class="projects section">
    <div class="container">
      ${sectionHeader("02", "Projects")}
      <div class="project-grid">
        ${items}
      </div>
    </div>
  </section>`;
}

function renderSkills({ skills }) {
  const groups = Object.entries(skills)
    .map(
      ([category, items]) => `
    <div class="skill-group">
      <h3 class="skill-category monospace">${escapeHtml(category)}</h3>
      ${techList(items)}
    </div>
  `
    )
    .join("");

  return `<section id="skills" class="skills section">
    <div class="container">
      ${sectionHeader("03", "Skills")}
      <div class="skills-grid">
        ${groups}
      </div>
    </div>
  </section>`;
}

function renderEducation({ educations }) {
  const items = educations
    .map(
      (edu) => `
    <article class="education-card">
      <div class="education-header">
        <h3 class="education-institution">${escapeHtml(edu.institution)}</h3>
        <span class="education-period monospace">${escapeHtml(edu.period)}</span>
      </div>
      <p class="education-degree">${escapeHtml(edu.degree)}</p>
      <p class="education-gpa monospace">GPA ${escapeHtml(edu.gpa)}</p>
      <p class="education-thesis">${escapeHtml(edu.thesis)}</p>
    </article>
  `
    )
    .join("");

  return `<section id="education" class="education section">
    <div class="container">
      ${sectionHeader("04", "Education")}
      <div class="education-list">
        ${items}
      </div>
    </div>
  </section>`;
}

function renderContact({ profile }) {
  return `<section id="contact" class="contact section">
    <div class="container">
      ${sectionHeader("05", "Contact")}
      <div class="contact-grid">
        <div class="contact-card">
          <p class="contact-lead">Let's build something meaningful.</p>
          <p class="contact-email">
            <a href="mailto:${escapeHtml(profile.email)}" class="monospace">${escapeHtml(
    profile.email
  )}</a>
          </p>
          <p class="contact-phone monospace">${escapeHtml(profile.phoneLabel)}</p>
        </div>
        <div class="contact-links">
          <a href="${escapeHtml(profile.linkedin)}" class="contact-link" target="_blank" rel="noopener noreferrer">
            <span class="contact-link-label">LinkedIn</span>
            <span class="contact-link-url monospace">${escapeHtml(profile.linkedin)}</span>
          </a>
          <a href="${escapeHtml(profile.github)}" class="contact-link" target="_blank" rel="noopener noreferrer">
            <span class="contact-link-label">GitHub</span>
            <span class="contact-link-url monospace">${escapeHtml(profile.github)}</span>
          </a>
          <a href="${escapeHtml(profile.resume)}" class="contact-link" download>
            <span class="contact-link-label">Resume</span>
            <span class="contact-link-url monospace">Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  </section>`;
}

function renderFooter({ profile }) {
  const year = new Date().getFullYear();
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <p class="monospace">© ${year} ${escapeHtml(profile.name)}</p>
      <button class="theme-toggle" aria-label="Toggle theme" aria-pressed="false" type="button">
        <svg class="theme-icon theme-icon-sun" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="5"></circle>
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
        </svg>
        <svg class="theme-icon theme-icon-moon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <span class="theme-label monospace">Theme</span>
      </button>
    </div>
  </footer>`;
}

function renderIndex(data) {
  return `${renderHead(data)}
<body>
  ${renderHeader(data)}
  <main>
    ${renderHero(data)}
    ${renderExperience(data)}
    ${renderProjects(data)}
    ${renderSkills(data)}
    ${renderEducation(data)}
    ${renderContact(data)}
  </main>
  ${renderFooter(data)}
  <script src="js/main.js"></script>
</body>
</html>`;
}

function renderSitemap(profile) {
  const today = new Date().toISOString().split("T")[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${escapeHtml(profile.siteUrl)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
}

function renderRobots(profile) {
  return `User-agent: *
Allow: /

Sitemap: ${profile.siteUrl}/sitemap.xml`;
}

module.exports = {
  renderIndex,
  renderSitemap,
  renderRobots,
};
