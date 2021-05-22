import { router, routes, hashWatcher } from './config/route.js';
import {
  navItem,
  navMenu,
  content,
  head,
  portfoliosNavigation,
} from './dom-elements/index.js';
import headInnerHTML from './template/head.js';

navMenu.addEventListener('click', (e) => {
  if (e.target.className == 'nav-item') {
    navItem.forEach((nav) => {
      nav.classList.remove('nav-item-active');
    });
    e.target.classList.add('nav-item-active');
  }
});

head[0].innerHTML += headInnerHTML;

// open the first page based on hash
routes();

// navigate to a page when user click back/forward button
hashWatcher();

// navigate to a page when user click navigation
router();

switch (window.location.hash.substr(1)) {
  case '/portfolios':
    portfoliosNavigation.classList.add('nav-item-active');

    break;

  default:
    break;
}
