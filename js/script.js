// Toggle class active hamburger menu

const navbarNav = document.querySelector(' .navbar');

// ketika humburger menu di click
document.querySelector('#hamburger-menu').
onclick = (e) => {
navbarNav.classList.toggle('navbar-active');
e.preventDefault();
};


// klik di luar sidebar untuk menghilangkan nav dan search box

const hm = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('navbar-active');
    }
    
});
