const itemsCardPortfolios = (card) => {
  return `<div class="items-card" id="${card.id}">
  <div class="thumbnail" id="${card.id}">
    <img src="${card.thumb}" alt="${card.title}" id="${card.id}" />
  </div>
  <div class="detail" id="${card.id}">
    <p class="title" id="${card.id}">${card.title}</p>
    <p class="short-desc" id="${card.id}">
      ${card.role}
    </p>
    <p class="type" id="${card.id}">${card.type}</p>
  </div>
</div>`;
};

const itemsCardCompletions = (card) => {
  return `<div class="items-card" id="${card.id}">
  <div class="thumbnail" id="${card.id}">
    <img src="${card.thumb}" alt="${card.name}" id="${card.id}" />
  </div>
  <div class="detail" id="${card.id}">
    <p class="title" id="${card.id}">${card.name}</p>
    <p class="short-desc" id="${card.id}">
      ${card.institution}
    </p>
    <p class="type" id="${card.id}">${card.date}</p>
  </div>
</div>`;
};

const itemsCardExperiences = (card) => {
  return `<div class="items-card" id="${card.id}">
  <div class="thumbnail" id="${card.id}">
    <img src="${card.thumb}" alt="${card.name}" id="${card.id}" />
  </div>
  <div class="detail" id="${card.id}">
    <p class="title" id="${card.id}">${card.name}</p>
    <p class="short-desc" id="${card.id}">
      ${card.role}
    </p>
    <p class="type" id="${card.id}">${card.date}</p>
  </div>
</div>`;
};

export { itemsCardPortfolios, itemsCardCompletions, itemsCardExperiences };
