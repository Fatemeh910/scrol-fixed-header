const burgerButton = document.querySelector(".burger-btn-wrapper");
const headerNav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".nav-link");


///TOGLE NAVBAR MENu NEW WE ClICK BURGEr BURGER BUTON
burgerButton.addEventListener('click',()=>{
    burgerButton.classList.toggle("open-btn");
    headerNav.classList.toggle("open-list");
});

///SET LIST TO CLOSE WHEN WE CLICK TO EVERY HEADER LINKS
navLinks.forEach((link) => {
   link.addEventListener('click', () => {
    burgerButton.classList.remove("open-btn");
    headerNav.classList.remove("open-list");
   });
});