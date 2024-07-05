// Toggle class active Hamburger
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger-menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// ketika search-icon di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// klik di luar element
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e) {
    if (!hm.contains(e.target) &&!navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) &&!searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
})