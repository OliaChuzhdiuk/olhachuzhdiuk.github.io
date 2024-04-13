const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("Something went wrong!");
    };
  });

  return promise;
};

xhrPromise("GET", url)
  .then((response) => {
    const posts = JSON.parse(response);
    let result = "";
    posts.forEach((item) => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;

    return xhrPromise("GET", "https://jsonplaceholder.typicode.com/users");
  })
  .then((usersResponse) => {
    const users = JSON.parse(usersResponse);
    const authorElements = document.querySelectorAll(".author");
    authorElements.forEach((authorElement) => {
      const userId = authorElement.getAttribute("data-id");
      const user = users.find((user) => user.id == userId);
      if (user) {
        authorElement.textContent = user.name;
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
