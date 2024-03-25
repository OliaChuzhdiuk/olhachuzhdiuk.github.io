// Завдання 1
const elTitle = document.querySelectorAll("h1");

console.log("Type of:", typeof elTitle, "Length:", elTitle.length);
for (let i = 0; i < elTitle.length; i += 1) {
  console.log(elTitle[i].textContent);
}
// Завдання 2
const firstParagraph = document.querySelector("#p1");
firstParagraph.style.backgroundColor = "gold";

// Завдання 3
const secondParagraph = document.querySelector("#p2");
secondParagraph.style.cssText =
  "background-color:gold; color: blue; font-size: 2rem;";

// Завдання 4
const thirdParagraph = document.querySelector("#p3");
thirdParagraph.classList.add("third");

// Завдання 5
const fourthParagraph = document.querySelector("#p4");
fourthParagraph.classList.add("fourth");
fourthParagraph.classList.add("border");

// Завдання 6
const containers = document.querySelectorAll(".container");
for (let i = 0; i < containers.length; i++) {
  let firstChild = containers[i].firstElementChild;
  console.log(firstChild);
}

// Завдання 7
const containersText = document.querySelectorAll(".container");
for (let i = 0; i < containersText.length; i++) {
  let firstChild = containersText[i].firstElementChild.textContent;
  console.log(firstChild);
}

// Завдання 8
// const headers = document.querySelectorAll(".container header");

// for (let i = 0; i < headers.length; i++) {
//   const header = headers[i];
//   const titleElement = header.querySelector(".title");

//   switch (i) {
//     case 0:
//       break;
//     case 1:
//       const h2 = document.createElement("h2");
//       h2.innerHTML = titleElement.innerHTML;
//       header.parentNode.replaceChild(h2, header);
//       break;
//     case 2:
//       const h3 = document.createElement("h3");
//       h3.innerHTML = titleElement.innerHTML;
//       header.parentNode.replaceChild(h3, header);
//       break;
//     case 3:
//       const h4 = document.createElement("h4");
//       h4.innerHTML = titleElement.innerHTML;
//       const originalId = titleElement.getAttribute("id");
//       const originalClass = titleElement.getAttribute("class");
//       if (originalId) h4.setAttribute("id", originalId);
//       if (originalClass) h4.setAttribute("class", originalClass);
//       header.parentNode.replaceChild(h4, header);
//       break;
//     default:
//       break;
//   }
// }

// const headers = document.querySelectorAll(".container header");
// const classes = ["first", "second", "third", "fourth"];
// for (let i = 0; i < headers.length; i++) {
//   headers[i].classList.add(classes[i]);
// }
