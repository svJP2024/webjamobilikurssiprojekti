const navPull = () => {
    const pullOut = document.getElementById('sideNav');
    const burgerBtn = document.querySelector('.burgerContainer');

    const isOpen = pullOut.style.width === '250px';

    if (!isOpen) {
        pullOut.style.width = '250px';
        burgerBtn.setAttribute('aria-expanded', 'true');
    } else {
        pullOut.style.width = '0px';
        burgerBtn.setAttribute('aria-expanded', 'false');
    }
};