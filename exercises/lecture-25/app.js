// Завдання 1
const list = ["html", "css", "javascript", "react.js"];
const ul = document.createElement("ul");

list.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// Завдання 2
const listWithHref = [
  { html: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { css: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { "react.js": "https://react.dev" },
];

const ol = document.createElement("ol");
listWithHref.forEach((item) => {
  const name = Object.keys(item)[0];
  const link = Object.values(item)[0];

  const list = document.createElement("li");
  list.innerHTML = `<a href="${link}">${name}</a>`;
  ol.appendChild(list);
});
document.body.appendChild(ol);

// Завдання 3
const students = [
  { firstName: "Tom", lastName: "Cat", degree: 230 },
  { firstName: "Nary", lastName: "Ann", degree: 336 },
  { firstName: "John", lastName: "Doe", degree: 400 },
  { firstName: "James", lastName: "Bond", degree: 700 },
];

const table = document.createElement("table");
const header = document.createElement("tr");

const headers = ["firstName", "lastName", "degree"];

headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  th.style.backgroundColor = "blue";
  th.style.color = "azure";
  th.style.padding = "8px";
  header.appendChild(th);
});
table.appendChild(header);

students.forEach((student) => {
  const row = document.createElement("tr");
  headers.forEach((header) => {
    const cell = document.createElement("td");
    cell.textContent = student[header];
    row.appendChild(cell);
  });
  table.appendChild(row);
});
document.body.appendChild(table);
