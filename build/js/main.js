const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!hamburgerBtn || !mobileMenu) {
        return;
    }
    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.textContent = mobileMenu.classList.contains('flex') ? '×' : '☰';
    };
    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
};
document.addEventListener('DOMContentLoaded', initApp);
export {};
