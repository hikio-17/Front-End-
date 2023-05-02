/* eslint-disable prefer-promise-reject-errors */
class DataSource {
  static getMovies(url) {
    return fetch(url)
      .then((response) => response.json())
      .then((response) => {
        if (response.results) {
          return Promise.resolve(response.results);
        }
        return Promise.reject('movie not found');
      });
  }
}

export default DataSource;
