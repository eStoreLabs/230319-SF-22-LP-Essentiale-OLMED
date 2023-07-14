// hide menu upon clicking nav link

let navLinks = document.querySelectorAll(".nav-item");
let menuCtn = document.getElementById("navbarSupportedContent");

function toggleNavBar() {
    new esstrap.Collapse(menuCtn).toggle();
}

navLinks.forEach((link) => {
    link.addEventListener('click', toggleNavBar);
});