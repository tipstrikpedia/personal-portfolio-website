const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);
  themeToggle.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
}

function loadTheme() {
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  applyTheme(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
}

themeToggle.addEventListener("click", toggleTheme);
loadTheme();
