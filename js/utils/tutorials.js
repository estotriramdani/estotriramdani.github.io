const getSeriesNameByWindowReload = () => {
  return window.location.hash.substr(2).split('/')[1];
};

const getSeriesNameByHashChange = () => {
  window.addEventListener('hashchange', (e) => {
    return e.currentTarget.location.hash.substr(2).split('/')[1];
  });
};

const getEpisodeIdByWindowReload = () => {
  const hash = window.location.hash.substr(2).split('/');
  if (hash.length !== 3) {
    return 1;
  }
  return hash[2];
};

const getEpisodeIdByHashChange = () => {
  let episodeId;
  window.addEventListener('hashchange', (e) => {
    const hash = e.currentTarget.location.hash.substr(2).split('/');
    if (hash.length != 3) {
      episodeId = 1;
    } else {
      episodeId = hash[2];
    }
  });
  return episodeId;
};

export {
  getSeriesNameByWindowReload,
  getSeriesNameByHashChange,
  getEpisodeIdByWindowReload,
  getEpisodeIdByHashChange,
};
