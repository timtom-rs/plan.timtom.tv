
// Function to toggle between light and dark themes
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

// Load the theme when page loads
// Apply a transition effect after delay to prevent a flashbang if theme is set to dark
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  setTimeout(() => {
    document.querySelector('html').style.setProperty('transition', `background-color 0.2s, color 0.2s`);
  }, 300);
});