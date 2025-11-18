let h1 = document.querySelector("h1");
let dec = document.querySelector("#dec");
let res = document.querySelector("#res");
let inc = document.querySelector("#inc");
let a = 0;

dec.addEventListener("click", function () {
  a--;
  h1.innerHTML = a;
  if (a < 0) {
    h1.style.color = "#FA0002";
  } else if (a > 0) {
    h1.style.color = "#008102";
  } else {
    h1.style.color = "#657f97";
  }
});

inc.addEventListener("click", function () {
  a++;
  h1.innerHTML = a;
  if (a > 0) {
    h1.style.color = "#008102";
  } else if (a < 0) {
    h1.style.color = "#FA0002";
  } else {
    h1.style.color = "#657f97";
  }
});

res.addEventListener("click", function () {
  a = 0;
  h1.innerHTML = a;
  h1.style.color = "#657f97";
});
