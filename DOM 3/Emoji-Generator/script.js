var main = document.querySelector("main");
var btn = document.querySelector("#btn");

var emojis = [
  "👍","😂","❤️","🤣","😍",
  "😀","😁","😊","😄","🙂",
  "🐱","😺","😸","😹","😼",
  "😎","🤔","😢","😡","😱",
  "🔥","⭐","🎉","🥳","⚡",
  "💀","🌸","🍀","🐶","🤩"
];

btn.addEventListener("click", function () {
  var h1 = document.createElement("h1");

  var smile = Math.floor(Math.random() * emojis.length);
  h1.innerHTML = emojis[smile];

  var left = Math.random() * 90 + 5;
  var top = Math.random() * 90 + 5;
  var rot = Math.random() * 90 - 40;
  var scale = Math.random() * 3.5 + 1.5;

  h1.style.position = "absolute";
  h1.style.left = `${left}%`;
  h1.style.top = `${top}%`;
  h1.style.rotate = `${rot}deg`;
  h1.style.scale = scale;
  h1.style.opacity = Math.random() * 0.2 + 0.8;

  main.appendChild(h1);
});
