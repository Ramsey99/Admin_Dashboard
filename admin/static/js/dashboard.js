let body = document.querySelector(".body");
let sun = document.querySelector(".sun");
let moon = document.querySelector(".moon");

// Toggle dark mode
function toggleDarkMode() {
    body.classList.toggle("dark--mode");
}

moon.onclick = toggleDarkMode;
sun.onclick = toggleDarkMode;

// Sidebar functionality
let menu = document.querySelector(".menu");
let sidebar = document.querySelector(".sidebar");
let mainContainer = document.querySelector(".main");

menu.onclick = function() {
    sidebar.classList.toggle("activemenu");
};

mainContainer.onclick = function() {
    sidebar.classList.remove("activemenu");
};
