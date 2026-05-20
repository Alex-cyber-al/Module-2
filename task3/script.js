async function fetchUserPosts(userId) {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    if (!userResponse.ok) {
      throw new Error("Помилка завантаження користувача");
    }

    const user = await userResponse.json();

    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    if (!postsResponse.ok) {
      throw new Error("Помилка завантаження постів");
    }

    const posts = await postsResponse.json();

    return {
      name: user.name,
      email: user.email,
      postsCount: posts.length
    };
  } catch (error) {
    return {
      error: "Не вдалося завантажити дані"
    };
  }
}

// Перевірка роботи функції
async function showResult() {
  const result = await fetchUserPosts(1);

  document.getElementById("result").innerText =
    JSON.stringify(result, null, 2);

  console.log(result);
}

showResult();