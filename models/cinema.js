const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const titles = this.films.map(film => film.title)
  return titles;
};

Cinema.prototype.findByTitle = function(title) {
  return this.films.filter(film => film.title === title);
};

Cinema.prototype.findByGenre = function(genre) {
  return this.films.filter(film => film.genre === genre);
}

Cinema.prototype.checkIfSome = function(year) {
  const someFilms = this.films.filter(film => film.year === year);
  if (someFilms.length > 0){
    return true;
  } else {
    return false;
  };
};

Cinema.prototype.checkLongEnough = function(len) {
  const filmsOverLength = this.films.filter(film => film.length >= len);
  if (filmsOverLength.length === this.films.length) {
    return true
  } else {
    return false;
  }; 
};

Cinema.prototype.totalRunningTime = function() {
  return this.films.reduce((totalTime, film) => totalTime + film.length, 0)
};

Cinema.prototype.filmsByProperty = function(property, value) {
  

  return this.films.filter(film => film.property === value)
};

module.exports = Cinema;
