var main = document.querySelector("main");
var btn = document.querySelector("#btn");

var arr = [
  "The human heart will never stop wanting more.",
  "You can become anything you want.",
  "When you give up, your future ends.",
  "Keep moving forward no matter what.",
  "If you don’t fight, you can’t win.",
  "A true warrior seeks peace, not war.",
  "Strength comes from suffering.",
  "Talent means nothing without effort.",
  "Evolve or be left behind.",
  "Those who walk alone grow stronger.",
  "A weak man stays weak if he chooses to.",
  "Power is earned through struggle.",
  "Fear teaches you your own limits.",
  "Hard work beats talent every time.",
  "Home is where someone waits for you.",
  "Strength is a choice you make daily.",
  "To win, you must want it more than anyone.",
  "Only you can decide who you become.",
  "Believe in yourself before anyone else does.",
  "Pain gives purpose to those who endure.",
];
var colors = [
  "#ffffff",
  "#f5f5f5",
  "#f8e8e8",
  "#ffdada",
  "#ffe6cc",
  "#fff2cc",
  "#e6ffd5",
  "#d9ffe5",
  "#d5f4ff",
  "#dce7ff",
  "#e8e5ff",
  "#f3e5ff",
  "#fce5ff",
  "#e0e0e0",
  "#f2f2f2",
  "#e9f0f5",
  "#e7f7ff",
  "#f4eaff",
  "#eafff4",
  "#ffebf0",
];

btn.addEventListener("click", function () {
  var h1 = document.createElement("h1");

  var quote = Math.floor(Math.random() * arr.length);
  h1.innerHTML = arr[quote];
  var col = Math.floor(Math.random() * colors.length);
  h1.style.color = colors[col];

  var left = Math.random() * 70 + 5;
  var top = Math.random() * 70 + 5;
  var rot = Math.random() * 80 - 40;
  var scale = Math.random() * 0.8 + 0.8;

  h1.style.position = "absolute";
  h1.style.left = `${left}%`;
  h1.style.top = `${top}%`;
  h1.style.rotate = `${rot}deg`;
  h1.style.scale = scale;
  h1.style.opacity = Math.random() * 0.6 + 0.4;

  main.appendChild(h1);
});
