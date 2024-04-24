// Отримуємо всі елементи з класом "product"
var products = document.querySelectorAll(".product");

// Додаємо обробник події для кожного елемента з класом "product"
products.forEach(function (product) {
  product.addEventListener("click", function () {
    // Отримуємо значення атрибуту "data-url" для кожного продукту
    var url = product.getAttribute("data-url");

    // Отримуємо зображення продукту, яке потрібно змінити
    var img = product.querySelector("img");

    // Отримуємо шлях до нового зображення, яке потрібно встановити
    var newImageUrl = ""; // Заповніть новий шлях до зображення з вашого джерела даних

    // Встановлюємо новий шлях до зображення
    img.setAttribute("src", newImageUrl);

    // Перенаправляємо на сторінку, вказану в атрибуті "data-url"
    window.location.href = url;
  });
});
