// ===== Mobile Menu =====
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");

    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });

    // ===== Scroll Reveal Animation =====
    const reveals = document.querySelectorAll(".reveal");

    window.addEventListener("scroll", () => {
      reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;
        if (top < trigger) {
          section.classList.add("active");
        }
      });
    });