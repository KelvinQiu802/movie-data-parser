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
  const content = JSON.stringify(result);
  fs.writeFile('./movie.js', content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Finished');
    }
  });
});
