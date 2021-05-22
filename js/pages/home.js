import { content } from '../dom-elements/index.js';
import homeSkeleton from '../template/home-skeleton.js';
import homeTemplate from '../template/home-template.js';

const homePage = () => {
  content.style.overflow = 'auto';
  content.innerHTML = homeSkeleton;
  setTimeout(() => {
    content.innerHTML = homeTemplate;
  }, 1000);
};
export default homePage;
