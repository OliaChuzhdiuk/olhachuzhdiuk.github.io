function toggleText(postId) {
  var additionalText = document
    .getElementById(postId)
    .querySelector(".additional-text");
  if (additionalText.style.display === "none") {
    additionalText.style.display = "block";
  } else {
    additionalText.style.display = "none";
  }
}
