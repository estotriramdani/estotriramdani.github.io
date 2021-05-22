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
import doubleColumn from '../template/double-column.js';
import activeNav from '../utils/active-nav.js';

const router = () => {
  navItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      content.style.overflow = 'hidden';
      switch (e.target.id) {
        case 'portfolios':
          activeNav(portfoliosNavigation);
          doubleColumn();
          portfoliosPage();
          break;
        case 'completions':
          activeNav(completionsNavigation);
          doubleColumn();
          completionsPage();
          break;
        case 'experiences':
          activeNav(experiencesNavigation);
          doubleColumn();
          experiencesPage();
          break;
        case 'tutorials':
          activeNav(tutorialsNavigation);
          doubleColumn();
          break;
        default:
          activeNav(homeNavigation);
          doubleColumn();
          homePage();
          break;
      }
    });
  });
};

const routes = () => {
  switch (window.location.hash.substr(1)) {
    case '/portfolios':
      doubleColumn();
      portfoliosPage();
      activeNav(portfoliosNavigation);
      break;
    case '/completions':
      doubleColumn();
      completionsPage();
      activeNav(completionsNavigation);

      break;
    case '/experiences':
      activeNav(experiencesNavigation);
      doubleColumn();
      experiencesPage();
      break;
    case '/tutorials':
      activeNav(tutorialsNavigation);
      break;
    default:
      activeNav(homeNavigation);
      homePage();
      break;
  }
};

const hashWatcher = () => {
  window.addEventListener('hashchange', (e) => {
    navItem.forEach((nav) => {
      if (nav.classList.contains('nav-item-active')) {
        nav.classList.remove('nav-item-active');
      }
    });
    content.style.overflow = 'hidden';
    switch (e.currentTarget.location.hash.substr(1)) {
      case '/portfolios':
        doubleColumn();
        portfoliosPage();
        activeNav(portfoliosNavigation);
        break;
      case '/completions':
        doubleColumn();
        completionsPage();
        activeNav(completionsNavigation);
        break;
      case '/experiences':
        doubleColumn();
        experiencesPage();
        activeNav(experiencesNavigation);
        break;
      case '/tutorials':
        activeNav(tutorialsNavigation);
        doubleColumn();
        break;
      default:
        activeNav(homeNavigation);
        homePage();
        break;
    }
  });
};

export { hashWatcher, router, routes };
