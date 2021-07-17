import tutorials from '../data/tutorials.js';
import { episodeCard } from '../template/tutorials.js';

const getSeriesNameByWindowReload = () => {
  if (window.location.hash.substr(2).split('/').length === 2) {
    return 'dasar-bahasa-pemrograman-javascript';
  }
  return window.location.hash.substr(2).split('/')[1];
};

const getEpisodeIdByWindowReload = () => {
  if (window.location.hash.substr(2).split('/').length === 1) {
    return '1';
  }
  const hash = window.location.hash.substr(2).split('/');

  if (hash.length !== 3) {
    return 1;
  }
  return hash[2];
};

const updateEpisodeList = (
  series = 'dasar-bahasa-pemrograman-javascript',
  episodeId = '1',
  tutorials
) => {
  const serieIndex = tutorials.findIndex(
    (tutorial) => tutorial.tutorial_slug === series
  );
  let currentSeries = tutorials[serieIndex].episodes ?? tutorials[0].episodes;
  let lastEpisodeShow = parseInt(episodeId) + 3;
  if (lastEpisodeShow > currentSeries.length) {
    lastEpisodeShow = currentSeries.length;
  }
  let episodeList = '';
  for (let index = episodeId - 1; index < lastEpisodeShow; index++) {
    try {
      episodeList += episodeCard(
        currentSeries[index].tutorial_slug,
        currentSeries[index].episode_id,
        currentSeries[index].epsiode_title
      );
    } catch (error) {
      console.log(error);
    }
  }
  return episodeList;
};

const getEpisodeInfo = (seriesName, episodeId) => {
  const serieIndex = tutorials.findIndex(
    (tutorial) => tutorial.tutorial_slug === seriesName
  );
  const currentSeries = tutorials[serieIndex].episodes[episodeId - 1];
  return currentSeries;
};

const isLastVideo = (seriesName, episodeId) => {
  const serieIndex = tutorials.findIndex(
    (tutorial) => tutorial.tutorial_slug === seriesName
  );
  const currentSeriesLength = tutorials[serieIndex].episodes.length;
  return currentSeriesLength === parseInt(episodeId);
};

const getAllEpisodesOfSeries = (seriesName) => {
  const serieIndex = tutorials.findIndex(
    (tutorial) => tutorial.tutorial_slug === seriesName
  );
  return tutorials[serieIndex].episodes;
};

export {
  getSeriesNameByWindowReload,
  getEpisodeIdByWindowReload,
  updateEpisodeList,
  getEpisodeInfo,
  isLastVideo,
  getAllEpisodesOfSeries,
};
