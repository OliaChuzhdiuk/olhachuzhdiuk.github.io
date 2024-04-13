async function waitForUserInput() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const firstName = document.querySelector('input[name="firstName"]').value;
  const lastName = document.querySelector('input[name="lastName"]').value;

  const h1 = document.getElementById("waiting");

  if (!firstName && !lastName) {
    h1.textContent = "I'm miss You";
  } else {
    h1.textContent = `Hello ${firstName} ${lastName}!`;
  }

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const posts = JSON.parse(xhr.responseText);
      const demo = document.getElementById("demo");
      demo.innerHTML = "";

      posts.forEach((post) => {
        const postHTML = template(post);
        demo.innerHTML += postHTML;
      });
    }
  };

  xhr.send();
}
const template = (item) => `
    <h3>${item.title}</h3>
    <div>${item.body}</div>
`;

waitForUserInput();
