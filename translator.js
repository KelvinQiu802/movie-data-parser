const translate = require('@iamtraction/google-translate');
const { log } = require('console');
const data = require('./movie');
const fs = require('fs');

async function toEnglish(text) {
  const result = await translate(text, { from: 'zh-cn', to: 'en' });
  return result.text;
}

async function translateString() {
  for (let i = 0; i < data.length; i++) {
    const movie = data[i];
    movie.country = await toEnglish(movie.country);
    movie.intro = await toEnglish(movie.intro);
    movie.starring = await toEnglish(movie.starring);
    movie.directedBy = await toEnglish(movie.directedBy);
    movie.genre = await toEnglish(movie.genre);
    movie.movie_title = capitalize(
      await toEnglish(removeLettersAndSpaces(movie.movie_title))
    );
    movie.language = await toEnglish(movie.language);
    movie.runtime = await toEnglish(movie.runtime);
    movie.abstract = await toEnglish(movie.abstract);
    log(
      `--> ${i} out of ${data.length} -- ${Math.round(
        (i / data.length) * 100
      )}%`
    );
  }
}

function removeLettersAndSpaces(str) {
  return str.replace(/[a-zA-Z\s]/g, '');
}

(async () => {
  await translateString();
  fs.writeFile('./movie_parsed.json', JSON.stringify(data), (err) => {
    if (err) {
      log(err.message);
    } else {
      log('Finished!');
    }
  });
})();

function capitalize(sentence) {
  const smallWords = [
    'a',
    'an',
    'and',
    'as',
    'at',
    'but',
    'by',
    'for',
    'in',
    'nor',
    'of',
    'on',
    'or',
    'so',
    'the',
    'to',
    'up',
    'yet',
  ];
  let words = sentence.match(/\S+/g);
  for (let i = 0; i < words.length; i++) {
    if (
      words[i].match(/[a-z]/i) &&
      !smallWords.includes(words[i].toLowerCase())
    ) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }
  return words.join(' ');
}
