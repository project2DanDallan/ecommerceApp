// store nav and cart link ids in variable
const nav = document.getElementById("navLink");
const navMenuLink = document.getElementById("navMenuLink");
const navMenuItems = document.getElementById("navMenu");
const navMenuOverlay = document.getElementById("navMenuOverlay");

const cart = document.getElementById("cartLink");
const cartMenuLink = document.getElementById("cartMenuLink");
const cartMenuItems = document.getElementById("cartMenu");
const cartMenuOverlay = document.getElementById("cartMenuOverlay")

// initialize menu status to off
nav.navStatus = "off";
cart.cartStatus = "off";

// click events for the nav links
ecommerceApp.toggleNav = function() {
    // using switch cases to toggle nav menu
    switch(nav.navStatus) {
        case "off":
            nav.navStatus = "on";
            
            // add a class of flex which will change the display from 'none' to 'flex'
            navMenuItems.classList.add('flex');

            break;
        case "on":
            nav.navStatus = "off";

            // remove a class of flex which will change the display from 'flex' to 'none'
            navMenuItems.classList.remove('flex');
            break;
    }
};

ecommerceApp.toggleCart = function() {
    // using switch cases to toggle cart menu
    switch(cart.cartStatus) {
        case "off":
            cart.cartStatus = "on";

            // add a class of flex which will change the display from 'none' to 'flex'
            cartMenuItems.classList.add('flex');

            break;
        case "on":
            cart.cartStatus = "off";

            // remove a class of flex which will change the display from 'flex' to 'none'
            cartMenuItems.classList.remove('flex');
            
            break;
    }
};

// event listener for shopping cart and nav icon
cart.addEventListener('click', function() {
    ecommerceApp.toggleCart();
});
nav.addEventListener('click', function() {
    ecommerceApp.toggleNav();
});

// event listener for shopping cart icon within the shopping cart and nav menu
cartMenuLink.addEventListener('click', function() {
    ecommerceApp.toggleCart();
});
navMenuLink.addEventListener('click', function() {
    ecommerceApp.toggleNav();
});

// event listener for overlay of cart and nav menu
cartMenuOverlay.addEventListener('click', function() {
    ecommerceApp.toggleCart();
});
navMenuOverlay.addEventListener('click', function() {
    ecommerceApp.toggleNav();
});