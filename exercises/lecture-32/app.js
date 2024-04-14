const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const fetchUsers = async (userId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
    const userData = await response.json();
    return userData.name;
  } catch (error) {
    console.error(error);
  }
};

fetchData(url)
  .then((posts) => {
    let result = "";
    posts.forEach((item) => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
    return posts;
  })
  .then((posts) => {
    const users = document.querySelectorAll(".author");
    users.forEach(async (user) => {
      const userId = user.dataset.id;
      const userName = await fetchUsers(userId);
      user.textContent = userName;
    });
  });
