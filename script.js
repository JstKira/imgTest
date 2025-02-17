document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const imageContainer = document.querySelector(".image-container");
    const images = document.querySelectorAll(".image-container img");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let index = 0;

    // ⬅️ الزر السابق
    prevBtn.addEventListener("click", () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateCarousel();
    });

    // ➡️ الزر التالي
    nextBtn.addEventListener("click", () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarousel();
    });

    // 📌 تحديث عرض الكاروسيل
    function updateCarousel() {
        imageContainer.style.transform = `translateX(-${index * 320}px)`;
    }

    // 🎞️ تشغيل تلقائي كل 4 ثوانٍ
    setInterval(() => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateCarousel();
    }, 4000);
});
