// ELEMENTS
const burgerButton = document.querySelector(".burger-btn-wrapper");
const header = document.querySelector(".header");
const headerNav = document.querySelector(".header-nav");
const navLinks = document.querySelectorAll(".nav-link");

// TOGGLE NAVBAR MENU WHEN WE CLICK BURGER BUTTON
burgerButton.addEventListener("click", () => {
  burgerButton.classList.toggle("open-btn");
  headerNav.classList.toggle("open-list");
});

// SET LIST TO CLOSE WHEN WE CLICK TO EVERY HEADER LINKS
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerButton.classList.remove("open-btn");
    headerNav.classList.remove("open-list");
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // GET CURRENT SECTION
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    // GET HEADER HEIGHT
    const headerHeight = parseInt(window.getComputedStyle(header).height);

    // SCROLL TO SECTION THAT WE CLLICKED IN ITS LINKK
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  });
});
