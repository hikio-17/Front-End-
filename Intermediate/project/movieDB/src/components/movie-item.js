/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */

class MovieItem extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  getClassByRate(vote) {
    if (vote >= 8) {
      return 'green';
    } if (vote >= 5) {
      return 'orange';
    }
    return 'red';
  }

  render() {
    const {
      poster_path, title, vote_average, overview,
    } = this._movie;
    this.innerHTML = `
         <div class="movie">
            <img 
               src=${poster_path !== null ? `https://image.tmdb.org/t/p/w1280/${poster_path}` : 'https://ircenter.gov.ua/images/no_image.png'}
               alt="${title}"
            />
            <div class="movie-info">
               <h3>${title}</h3>
               <span class="${this.getClassByRate(vote_average)}">
                  ${vote_average}
               </span>
            </div>
            <div class="overview">
               <h3>Overview</h3>
               ${overview}
            </div>
         </div>
      `;
  }
}

customElements.define('movie-item', MovieItem);
