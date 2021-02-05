document
  .getElementsByClassName("service")
  .addEventListener("click", function () {
    window.scrollTo("service", document.querySelector("service").offsetTop);
  });
