const detailPortfolio = (p) => {
  return `
  <div class="cover-img">
    <img src="${p.image}" alt="">
  </div>
  <div class="detail__body" style="padding-left: 10px;">
    <h3 class="detail__body__title">${p.title}</h3>
    <div class="detail__body__subtitle">
      <p>${p.role}</p>
      <p>${p.type}</p>
    </div>
    <p class="detail__body__description">
      ${p.description}
    </p>
    <div class="detail__body__more-description">
      <p>Technologies: ${p.technology} </p>
      <p>Link: <a target="_blank" href="${p.link}">Click Me</a></p>
    </div>
  </div>
  `;
};

const detailCompletion = (c) => {
  return `
  <div class="cover-img">
    <img src="${c.image}" alt="">
  </div>
  <div class="detail__body" style="padding-left: 10px;">
    <h3 class="detail__body__title">${c.name}</h3>
    <div class="detail__body__subtitle">
      <p>${c.institution}</p>
      <p>${c.date}</p>
    </div>
    <p class="detail__body__description">
      ${c.description}
    </p>
    <div class="detail__body__more-description">
      <p>Link: <a target="_blank" href="${c.link}">Click Me</a></p>
    </div>
  </div>
  `;
};

const detailExperience = (e) => {
  return `
  <div class="cover-img">
    <img src="${e.image}" alt="">
  </div>
  <div class="detail__body" style="padding-left: 10px;">
    <h3 class="detail__body__title">${e.name}</h3>
    <div class="detail__body__subtitle">
      <p>${e.role}</p>
      <p>${e.type} (${e.date})</p>
    </div>
    <p class="detail__body__description">
      ${e.description} 
    </p>
  </div>
  `;
};

export { detailPortfolio, detailCompletion, detailExperience };
