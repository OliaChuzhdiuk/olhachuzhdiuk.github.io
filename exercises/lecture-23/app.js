const alert = document.querySelector(".alert");
// Завдання 1
const primaryButton = document.querySelector(".btn-primary");
primaryButton.onclick = function () {
  alert.classList.add("alert-primary");
  alert.textContent = "A simple primary alert—check it out!";
};

// Завдання 2
const secondaryButton = document.querySelector(".btn-secondary");
secondaryButton.addEventListener("click", function () {
  alert.classList.add("alert-primary");
  alert.textContent = "A simple secondary alert—check it out!";
});

// Завдання 3
const successButton = document.querySelector(".btn-success");
successButton.addEventListener("mouseover", function () {
  alert.classList.add("alert-success");
  alert.textContent = "A simple success alert—check it out!";
});
successButton.addEventListener("mouseout", function () {
  alert.classList.remove("alert-success");
  alert.textContent = "";
});

// Завдання 4
const dangerButton = document.querySelector(".btn-danger");
dangerButton.addEventListener("focus", function () {
  alert.classList.add("alert-danger");
  alert.textContent = "A simple danger alert—check it out!";
});
dangerButton.addEventListener("focusout", function () {
  alert.classList.remove("alert-danger");
  alert.textContent = "";
});

// Завдання 5
const darkButton = document.querySelector(".btn-dark");
const lightButton = document.querySelector(".btn-light");
darkButton.addEventListener("click", toggleMode);
lightButton.addEventListener("click", toggleMode);

function toggleMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  darkButton.style.display = isDarkMode ? "none" : "inline-block";
  lightButton.style.display = isDarkMode ? "inline-block" : "none";
}

// Завдання 6
const infoButton = document.querySelector(".btn-info");
infoButton.addEventListener("keypress", handleKeyPress);
function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alert.classList.add("alert-info");
    alert.textContent = "A simple info alert—check it out!";
  }
}

// Завдання 7
const allCards = document.querySelectorAll(".card");
for (const card of allCards) {
  const cardTitle = card.querySelector(".card-title");
  if (cardTitle) {
    console.log(cardTitle.textContent);
  }
}

// Завдання 8
const allCard = document.querySelectorAll(".card");
for (const card of allCard) {
  const cardButton = card.querySelector(".add-to-cart");
  const cardTitle = card.querySelector(".card-title");
  cardButton.addEventListener("click", function () {
    if (cardTitle) {
      console.log(cardTitle.textContent);
    }
  });
}
