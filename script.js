// when click on logo reload the page
document.querySelector('#logo-img').addEventListener('click', function() {
    location.href = '/';
});

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
const themeToggle = document.querySelector('#dark-light-toggle');
const body = document.body;

// Apply the saved theme
function applyTheme(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.classList.replace('fa-moon', 'fa-sun');
    } 
    else {
        body.classList.remove('dark-mode');
        themeToggle.classList.replace('fa-sun', 'fa-moon');
    }
}

// Initialize
applyTheme(currentTheme);

// Toggle theme when button is clicked
themeToggle.addEventListener('click', function() {
    const isDark = body.classList.contains('dark-mode');
    if (isDark) {
        localStorage.setItem('theme', 'light');
        applyTheme('light');
    } 
    else {
        localStorage.setItem('theme', 'dark');
        applyTheme('dark');
    }
});