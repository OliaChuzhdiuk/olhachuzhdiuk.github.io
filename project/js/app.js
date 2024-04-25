var products = document.querySelectorAll(".product");


products.forEach(function (product) {
  product.addEventListener("click", function () {
      var url = product.getAttribute("data-url");

     var img = product.querySelector("img");
    var newImageUrl = ""; 

    img.setAttribute("src", newImageUrl);

    window.location.href = url;
  });
});
