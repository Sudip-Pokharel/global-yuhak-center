$('.bxslider').bxSlider({
    mode: 'fade',
    controls: false,
    pager: false,
    auto: true,
    infiniteLoop: true,
    stopAuto: false,
});

document.getElementById('menu-trigger').addEventListener('click', handleMobileMenu);
document.getElementById("current__year").innerText = new Date().getFullYear();
document.addEventListener('click', checkMenuClick);

function checkMenuClick(e) {
    if (!e.target.classList.contains('menu-line')) {
        document.querySelector('body').classList.remove('menu-open');
    }
}

function handleMobileMenu(e) {
    e.preventDefault();
    document.querySelector('body').classList.toggle('menu-open');
}


