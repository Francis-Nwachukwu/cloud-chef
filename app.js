const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');

const toggleMobileNav = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav.classList.contains('hide')) {
        overlay.classList.remove('hide');
        mobileMenu.classList.add('open');
    } else {
        overlay.classList.add('hide');
        mobileMenu.classList.remove('open');
    }
    mobileNav.classList.toggle('hide');
};
overlay.addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobile-nav');
    if (!mobileNav.classList.contains('hide')) {
        toggleMobileNav();
    }
});
mobileMenu.addEventListener('click', toggleMobileNav);