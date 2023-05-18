async function socreMovie(userName, movieId) {
  await fetch(
    `http://localhost:7070/api/scores/${userName}/${movieId}/${
      Math.random() * 5
    }`,
    { method: 'POST' }
  );
}

async function allUsersScoreMovie(movieId) {
  for (let i = 0; i < 10; i++) {
    await socreMovie(`bot${i}`, movieId);
  }
}

async function scoreAllMovies() {
  const { count } = await fetch(`http://localhost:7070/api/movies/count`).then(
    (result) => result.json()
  );
  const movies = await fetch(
    `http://localhost:7070/api/movies?page=1&limit=${count}`
  ).then((result) => result.json());
  for (let i = 0; i < movies.length; i++) {
    await allUsersScoreMovie(movies[i].movieId);
  }
}

scoreAllMovies();
