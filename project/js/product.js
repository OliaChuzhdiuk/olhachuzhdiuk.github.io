function changeProductImage() {
  var selectBox = document.getElementById("color");
  var selectedValue = selectBox.options[selectBox.selectedIndex].value;
  document.getElementById("productImage").src = selectedValue;
}

function changeMainImage(imageUrl) {
  document.getElementById("productImage").src = imageUrl;
}
