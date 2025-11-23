const main = document.querySelector("#main");
const box = document.querySelector("#box");
const btn = document.querySelector("#btn");
const tn = document.querySelector("#teamName");
const img = document.querySelector("img");
const cap = document.querySelector("#captain");
const trp = document.querySelector("#trophies");
const h1 = document.querySelector("h1");

const teams = [
  {
    team: "CSK",
    fullName: "Chennai Super Kings",
    trophies: 5,
    captain: "Ruturaj Gaikwad",
    primaryColor: "#FBE101",
    secondaryColor: "#f68f10ff",
    textColor: "#1D418C",
    src: "images/CSK.png",
  },
  {
    team: "MI",
    fullName: "Mumbai Indians",
    trophies: 5,
    captain: "Hardik Pandya",
    primaryColor: "#27497E",
    secondaryColor: "#FBF670",
    textColor: "#0E1B2C",
    h1Color: "#131450ff",
    btnText: "#0E1B2C",
    btnBg: "#627aa1ff",
    src: "images/MI.jpg",
  },
  {
    team: "RCB",
    fullName: "Royal Challengers Bengaluru",
    trophies: 1,
    captain: "Rajat Patidar",
    primaryColor: "#650806",
    secondaryColor: "#E8B77F",
    textColor: "#FFD700",
    btnText: "#3f3324ff",
    src: "images/RCB.png",
  },
  {
    team: "KKR",
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    captain: "Ajinkya Rahane",
    primaryColor: "#1A0142",
    secondaryColor: "#F5E588",
    textColor: "#FEFDFD",
    btnBg: "#F3EEAB",
    btnText: "#17052B",
    src: "images/KKR.jpg",
  },
  {
    team: "SRH",
    fullName: "Sunrisers Hyderabad",
    trophies: 1,
    captain: "Pat Cummins",
    primaryColor: "#F74301",
    secondaryColor: "#41180F",
    textColor: "#FFE8E3",
    btnBg: "#e89678ff",
    src: "images/SRH.jpg",
  },
  {
    team: "RR",
    fullName: "Rajasthan Royals",
    trophies: 1,
    captain: "Riyan Parag",
    primaryColor: "#FF69B4",
    secondaryColor: "#EB1986",
    textColor: "#740e42ff",
    btnBg: "#ffc0dfff",
    src: "images/RR.jpg",
  },
  {
    team: "DC",
    fullName: "Delhi Capitals",
    trophies: 0,
    captain: "Axar Patel",
    primaryColor: "#025EB1",
    secondaryColor: "#181741ff",
    textColor: "#FFFFFF",
    src: "images/DC.jpg",
  },
  {
    team: "LSG",
    fullName: "Lucknow Super Giants",
    trophies: 0,
    captain: "Rishabh Pant",
    primaryColor: "#e2e2e2ff",
    secondaryColor: "#4f4e4eff",
    textColor: "#0057E7",
    h1Color: "#2470ebff",
    btnBg: "#3b5175ff",
    btnText: "#F6F6F8",
    src: "images/LSG.jpg",
  },
  {
    team: "PBKS",
    fullName: "Punjab Kings",
    trophies: 0,
    captain: "Shreyas Iyer",
    primaryColor: "#e31c1ffa",
    secondaryColor: "#D2BC9A",
    textColor: "#e8c795ff",
    h1Color: "#f9f2e8ff",
    btnBg: "#463e33ff",
    btnText: "#f7eed3ff",
    src: "images/PBKS.png",
  },
  {
    team: "GT",
    fullName: "Gujarat Titans",
    trophies: 1,
    captain: "Shubman Gill",
    primaryColor: "#043F74",
    secondaryColor: "#D5BE5E",
    textColor: "#1a2566ff",
    h1Color: "#fefefeff",
    src: "images/GT.jpg",
  },
];

btn.addEventListener("click", () => {
  const t = teams[Math.floor(Math.random() * teams.length)];

  main.style.background = t.primaryColor;
  box.style.background = t.primaryColor;

  tn.textContent = `${t.fullName} (${t.team})`;
  cap.textContent = `Captain: ${t.captain}`;
  trp.textContent = `Trophies: ${t.trophies}`;

  tn.style.color = cap.style.color = trp.style.color = t.secondaryColor;

  img.src = t.src;
  img.alt = t.fullName;

  h1.style.color = t.h1Color || t.textColor;
  h1.innerHTML = `Your 2026 IPL winner is [${t.team}]`;

  btn.style.backgroundColor = t.btnBg || t.textColor;
  btn.style.color = t.btnText || t.secondaryColor;
  btn.textContent = "Guess Again";

  if (t.team === "RR") {
    tn.style.color = cap.style.color = trp.style.color = t.textColor;
  }
});
