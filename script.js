// Dark/Light mode toggle
(function(){
    const toggleBtn = document.getElementById('theme-toggle');
    const icon = toggleBtn && toggleBtn.querySelector('img');
    const root = document.documentElement;
    const storageKey = 'preferred-theme';

    if(!toggleBtn) return;

    function setIconToLight() {
        if(icon) {
            icon.src = './assets/light-mode.png';
            icon.alt = 'Switch to light mode';
        }
        toggleBtn.setAttribute('aria-label', 'Switch to light mode');
    }

    function setIconToDark() {
        if(icon) {
            icon.src = './assets/night-mode.png';
            icon.alt = 'Switch to dark mode';
        }
        toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }

    function applyTheme(theme){
        if(theme === 'light'){
            root.setAttribute('data-theme', 'light');
            setIconToDark();
        } else {
            root.removeAttribute('data-theme');
            setIconToLight();
        }
    }

    const saved = localStorage.getItem(storageKey);
    if(saved){
        applyTheme(saved);
    } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches){
        applyTheme('light');
    } else {
        applyTheme('dark');
    }

    toggleBtn.addEventListener('click', function(){
        const isLight = root.getAttribute('data-theme') === 'light';
        const next = isLight ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem(storageKey, next);
    });
})();