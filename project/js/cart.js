document.addEventListener("DOMContentLoaded", function () {
  displayCartItems();
  document
    .getElementById("placeOrderBtn")
    .addEventListener("click", function () {
      alert("Your order has been placed!");
      clearCart();
    });
});

function displayCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartList = document.getElementById("cart-items");
  let total = 0;

  cartList.innerHTML = "";

  cartItems.forEach(function (item) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
    `;
    cartList.appendChild(listItem);
    total += parseFloat(item.price);
  });

  const totalElement = document.getElementById("total");
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function clearCart() {
  localStorage.removeItem("cartItems");
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  const totalElement = document.getElementById("total");
  totalElement.textContent = "Total: $0";
}
