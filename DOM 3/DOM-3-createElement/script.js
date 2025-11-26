var main = document.querySelector("main");
var btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  var div = document.createElement("div");

  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  let left = Math.random() * 100;
  let top = Math.random() * 100;
  let rot = Math.random() * 361;

  div.style.height = "100px";
  div.style.width = "100px";
  div.style.position = "absolute";

  div.style.left = `${left}%`;
  div.style.top = `${top}%`;
  div.style.backgroundColor = `rgb(${r},${g},${b})`;
  div.style.rotate = `${rot}deg`;

  main.appendChild(div);
});
