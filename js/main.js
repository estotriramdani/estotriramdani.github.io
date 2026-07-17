(function () {
  "use strict";

  const html = document.documentElement;
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section[id]");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIconSun = document.querySelector(".theme-icon-sun");
  const themeIconMoon = document.querySelector(".theme-icon-moon");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Theme toggle. Default is dark unless user explicitly chose light.
  function getStoredTheme() {
    const stored = localStorage.getItem("theme");
    return stored === "light" ? "light" : "dark";
  }

  function updateThemeIcons(theme) {
    if (!themeIconSun || !themeIconMoon) return;
    themeIconSun.classList.toggle("active", theme === "light");
    themeIconMoon.classList.toggle("active", theme === "dark");
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    updateThemeIcons(theme);
    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      );
      themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  function toggleTheme() {
    const current = html.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  }

  applyTheme(getStoredTheme());

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }

  // If the user has not set a preference, keep the default dark theme
  // even when the system preference changes.
  prefersDark.addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
      applyTheme("dark");
    }
  });


  // Mobile menu toggle
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu when a link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active nav link on scroll
  function updateActiveLink() {
    let current = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
})();
