const darkLightToggle = document.querySelector('#dark-light-toggle');

darkLightToggle.addEventListener('click', function(){
    if(darkLightToggle.classList.toString().includes('fa-moon')) {
        darkLightToggle.classList.remove('fa-moon');
        darkLightToggle.classList.toggle('fa-sun');
    }
    else {
        darkLightToggle.classList.remove('fa-sun');
        darkLightToggle.classList.toggle('fa-moon');
    }
    document.body.classList.toggle('dark-mode');
})