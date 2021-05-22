import experiences from '../data/experiences.js';
import { content } from '../dom-elements/index.js';
import detailSkeleton from '../template/detail-skeleton.js';
import { detailExperience } from '../template/detail.js';
import itemsCardSkeleton from '../template/items-card-skeleton.js';
import { itemsCardExperiences } from '../template/items-card.js';

const experiencesPage = () => {
  const items = document.querySelector('.items');
  const detail = document.querySelector('.detail');

  detail.innerHTML = detailSkeleton;
  items.innerHTML = itemsCardSkeleton();

  items.style.overflow = 'hidden';
  setTimeout(() => {
    items.style.overflow = 'auto';
    content.style.overflow = 'auto';

    // set items di menu
    items.innerHTML = '';
    experiences.forEach((p) => {
      items.innerHTML += itemsCardExperiences(p);
    });

    // TO DO: tampilkan detail
    detail.innerHTML = detailExperience(experiences[0]);

    // seleksi card
    const cards = document.querySelectorAll('.items-card');
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const id = parseInt(e.target.id);
        detail.innerHTML = detailSkeleton;
        setTimeout(() => {
          detail.innerHTML = detailExperience(experiences[id]);
        }, 1000);
      });
    });
  }, 1000);
};

export default experiencesPage;
