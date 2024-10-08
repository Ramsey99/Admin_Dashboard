// Selectors
const body = document.querySelector(".body");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const menu = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");
const mainContainer = document.querySelector(".main--container");

// Dark Mode Toggle
moon.onclick = function() {
    body.classList.add("dark--mode");
    saveThemePreference('dark');
}

sun.onclick = function() {
    body.classList.remove("dark--mode");
    saveThemePreference('light');
}

// Sidebar Toggle
menu.onclick = function() {
    sidebar.classList.toggle("activemenu");
}

// Close sidebar when clicking outside
mainContainer.onclick = function() {
    if (sidebar.classList.contains("activemenu")) {
        sidebar.classList.remove("activemenu");
    }
}

// Save theme preference to local storage
function saveThemePreference(theme) {
    localStorage.setItem('theme', theme);
}

// Load theme preference from local storage
function loadThemePreference() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        body.classList.add("dark--mode");
    } else {
        body.classList.remove("dark--mode");
    }
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', loadThemePreference);

// Tooltips Functionality
const tooltipElements = document.querySelectorAll('[data-tooltip]');

tooltipElements.forEach(el => {
    el.addEventListener('mouseover', function() {
        const tooltipText = this.getAttribute('data-tooltip');
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.innerText = tooltipText;
        document.body.appendChild(tooltip);
        const rect = this.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.bottom + window.scrollY}px`;
    });

    el.addEventListener('mouseout', function() {
        const tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(t => t.remove());
    });
});

// Modal Functionality
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.open-modal');
const closeModalBtn = document.querySelector('.close-modal');

openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

closeModalBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
