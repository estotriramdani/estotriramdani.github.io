import {
  completionsNavigation,
  content,
  experiencesNavigation,
  homeNavigation,
  navItem,
  portfoliosNavigation,
  tutorialsNavigation,
} from '../dom-elements/index.js';
import completionsPage from '../pages/completions.js';
import experiencesPage from '../pages/experiences.js';
import homePage from '../pages/home.js';
import portfoliosPage from '../pages/portfolios.js';
import tutorialsPage from '../pages/tutorials.js';
import doubleColumn from '../template/double-column.js';
import activeNav from '../utils/active-nav.js';

const router = () => {
  navItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      content.style.overflow = 'hidden';
      changeTutorialsHref();
      switchPages(e.target.id.substr(0, 7));
    });
  });
};

const routes = () => {
  changeTutorialsHref();
  switchPages(window.location.hash.substr(2, 7));
};

const hashWatcher = () => {
  window.addEventListener('hashchange', (e) => {
    changeTutorialsHref();
    navItem.forEach((nav) => {
      if (nav.classList.contains('nav-item-active')) {
        nav.classList.remove('nav-item-active');
      }
    });
    content.style.overflow = 'hidden';
    switchPages(e.currentTarget.location.hash.substr(2, 7));
  });
};

const switchPages = (page) => {
  switch (page) {
    case 'portfol':
      doubleColumn();
      portfoliosPage();
      activeNav(portfoliosNavigation);
      break;
    case 'complet':
      doubleColumn();
      completionsPage();
      activeNav(completionsNavigation);
      break;
    case 'experie':
      doubleColumn();
      experiencesPage();
      activeNav(experiencesNavigation);
      break;
    case 'tutoria':
      activeNav(tutorialsNavigation);
      tutorialsPage();
      break;
    default:
      activeNav(homeNavigation);
      homePage();
      break;
  }
};

const changeTutorialsHref = () => {
  if (localStorage.getItem('latestWatched') === null) {
    document
      .getElementById('tutorials')
      .setAttribute(
        'href',
        '#/tutorials/dasar-bahasa-pemrograman-javascript/2'
      );
  } else {
    const watchHistory = JSON.parse(localStorage.getItem('latestWatched'));
    document
      .getElementById('tutorials')
      .setAttribute(
        'href',
        `#/tutorials/${watchHistory.seriesName}/${watchHistory.episodeId}`
      );
  }
};

export { hashWatcher, router, routes };
