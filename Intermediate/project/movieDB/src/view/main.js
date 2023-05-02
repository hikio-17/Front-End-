/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
import DataSource from '../script/data/data-source.js';
import '../components/movie-list.js';

const main = () => {
  const movieList = document.querySelector('movie-list');
  const form = document.querySelector('#form');
  const search = document.querySelector('#search');

  const getMoviesUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=72c6be88a6da7daa325b438c64a3bbd4';

  const searchMoviesUrl = 'https://api.themoviedb.org/3/search/movie?api_key=72c6be88a6da7daa325b438c64a3bbd4&query=';

  const showMovies = async (url) => {
    const result = await DataSource.getMovies(url);
    if (result.length === 0) {
      renderErrorMsg();
    }
    renderResult(result);
  };

  showMovies(getMoviesUrl);

  const renderResult = (result) => {
    movieList.movies = result;
  };

  const renderErrorMsg = () => {
    const mainContainer = document.querySelector('main');
    const errorMessage = document.createElement('h2');
    errorMessage.innerText = 'Movie not found';

    mainContainer.appendChild(errorMessage);
  };

  const removeAllChildNodes = (parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchKeyword = search.value;
    if (searchKeyword) {
      removeAllChildNodes(movieList);
      showMovies(searchMoviesUrl + searchKeyword);
      search.value = '';
    }
  });
};

export default main;
