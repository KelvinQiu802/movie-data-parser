// 10个用户，对每个评论的操作
// for 随机，大于0.5进行操作 再 随机 大于0.5是UP，小于是DOWN

const { log } = require('console');

async function getUserNameList() {
  const users = await fetch(`https://jsonplaceholder.typicode.com/users`).then(
    (result) => result.json()
  );
  const names = users.map((u) => u.username);
  return names;
}

async function voteAllMovies() {
  const { count } = await fetch(`http://localhost:7070/api/movies/count`).then(
    (result) => result.json()
  );
  const movies = await fetch(
    `http://localhost:7070/api/movies?page=1&limit=${count}`
  ).then((result) => result.json());
  for (let i = 169; i < movies.length; i++) {
    log(i);
    await voteAMovie(movies[i]);
  }
}

async function voteAMovie(movie) {
  const comments = await fetch(
    `http://localhost:7070/api/comments/movie/${movie.movieId}`
  ).then((result) => result.json());
  for (let i = 0; i < comments.length; i++) {
    await voteAComment(comments[i]);
  }
}

async function voteAComment(comment) {
  const users = await getUserNameList();
  for (let i = 0; i < users.length; i++) {
    if (Math.random() > 0.5) {
      if (Math.random() > 0.5) {
        // UP
        await fetch(
          `http://localhost:7070/api/commentvotes/${users[i]}/${comment.commentId}/UP`,
          { method: 'POST' }
        );
      } else {
        // DOWN
        await fetch(
          `http://localhost:7070/api/commentvotes/${users[i]}/${comment.commentId}/DOWN`,
          { method: 'POST' }
        );
      }
    }
  }
}

voteAllMovies();
