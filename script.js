const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 8,
    speed: 500,
    initialSlide: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});