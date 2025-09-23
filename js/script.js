// Animação
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll("h1, h2, h3, p, img, li");

    document.body.style.overflow = "hidden";

    elementos.forEach((el, index) => {
        
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";

            const lastElement = elementos[index];
            const scrollHeight = lastElement.offsetTop + lastElement.offsetHeight;
            document.body.style.height = `${scrollHeight}px`;

            if (index === elementos.length - 1) {
                setTimeout(() => {
                    document.body.style.overflow = "auto";
                    document.body.style.height = "auto";
                }, 600);
            }
        }, index * 70 + 50);
    });

    // Menu ativo
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
});
