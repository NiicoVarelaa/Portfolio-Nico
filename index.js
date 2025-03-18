// Navbar
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");
    const logo = document.querySelector(".logo");

    // Función para cerrar el menú
    function closeMenu() {
        navLinks.classList.remove("active");
    }

    // Agregar evento a cada enlace del menú para cerrar al hacer clic
    links.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // Agregar evento al logo para cerrar el menú al hacer clic
    logo.addEventListener("click", closeMenu);

    // Agregar evento para abrir/cerrar el menú con el ícono
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

// 🔼 Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500)
});

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// 🚀 Sección visible y resalta el enlace correspondiente en el navbar
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

    function activateNavLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", activateNavLink);
});






