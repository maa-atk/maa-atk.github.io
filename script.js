let slider = document.getElementById("slider");
const faceLabel = document.getElementById("face-label");
const body = document.body;
let darkLightButton = document.getElementById("darkLightButton");

const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  enableDarkMode();
  slider.value = 1;
  darkLightButton.textContent = "🌙";
} else {
  disableDarkMode();
  darkLightButton.textContent = "🌞";
}

if (localStorage.getItem("preferredMode") === "dark") {
  enableDarkMode();
  slider.value = 1;
  darkLightButton.textContent = "🌙";
} else {
  disableDarkMode();
  darkLightButton.textContent = "🌞";
}

darkLightButton.addEventListener("click", () => {
  toggleDarkLightMode();
});

function toggleDarkLightMode() {
  const currentMode = localStorage.getItem("preferredMode") || "light";
  if (currentMode === "dark") {
    disableDarkMode();
    darkLightButton.textContent = "🌞";
  } else {
    darkLightButton.textContent = "🌙";
    enableDarkMode();
  }
}

slider.addEventListener("input", () => {
  if (slider.value === "1") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

function checkColorMode(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--right-card-frost", "#4F2B3D");
    document.documentElement.style.setProperty("--left-card-frost", "#2F4F4F");
    document.documentElement.style.setProperty("--font-color", "#e9cab0");
  }
  if (theme === "light") {
    document.documentElement.style.setProperty(
      "--right-card-frost",
      "rgba(229, 172, 215, 0.56)"
    );
    document.documentElement.style.setProperty(
      "--left-card-frost",
      "rgba(215, 229, 172, 0.54)"
    );
    document.documentElement.style.setProperty("--font-color", "#044d9a");
  }
}

function toggleStarsVisibility(theme) {
  const starsContainer = document.querySelector(".stars");
  starsContainer.style.display = theme === "dark" ? "block" : "none";
}

function toggleCloudsVisibility(theme) {
  const cloudContainer = document.querySelector(".cloud-container");
  cloudContainer.style.display = theme === "light" ? "block" : "none";
}

function enableDarkMode() {
  body.classList.add("dark-theme");
  body.classList.remove("light-theme");
  faceLabel.textContent = "🌙";
  toggleStarsVisibility("dark");
  toggleCloudsVisibility("dark");
  checkColorMode("dark");
  localStorage.setItem("preferredMode", "dark");
}
function disableDarkMode() {
  body.classList.remove("dark-theme");
  body.classList.add("light-theme");
  faceLabel.textContent = "🌞";
  toggleStarsVisibility("light");
  toggleCloudsVisibility("light");
  checkColorMode("light");
  localStorage.setItem("preferredMode", "light");
}

// stars
const darkThemeContainer = document.querySelector(".dark-theme .stars");
darkThemeContainer.style.position = "fixed";
darkThemeContainer.style.top = "0";
darkThemeContainer.style.left = "0";

const numDarkThemeStars = 100;

for (let i = 0; i < numDarkThemeStars; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const starSize = Math.random() * 10 + 5;
  star.style.width = starSize + "px";
  star.style.height = starSize + "px";
  star.style.backgroundColor = randomStarColor();
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  darkThemeContainer.appendChild(star);
}

function randomStarColor() {
  const colors = ["#ffffff", "#ffffcc", "#ffcc99", "#ffcccc"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// clouds
const cloudContainer = document.querySelector(".cloud-container");
cloudContainer.style.position = "fixed";
cloudContainer.style.top = "0";
cloudContainer.style.left = "0";

const starPositions = Array.from(
  darkThemeContainer.querySelectorAll(".star")
).map((star) => {
  return { left: star.style.left, top: star.style.top };
});

starPositions.forEach((position) => {
  const cloud = document.createElement("div");
  cloud.className = "cloud";
  cloud.style.left = position.left;
  cloud.style.top = position.top;
  const randomCloudSize = `${Math.random() * 2 + 0.1}em`;
  cloud.style.setProperty("--cloud-size", randomCloudSize);
  cloudContainer.appendChild(cloud);
});
