const burgerButton = document.querySelector(".burger-btn-wrapper");
const headerNav = document.querySelector(".header-nav");
const navLinks = document.querySelector(".nav-link");


///TOGLE NAVBAR MENu NEW WE ClICK BURGEr BURGER BUTON
burgerButton.addEventListener('click',()=>{
    burgerButton.classList.toggle("open-btn");
    headerNav.classList.toggle("open-list");
})