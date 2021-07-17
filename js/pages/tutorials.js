import tutorials from '../data/tutorials.js';
import { content } from '../dom-elements/index.js';
import { episodeCard } from '../template/tutorials.js';
import {
  getEpisodeIdByHashChange,
  getEpisodeIdByWindowReload,
  getSeriesNameByHashChange,
  getSeriesNameByWindowReload,
} from '../utils/tutorials.js';

const tutorialsPage = () => {
  content.style.overflow = 'auto';
  return (content.innerHTML = `<div class="desktop">
    <div class="tutorial-page-wrapper">
      <div class="tutorial-page-wrapper__left">
        <!-- -->
        <iframe
          class="tutorial-page-wrapper__left__video"
          src="https://www.youtube.com/embed/8DdHto77744"
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
              JavaScript Basic
            </h2>
            <h3
              class="
                tutorial-page-wrapper__left__video-detail-button__video-detail__episode-title
              "
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
                <button class="btn-change-episode">Previous</button>
              </div>
              <div class="button-wrapper">
                <button class="btn-change-episode">Next</button>
              </div>
            </div>
          </div>
        </div>
        <div class="tutorial-page-wrapper__left__list-episode" id="episodes">
          
        </div>
        <div class="load-more">
          <button class="btn-change-episode">Load More Episodes</button>
        </div>
        <p style="margin-bottom: 5px">Other Series</p>
        <div class="tutorial-page-wrapper__left__other-series">
          <a class="other-series-item" href="#">
            <img class="series-thumb" src="img/place-img.jfif" alt="" />
            <p class="other-series-item_name">Basic JavaScript</p>
          </a>
          <a class="other-series-item" href="#">
            <img class="series-thumb" src="img/place-img.jfif" alt="" />
            <p class="other-series-item_name">Algoritme JavaScript</p>
          </a>
          <a class="other-series-item" href="#">
            <img class="series-thumb" src="img/place-img.jfif" alt="" />
            <p class="other-series-item_name">Data Struktur JavaScript</p>
          </a>
          <a class="other-series-item" href="#">
            <img class="series-thumb" src="img/place-img.jfif" alt="" />
            <p class="other-series-item_name">OOP JavaScript</p>
          </a>
        </div>
      </div>
      <div class="tutorial-page-wrapper__right">
        <!-- <h2 class="tutorial-page-wrapper__right__title">
          Write Your Code Here
        </h2> -->
        <textarea
          class="tutorial-page-wrapper__right__editor"
          id="editor"
          placeholder="Write your JavaScript code here..."
          spellcheck="false"
        ></textarea
        >
        <div class="tutorial-page-wrapper__right__button-wrapper">
          <button class="btn-change-episode">Check Code</button>
        </div>
        <div class="message">
          <!-- <div class="message-success">
            Your code has no any errors. Congrats!
          </div> -->
          <!-- <div class="message-failed">
            <span class="error-message">
              Error Message: <br />
              Syntax Error
            </span>
            <span class="error-message">
              Error Message: <br />
              Syntax Error
            </span>
          </div>
        </div> -->
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

const whenReload = () => {
  let series = getSeriesNameByWindowReload();
  const serieIndex = tutorials.findIndex(
    (tutorial) => tutorial.tutorial_slug == series
  );
  let currentSeries = tutorials[serieIndex].episodes;

  let episodeList = '';
  for (let index = 0; index <= 2; index++) {
    episodeList += episodeCard(
      currentSeries[index].tutorial_slug,
      currentSeries[index].episode_id,
      currentSeries[index].epsiode_title
    );
  }
  window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('episodes').innerHTML = episodeList;
  });
};

whenReload();

window.addEventListener('hashchange', (e) => {
  let series = e.currentTarget.location.hash.substr(2).split('/')[1];
  const serieIndex = tutorials.findIndex(
    (tutorial) => tutorial.tutorial_slug == series
  );
  let currentSeries = tutorials[serieIndex].episodes;

  let episodeList = '';
  for (let index = 0; index <= 2; index++) {
    episodeList += episodeCard(
      currentSeries[index].tutorial_slug,
      currentSeries[index].episode_id,
      currentSeries[index].epsiode_title
    );
  }
  setTimeout(() => {
    document.getElementById('episodes').innerHTML = episodeList;
  }, 0.5);
});

export default tutorialsPage;
