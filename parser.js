const fs = require('fs');
const readline = require('readline');
const extra_info = require('./extra_data');

const readInterface = readline.createInterface({
  input: fs.createReadStream('./movie_parsed.json'),
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
  parseRatingNum();
  parseGenre();
  addMoreInfo();
  const content = JSON.stringify(result);

  // console.log(result);

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

function parseRatingNum() {
  result.forEach((movie) => {
    movie.rating_num = parseFloat(movie.rating_num[0]);
  });
}

function addMoreInfo() {
  // Cover Image URL
  result.forEach((movie) => {
    const res = findMovieByIdInExtraInfo(movie.movie_id);
    if (res) {
      movie.img_url = res.图片链接;
      movie.abstract = res.概况;
    } else {
      movie.img_url = '没有找到';
      movie.abstract = '没有找到';
    }
  });
}

function findMovieByIdInExtraInfo(id) {
  for (let i = 0; i < extra_info.length; i++) {
    if (extra_info[i].电影详情链接.includes(id)) {
      return extra_info[i];
    }
  }
  return null;
}

function parseGenre() {
  result.forEach((movie) => {
    movie.genre = movie.genre.join('/');
  });
}
