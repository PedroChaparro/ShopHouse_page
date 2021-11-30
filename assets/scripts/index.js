//Constantes
const navToggle = document.querySelector("nav .wrap-menu")
const navMenu = document.querySelector(".nav__navigation")
const body = document.getElementsByTagName("body")[0]

//Pendiente comentario
navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav__navigation_visible");

    body.classList.toggle("body__fixed");

    if (navMenu.classList.contains("nav__navigation_visible")){
        navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
        navToggle.setAttribute("aria-label", "Abrir menú");
    }
});

//Elementos a los que se le va a aplicar el ScrollReveal
ScrollReveal().reveal('.footer'); 
ScrollReveal().reveal('.product-card');

