const clubs = require('./data/clubs');

class DataSource {
  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = clubs.filter((club) => club.name.toUpperCase().includes(keyword.toUpperCase()));
      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`${keyword} is not found`);
      }
    })
  }
}

module.exports = DataSource;