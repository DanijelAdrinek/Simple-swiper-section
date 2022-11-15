const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 8,
    speed: 400,
    centeredSlides: true,
    centeredSlidesBounds: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});
