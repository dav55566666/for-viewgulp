const DOMElements = {
    burgerBtn: $('.burger-btn'),
    headerMobile: $('.header__mobile'),
    faqBtn: $('.faq__item'),
}

$(DOMElements.burgerBtn).on('click', function () {
    $(DOMElements.headerMobile).slideToggle(500);
    $(document.body).toggleClass('lock');
    $(this).toggleClass('close');
});

$(DOMElements.faqBtn).on('click', function () {
    $(this).toggleClass('faq__item--active');
    $(this).find('.faq__item-content p').slideToggle();
});

const mainSwiper = new Swiper('.main .swiper', {
    effect: "fade",
    pagination: {
        el: ".main .swiper-pagination",
        clickable: true,
    },
});

const docsSwiper = new Swiper('.docs .swiper', {
    slidesPerView: "auto",
    pagination: {
        el: ".docs .swiper-pagination",
        clickable: true,
    }
});

const docsSwiperSwiper = new Swiper('.docs-swiper .swiper', {
    slidesPerView: "auto",
    pagination: {
        el: ".docs-swiper .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".docs-swiper .slidenext",
        prevEl: ".docs-swiper .slideprev",
    },
});

const videosSwiper = new Swiper('.videos .swiper', {
    slidesPerView: "auto",
});