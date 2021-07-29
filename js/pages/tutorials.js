import tutorials from '../data/tutorials.js';
import { content } from '../dom-elements/index.js';
import { allEpisode, videoDetail } from '../template/tutorials.js';
import {
  episodeCardSkeleton,
  videoDetailSkeleton,
} from '../template/tutorialSkeleton.js';
import {
  getAllEpisodesOfSeries,
  getEpisodeIdByWindowReload,
  getEpisodeInfo,
  getSeriesNameByWindowReload,
  isLastVideo,
  seeLearnHistory,
  updateEpisodeList,
  updateLatestWatched,
} from '../utils/tutorials.js';

const tutorialsPage = () => {
  content.style.overflow = 'auto';
  return (content.innerHTML = `<div class="desktop">
    <div class="tutorial-page-wrapper">
      <div class="tutorial-page-wrapper__left">
        <!-- -->
        <div id="detailVideo">${videoDetail()}</div>
        
        <div class="tutorial-page-wrapper__left__list-episode" id="episodes">
          <!-- Rendered by JS -->
        </div>
        <div class="load-more">
          <button class="btn-change-episode" id="loadMore">Show/Hide All Episodes</button>
        </div>
        <ul id="allEpisodesContainer" class="allEpisodesContainer hide">
          <!-- rendered by JS -->
        </ul>
        </div>
      <div class="tutorial-page-wrapper__right">
        <!-- <h2 class="tutorial-page-wrapper__right__title">
          Write Your Code Here
        </h2> -->
        <textarea
          class="tutorial-page-wrapper__right__editor"
          id="editor"
          placeholder="Under development"
          spellcheck="false"
          disabled
        ></textarea
        >
        <div class="tutorial-page-wrapper__right__button-wrapper">
          <button class="btn-change-episode">Check Code</button>
        </div>
        <!--
        <div class="message">
          <div class="message-success">
            Your code has no any errors. Congrats!
          </div>
          <div class="message-failed">
            <span class="error-message">
              Error Message: <br />
              Syntax Error
            </span>
            <span class="error-message">
              Error Message: <br />
              Syntax Error
            </span>
          </div>
        </div>
        <div class="tutorial-page-wrapper__right__output">
          <h4 class="output-title">Output Console</h4>
          <div class="output_body" id="output">
            <span class="console-output"
              ><span class="output-index">Output 1</span>: <br />
              Halo dunia</span
            >
            <span class="console-output"
              ><span class="output-index">Output 2</span>: <br />
              3</span
            >
          </div>
        </div>
        -->
      </div>
    </div>
  </div>
  <div class="mobile">
    <p>
      Maaf tidak tersedia pada tampilan mobile. Silakan gunakan
      komputer/laptop
    </p>
  </div>`);
};

try {
  const whenReload = () => {
    let series;
    let episodeId;

    series = getSeriesNameByWindowReload();
    episodeId = getEpisodeIdByWindowReload();

    const allEpisodes = getAllEpisodesOfSeries(series);

    updateLatestWatched(series, episodeId);

    const currentEpisode = getEpisodeInfo(series, episodeId);
    let episodeList;
    try {
      episodeList = updateEpisodeList(series, episodeId, tutorials);
    } catch (error) {
      console.log(error);
    }
    const isLast = isLastVideo(series, episodeId);
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelector('#loadMore').addEventListener('click', () => {
        document
          .getElementById('allEpisodesContainer')
          .classList.toggle('hide');
      });
      document.getElementById('episodes').innerHTML =
        episodeCardSkeleton() +
        episodeCardSkeleton() +
        episodeCardSkeleton() +
        episodeCardSkeleton();
      document.getElementById('detailVideo').innerHTML = videoDetailSkeleton();

      setTimeout(() => {
        document.getElementById('episodes').innerHTML = episodeList;
        document
          .querySelector('.tutorial-page-wrapper__left__list-episode__episode')
          .classList.add('current-episode');
        document.getElementById('detailVideo').innerHTML = videoDetail(
          currentEpisode.tutorial_name,
          currentEpisode.episode_id,
          currentEpisode.epsiode_title,
          currentEpisode.episode_video,
          currentEpisode.tutorial_slug,
          isLast
        );
        let episodesOfSeries = '';
        allEpisodes.forEach((episode) => {
          if (parseInt(episode.episode_id) === parseInt(episodeId)) {
            episodesOfSeries += allEpisode(
              episode.tutorial_slug,
              episode.episode_id,
              episode.epsiode_title,
              true
            );
          } else {
            episodesOfSeries += allEpisode(
              episode.tutorial_slug,
              episode.episode_id,
              episode.epsiode_title,
              false
            );
          }
        });
        document.getElementById('allEpisodesContainer').innerHTML =
          episodesOfSeries;
      }, 10);
    });
  };
  if (location.hash.substr(2, 9) == 'tutorials') {
    whenReload();
  }

  window.addEventListener('hashchange', (e) => {
    if (e.currentTarget.location.hash.substr(2, 9) == 'tutorials') {
      let series = e.currentTarget.location.hash.substr(2).split('/')[1];
      let episodeId = e.currentTarget.location.hash.substr(2).split('/')[2];

      updateLatestWatched(series, episodeId);

      const allEpisodes = getAllEpisodesOfSeries(series);
      const currentEpisode = getEpisodeInfo(series, episodeId);
      const episodeList = updateEpisodeList(series, episodeId, tutorials);
      const isLast = isLastVideo(series, episodeId);
      setTimeout(() => {
        document.querySelector('#loadMore').addEventListener('click', () => {
          document
            .getElementById('allEpisodesContainer')
            .classList.toggle('hide');
        });
        document.getElementById('episodes').innerHTML =
          episodeCardSkeleton() +
          episodeCardSkeleton() +
          episodeCardSkeleton() +
          episodeCardSkeleton();
        document.getElementById('detailVideo').innerHTML =
          videoDetailSkeleton();
        setTimeout(() => {
          document.getElementById('episodes').innerHTML = episodeList;
          document
            .querySelector(
              '.tutorial-page-wrapper__left__list-episode__episode'
            )
            .classList.add('current-episode');
          document.getElementById('detailVideo').innerHTML = videoDetail(
            currentEpisode.tutorial_name,
            currentEpisode.episode_id,
            currentEpisode.epsiode_title,
            currentEpisode.episode_video,
            currentEpisode.tutorial_slug,
            isLast
          );
          let episodesOfSeries = '';
          allEpisodes.forEach((episode) => {
            if (parseInt(episode.episode_id) === parseInt(episodeId)) {
              episodesOfSeries += allEpisode(
                episode.tutorial_slug,
                episode.episode_id,
                episode.epsiode_title,
                true
              );
            } else {
              episodesOfSeries += allEpisode(
                episode.tutorial_slug,
                episode.episode_id,
                episode.epsiode_title,
                false
              );
            }
          });
          document.getElementById('allEpisodesContainer').innerHTML =
            episodesOfSeries;
        }, 1000);
        seeLearnHistory();
      }, 0.5);
    }
  });
} catch (error) {
  console.log(error);
  window.location = '/';
}

export default tutorialsPage;
