function changeProductImage() {
  var selectBox = document.getElementById("color");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  document.getElementById("productImage").src = selectedValue;
}

function changeMainImage(imageUrl) {
  document.getElementById("productImage").src = imageUrl;
}
document.getElementById("addToCart").addEventListener("click", function () {
  const size = document.getElementById("size").value;
  const productName = document.querySelector(".card-title").textContent; // Отримуємо назву товару
  const priceText = document.querySelector(
    ".card-text:nth-child(2)"
  ).textContent; // Отримуємо текст ціни
  const itemPrice = parseFloat(priceText.replace("Price: $", "")); // Парсимо текст ціни у числове значення
  const item = {
    name: productName,
    size: size,
    price: itemPrice,
  };
  addToCart(item);
  window.location.href = "cart.html";
});

function addToCart(item) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push(item);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  alert("Item added to cart!");
}
