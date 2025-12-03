// Animasi Fade In saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 0.8s ease";
        document.body.style.opacity = 1;
    }, 100);
});

// Menambahkan tombol navigasi otomatis
const navContainer = document.querySelector(".nav-pages");

if (navContainer) {
    const halaman = document.title.includes("Halaman 2") ? 2 : 1;

    if (halaman === 1) {
        navContainer.innerHTML = `
            <a class="btn-nav" href="halaman2.html">→ Ke Halaman 2</a>
        `;
    } else {
        navContainer.innerHTML = `
            <a class="btn-nav" href="index.html">← Kembali ke Halaman 1</a>
        `;
    }
}

// Efek hover pada card
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.02)";
        card.style.transition = "transform 0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
