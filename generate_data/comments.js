const { log } = require('console');

async function createUser(name) {
  const PASSWORD = '123';
  await fetch(`http://localhost:7070/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: name,
      password: PASSWORD,
    }),
  });
}

async function createAllUser() {
  const users = await getUserNameList();
  for (let i = 0; i < users.length; i++) {
    log(users[i]);
    await createUser(users[i]);
  }
}

async function getUserNameList() {
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (result) => result.json()
  );
  const names = users.map((u) => u.username);
  return names;
}

async function userComment(userName, movieId, content) {
  await fetch(`http://localhost:7070/api/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userName: userName,
      movieId: movieId,
      content: content,
    }),
  });
}

async function allUserComment(movieId) {
  const users = await getUserNameList();
  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/comments`
  ).then((result) => result.json());
  for (let i = 0; i < users.length; i++) {
    await userComment(users[i], movieId, comments[i].body);
  }
}

async function allUserCommentToAllMovies() {
  const { count } = await fetch(`http://localhost:7070/api/movies/count`).then(
    (result) => result.json()
  );
  const movies = await fetch(
    `http://localhost:7070/api/movies?page=1&limit=${count}`
  ).then((result) => result.json());
  for (let i = 0; i < movies.length; i++) {
    log(i);
    await allUserComment(movies[i].movieId);
  }
}

allUserCommentToAllMovies();
