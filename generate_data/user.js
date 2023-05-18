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

async function createTenUsers() {
  for (let i = 0; i < 10; i++) {
    await createUser(`bot${i}`);
  }
}

createTenUsers();
