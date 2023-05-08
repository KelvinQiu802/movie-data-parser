const fs = require('fs');
const readline = require('readline');

const readInterface = readline.createInterface({
  input: fs.createReadStream('./movie.json'),
  console: false,
});

const result = [];

readInterface.on('line', (line) => {
  result.push(JSON.parse(line));
});

readInterface.on('close', () => {
  parseTitleToString();
  parseMovieId();
  parseMovieTime();
  parseReleaseDate();
  const content = JSON.stringify(result);
  console.log(result);

  fs.writeFile('./movie.js', content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Finished');
    }
  });
});

function parseTitleToString() {
  result.forEach((movie) => {
    movie.movie_title = movie.movie_title[0];
  });
}

function parseMovieId() {
  result.forEach((movie) => {
    movie.movie_id = parseInt(movie.movie_id[0].replace('电影-', ''));
  });
}

function parseMovieTime() {
  result.forEach((movie) => {
    movie.runtime = movie.runtime[0];
  });
}

function parseReleaseDate() {
  result.forEach((movie) => {
    movie.release_date = movie.release_date[0];
  });
}
