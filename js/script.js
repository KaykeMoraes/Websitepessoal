// =======================
// script.js - Site Kayke
// =======================

document.addEventListener("DOMContentLoaded", () => {

  // ======= FADE-IN h1 e h2 =======
  const titulos = document.querySelectorAll("h1, h2");
  titulos.forEach(titulo => {
    titulo.style.opacity = 0;
    titulo.style.transition = "opacity 1.2s";
    setTimeout(() => { titulo.style.opacity = 1; }, 100);
  });

  // ======= MENU ATIVO =======
  const links = document.querySelectorAll("nav ul li a");
  const currentPage = window.location.pathname.split("/").pop();
  links.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ======= ANIMAÇÕES AO SCROLL =======
  const animatedElements = document.querySelectorAll(
    "h1, h2, h3, p, img, .projeto-card, .novidade-card, .contact-list li, .contact-list a, .skills"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => {
    observer.observe(el);
    // Caso o elemento já esteja visível
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("animate");
    }
  });

  // ======= CLIQUE NOS CARDS DE PROJETOS =======
  const cards = document.querySelectorAll(".projeto-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const link = card.getAttribute("data-link");
      if (link) window.location.href = link;
    });
  });

  // ======= SCROLL SUAVE PARA LINKS INTERNOS =======
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

});
