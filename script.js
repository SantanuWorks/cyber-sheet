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


// Open/Close Sublists 
// Store the opned sublists, to avoid closing when reloads 
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.list-item');
    const STORAGE_KEY = 'savedSubListIds';

    loadOpenedLists();

    listItems.forEach(item => {
        const listHeader = item.querySelector('.list-header');
        listHeader.addEventListener('click', () => {
            item.classList.toggle('open');
            saveOpenedLists(item.dataset.listId);
        });
    });

    function saveOpenedLists() {
        const openIds = Array.from(document.querySelectorAll('.list-item.open')).map(function(item) {
            return item.dataset.listId;
        });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(openIds));
    }

    function loadOpenedLists() {
        const savedState = localStorage.getItem(STORAGE_KEY);
        if(savedState) {
            const openIds = JSON.parse(savedState);
            listItems.forEach(item => {
                if(openIds.includes(item.dataset.listId)) {
                    item.classList.add('open');
                }
            });
        }
    }
});