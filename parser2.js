const { log } = require('console');
const data = require('./movie');
const fs = require('fs');

parseArray();
parseIntro();
parseVoteNum();

fs.writeFile('./movie_parsed.json', JSON.stringify(data), (err) => {
  if (err) {
    log(err.message);
  } else {
    log('Finished!');
  }
});

function parseArray() {
  data.forEach((movie) => {
    movie.genre = movie.genre.join('/');
    movie.starring = movie.starring.join('/');
    movie.directedBy = movie.directedBy.join('/');
  });
}

function parseIntro() {
  data.forEach((movie) => {
    movie.intro = movie.intro.join(' ');
    movie.intro = movie.intro.trim();
    while (movie.intro.includes(' ')) {
      movie.intro = movie.intro.replace(' ', '');
    }
    while (movie.intro.includes('\n')) {
      movie.intro = movie.intro.replace('\n', '');
    }
  });
}

function parseVoteNum() {
  data.forEach((movie) => {
    movie.vote_num = movie.vote_num[0];
  });
}
