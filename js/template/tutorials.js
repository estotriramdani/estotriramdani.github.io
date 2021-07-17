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

const videoDetail = (
  tutorial_name = 'Dasar Bahasa Pemrograman JavaScript',
  episode_id = '1',
  epsiode_title = 'Pendahuluan (Ilmu Komputer, Pemrograman, dan Bahasa Pemrograman)',
  episode_video = 't7Um0AOyTEA',
  tutorial_slug = 'dasar-bahasa-pemrograman-javascript',
  isLast = false
) => {
  return `
      
        <iframe
          class="tutorial-page-wrapper__left__video"
          src="https://www.youtube.com/embed/${episode_video}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      
        <div class="tutorial-page-wrapper__left__video-detail-button">
          <div
            class="
              tutorial-page-wrapper__left__video-detail-button__video-detail
            "
          >
            <h2
              class="
                tutorial-page-wrapper__left__video-detail-button__video-detail__series-name
              "
            >
              ${tutorial_name}
            </h2>
            <h3
              class="
                tutorial-page-wrapper__left__video-detail-button__video-detail__episode-title
              "
            >
              ${
                episode_id.toString().length === 1
                  ? '0' + episode_id
                  : episode_id
              } - ${epsiode_title}
            </h3>
          </div>
          <div
            class="
              tutorial-page-wrapper__left__video-detail-button__button
            "
          >
            <div
              class="
                tutorial-page-wrapper__left__video-detail-button__button__change-episode
              "
            >
              ${
                episode_id <= 1
                  ? '<div class="button-wrapper"><button class="btn-disabled" disabled>Previous</button></div>'
                  : '<div class="button-wrapper"><a href="#/tutorials/' +
                    tutorial_slug +
                    '/' +
                    (parseInt(episode_id) - 1) +
                    '" class="btn-change-episode">Previous</a></div>'
              }
              ${
                isLast
                  ? '<div class="button-wrapper"><button class="btn-disabled" disabled>Next</button></div>'
                  : '<div class="button-wrapper"><a href="#/tutorials/' +
                    tutorial_slug +
                    '/' +
                    (parseInt(episode_id) + 1) +
                    '" class="btn-change-episode">Next</a></div>'
              }
            </div>
          </div>
        </div>
  `;
};

const allEpisode = (tutorial_slug, episode_id, episode_title, isCurrent) => {
  return `
    <li><a href="#/tutorials/${tutorial_slug}/${episode_id}" ${
    isCurrent ? 'style="font-weight: bold;"' : ''
  }>${episode_id.toString().length === 1 ? '0' + episode_id : episode_id} - ${
    episode_title.length > 43
      ? episode_title.substr(0, 42) + '...'
      : episode_title
  }</a></li>
  `;
};

export { episodeCard, videoDetail, allEpisode };
