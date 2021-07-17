const episodeCardSkeleton = () => {
  return `
  <div
    class="tutorial-page-wrapper__left__list-episode__episode"
    style="color: #e8e8e8!important; background-color: #e8e8e8!important; border-radius: 3px; margin-right: 8px; margin-bottom: 8px; border: none!important; height: 100px;"
  >
    <div
      class="
        tutorial-page-wrapper__left__list-episode__episode__episode-title
      "
    >
      <div>01</div>
      <div>Pendahuluan</div>
    </div>
  </div>
  `;
};

const videoDetailSkeleton = () => {
  return `
<div
  class="tutorial-page-wrapper__left__video"
></div>
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
    style="color: #e8e8e8!important; background-color: #e8e8e8!important; border-radius: 3px; margin-right: 8px; margin-bottom: 8px;"
  >
    JavaScript Basic
  </h2>
  <h3
    class="
      tutorial-page-wrapper__left__video-detail-button__video-detail__episode-title
    "
    style="color: #e8e8e8!important; background-color: #e8e8e8!important; border-radius: 3px; margin-right: 8px;"
  >
    10 - Memahami Return pada Function
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
    <div class="button-wrapper">
      <button class="btn-change-episode" style="color: #e8e8e8!important; background-color: #e8e8e8!important; border-radius: 3px; margin-right: 8px; margin-top: -5px!important; margin-bottom: 8px; height: 100%;">Previous</button>
    </div>
    <div class="button-wrapper">
      <button class="btn-change-episode" style="color: #e8e8e8!important; background-color: #e8e8e8!important; border-radius: 3px; margin-right: 8px; margin-top: -5px!important; margin-bottom: 8px; height: 100%;">Next</button>
    </div>
  </div>
</div>
</div>`;
};

export { episodeCardSkeleton, videoDetailSkeleton };
