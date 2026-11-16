(function () {
  "use strict";

  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section[id]");

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  // Mobile menu toggle ------------------------------------------------------

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Active nav link on scroll ----------------------------------------------

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

  // Scroll reveal -----------------------------------------------------------
  // Elements are only hidden once JS has claimed them, so the page stays
  // readable when scripts are disabled.

  const REVEAL_GROUPS = [
    ".hero-content > *",
    ".about-text",
    ".section-header",
    ".experience-list > .experience-card",
    ".project-grid > .project-card",
    ".skills-grid > .skill-group",
    ".education-list > .education-card",
    ".contact-grid > *"
  ];

  const STAGGER_MS = 80;
  const MAX_STAGGER_STEPS = 3;

  function initReveal() {
    const targets = [];

    REVEAL_GROUPS.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (el, index) {
        const step = Math.min(index, MAX_STAGGER_STEPS);
        el.setAttribute("data-reveal", "");
        el.style.setProperty("--reveal-delay", step * STAGGER_MS + "ms");
        targets.push(el);
      });
    });

    if (!("IntersectionObserver" in window) || prefersReducedMotion.matches) {
      targets.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  // Parallax + reading progress --------------------------------------------
  // Element positions are measured once and re-measured when the layout
  // changes, which keeps getBoundingClientRect from reading our own transform.

  const parallaxItems = Array.prototype.map.call(
    document.querySelectorAll("[data-parallax]"),
    function (el) {
      return {
        el: el,
        speed: parseFloat(el.dataset.parallax) || 0,
        pageTop: 0,
        height: 0
      };
    }
  );

  const progressBar = document.querySelector(".scroll-progress-bar");
  let parallaxEnabled =
    parallaxItems.length > 0 && !prefersReducedMotion.matches;

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function measureParallax() {
    parallaxItems.forEach(function (item) {
      item.el.style.transform = "";
      const rect = item.el.getBoundingClientRect();
      item.pageTop = rect.top + window.scrollY;
      item.height = rect.height;
    });
  }

  function renderScrollEffects() {
    const viewportHeight = window.innerHeight;
    const scrollY = window.scrollY;

    if (progressBar) {
      const scrollable = document.documentElement.scrollHeight - viewportHeight;
      const ratio = scrollable > 0 ? scrollY / scrollable : 0;
      progressBar.style.transform = "scaleX(" + clamp(ratio, 0, 1) + ")";
    }

    if (!parallaxEnabled) return;

    parallaxItems.forEach(function (item) {
      const viewportTop = item.pageTop - scrollY;
      if (viewportTop > viewportHeight || viewportTop + item.height < 0) return;

      const delta =
        (viewportTop + item.height / 2 - viewportHeight / 2) * -item.speed;
      item.el.style.transform =
        "translate3d(0, " + clamp(delta, -60, 60).toFixed(2) + "px, 0)";
    });
  }

  let frameQueued = false;

  function onScrollFrame() {
    updateActiveLink();
    renderScrollEffects();
    frameQueued = false;
  }

  function requestScrollFrame() {
    if (frameQueued) return;
    frameQueued = true;
    window.requestAnimationFrame(onScrollFrame);
  }

  window.addEventListener("scroll", requestScrollFrame, { passive: true });

  window.addEventListener("resize", function () {
    if (parallaxEnabled) measureParallax();
    requestScrollFrame();
  });

  function handleReducedMotionChange(event) {
    parallaxEnabled = parallaxItems.length > 0 && !event.matches;
    if (!parallaxEnabled) {
      parallaxItems.forEach(function (item) {
        item.el.style.transform = "";
      });
    } else {
      measureParallax();
    }
    renderScrollEffects();
  }

  if (prefersReducedMotion.addEventListener) {
    prefersReducedMotion.addEventListener("change", handleReducedMotionChange);
  } else if (prefersReducedMotion.addListener) {
    prefersReducedMotion.addListener(handleReducedMotionChange);
  }

  // Fonts and images can shift the layout after first paint.
  window.addEventListener("load", function () {
    if (parallaxEnabled) measureParallax();
    renderScrollEffects();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () {
      if (parallaxEnabled) measureParallax();
      renderScrollEffects();
    });
  }

  initReveal();
  measureParallax();
  requestScrollFrame();
})();
