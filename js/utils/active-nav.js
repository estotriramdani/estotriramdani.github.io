import { navItem } from '../dom-elements/index.js';

const activeNav = (navigation) => {
  navItem.forEach((nav) => {
    nav.classList.remove('nav-item-active');
  });
  navigation.classList.add('nav-item-active');
};

export default activeNav;
