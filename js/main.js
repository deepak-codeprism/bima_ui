function navigateTo(route) {
    window.location.hash = route;
    render();
}

function render() {
    const appContainer = document.getElementById("app");
    const route = window.location.hash.substring(2) || 'home';
    appContainer.innerHTML = '';
    switch (route) {
        case 'home':
            import('./components/home.js')
                .then(module => {
                    appContainer.innerHTML = module.default;
                });
            break;
        case 'contact':
            import('./components/contact.js')
                .then(module => {
                    appContainer.innerHTML = module.default;
                });
            break;
        case 'about':
            import('./components/about.js')
                .then(module => {
                    appContainer.innerHTML = module.default;
                });
            break;
        case 'home/nestedRoute':
            import('./components/nesttedComponent.js')
            .then(module =>{
                appContainer.innerHTML = module.default;
            })
        default:
            appContainer.innerHTML = '<h2>Page Not Found</h2>';
    }
};

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", render);
