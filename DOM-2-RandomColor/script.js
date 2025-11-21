var box = document.querySelector("#box");
var btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  console.log(r, g, b);

  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});
