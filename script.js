function onNavClick(e) {
    // e.stopPropagation();
    console.log(e);
}

var navLinks = document.querySelectorAll('.nav-item');
console.log(navLinks)

window.onhashchange = function () {
    // console.log('onChange')
    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href.match(/(#.*)/)[1] == window.location.hash) {
            navLinks[i].classList.add('active');
            // navLinks[i].className = 'active';
        } else {
            navLinks[i].classList.remove('active');
            // navLinks[i].className = '';
        }
    }
};
