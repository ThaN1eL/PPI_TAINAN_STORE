// Toggle class active hamburger menu

const navbarNav = document.querySelector(' .navbar-nav');

// ketika humburger menu di click
document.querySelector('#hamburger-menu').
onclick = (e) => {
navbarNav.classList.toggle('active');
e.preventDefault();
};

//Toggle class active shoping cart
const shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
}


// Click outside to close navbar and shopping cart
document.addEventListener('click', function (e) {
    const hm = document.querySelector('#hamburger-menu');
    const navbarNav = document.querySelector('.navbar-nav');
    const sc = document.querySelector('#shopping-cart-button');
    const shoppingCart = document.querySelector('.shopping-cart');
    
    // Close navbar if clicked outside
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    // Close shopping cart if clicked outside
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }
});


//Modal Box
// Click outside to close modal
window.onclick = (e) => {
    const modal = document.querySelector('#item-detail-modal');
    if (e.target === modal) {
        Alpine.store('modal').close();
    }
};