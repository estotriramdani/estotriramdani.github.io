import { router, routes, hashWatcher } from './config/route.js';
import './utils/lazysizes.min.js';
import {
  navItem,
  navMenu,
  content,
  head,
  portfoliosNavigation,
} from './dom-elements/index.js';
import headInnerHTML from './template/head.js';
import { seeLearnHistory } from './utils/tutorials.js';

navMenu.addEventListener('click', (e) => {
  if (e.target.className == 'nav-item') {
    navItem.forEach((nav) => {
      nav.classList.remove('nav-item-active');
    });
    e.target.classList.add('nav-item-active');
  }
});

if (localStorage.getItem('latestWatched') === null) {
  document
    .getElementById('tutorials')
    .setAttribute('href', '#/tutorials/dasar-bahasa-pemrograman-javascript/2');
} else {
  const watchHistory = JSON.parse(localStorage.getItem('latestWatched'));
  document
    .getElementById('tutorials')
    .setAttribute(
      'href',
      `#/tutorials/${watchHistory.seriesName}/${watchHistory.episodeId}`
    );
}

window.addEventListener('hashchange', (e) => {
  if (e.currentTarget.location.hash.substr(2, 9) != 'tutorials') {
    document.querySelector('.history').style.display = 'none';
  } else {
    document.querySelector('.history').style.display = 'block';
  }
});

if (location.hash.substr(2, 9) != 'tutorials') {
  document.querySelector('.history').style.display = 'none';
} else {
  document.querySelector('.history').style.display = 'block';
}

head[0].innerHTML += headInnerHTML;

// open the first page based on hash
routes();

// navigate to a page when user click back/forward button
hashWatcher();

// navigate to a page when user click navigation
router();

if (window.localStorage.getItem('learnHistory') == null) {
  window.localStorage.setItem('learnHistory', '[]');
} else {
  seeLearnHistory();
}

document.getElementById('deleteHistory').addEventListener('click', () => {
  window.localStorage.setItem('learnHistory', '[]');
  document.getElementById('historyList').innerHTML = `
  <li style="margin-bottom: 10px">
    History is empty
  </li>`;
});

document.getElementById('showHideHistory').addEventListener('click', () => {
  document.querySelector('.learn-history-box').classList.toggle('hide');
});

switch (window.location.hash.substr(1)) {
  case '/portfolios':
    portfoliosNavigation.classList.add('nav-item-active');

    break;

  default:
    break;
}
