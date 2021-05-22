import completions from '../data/completions.js';
import { content } from '../dom-elements/index.js';
import detailSkeleton from '../template/detail-skeleton.js';
import { detailCompletion } from '../template/detail.js';
import itemsCardSkeleton from '../template/items-card-skeleton.js';
import { itemsCardCompletions } from '../template/items-card.js';

const completionsPage = () => {
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
    completions.forEach((p) => {
      items.innerHTML += itemsCardCompletions(p);
    });

    // TO DO: tampilkan detail
    detail.innerHTML = detailCompletion(completions[3]);

    // seleksi card
    const cards = document.querySelectorAll('.items-card');
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        const id = parseInt(e.target.id);
        detail.innerHTML = detailSkeleton;
        setTimeout(() => {
          detail.innerHTML = detailCompletion(completions[id]);
        }, 1000);
      });
    });
  }, 1000);
};

export default completionsPage;
