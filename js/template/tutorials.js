const episodeCard = (slug, episodeId, episodeTitle) => {
  return `
  <a href="#/tutorials/${slug}/${episodeId}"
    class="tutorial-page-wrapper__left__list-episode__episode"
  >
    <div class="tutorial-page-wrapper__left__list-episode__episode__episode-title">
      <div>${
        episodeId.toString().length === 1 ? '0' + episodeId : episodeId
      }</div>
      <div>
      ${
        episodeTitle.length >= 40
          ? episodeTitle.substr(0, 39) + '...'
          : episodeTitle
      }
      </div>
    </div>
  </a>
  `;
};

export { episodeCard };
