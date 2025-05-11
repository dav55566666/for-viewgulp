const DOMElements = {
    burgerBtn: $('.burger-btn'),
    headerMobile: $('.header__mobile'),
    faqBtn: $('.faq__item'),
    body: $('body'),
    togleLiberyToday: $('.togle-libery-today'),
    liberyToday: $('.libery-today__content'),
}

$(DOMElements.burgerBtn).on('click', function () {
    $(DOMElements.body).toggleClass('body--lock');
    $(this).toggleClass('close');
    $(DOMElements.headerMobile).toggleClass('header__mobile--active');
});

$(DOMElements.togleLiberyToday).on('click', function () {
   const fullHeight = $(DOMElements.liberyToday).get(0).scrollHeight;
   const currentHeight = $(DOMElements.liberyToday).children(0)[0].offsetHeight;
   
   if($(DOMElements.liberyToday).height() < fullHeight) {
    $(DOMElements.liberyToday).css('height', `${fullHeight}px`);
    $(this).addClass('active');
   } else {
    $(DOMElements.liberyToday).css('height', `${currentHeight}px`);
    $(this).removeClass('active');
   }
});

$(DOMElements.faqBtn).on('click', function () {
    $(this).toggleClass('faq__item--active');
    $(this).find('.faq__item-content p').slideToggle();
});

const mainSwiper = new Swiper('.main .swiper', {
    navigation: {
        nextEl: ".main .slidenext",
        prevEl: ".main .slideprev",
    },
    loop: true,
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

const booksSwipers = document.querySelectorAll('.books-swiper .swiper');
booksSwipers?.forEach(swiper => {
    const booksSwiper = new Swiper(swiper, {
        slidesPerView: "auto",
        loop: true, 
    });
});

const swiperGallery = document.querySelectorAll('.swiper-gallery');
swiperGallery?.forEach(swiper => {
    const gallerySwiper = swiper.querySelector('.default-swiper');
    const thumbsSwiper = swiper.querySelector('.swiper-thumbs');
    const thumbs = new Swiper(thumbsSwiper, {
        slidesPerView: 'auto',
        navigation: {
            nextEl: swiper.querySelector('.slidenext'),
            prevEl: swiper.querySelector('.slideprev'),
        },
    });
    const gallery = new Swiper(gallerySwiper, {
        spaceBetween: 24,
        navigation: {
            nextEl: swiper.querySelector('.slidenext'),
            prevEl: swiper.querySelector('.slideprev'),
        },
        thumbs: {
            swiper: thumbs,
        },
    });
});

const partnersSwiper = new Swiper('.partners .swiper', {
    loop: true,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".partners .slidenext",
        prevEl: ".partners .slideprev",
    },
});

const eventGallery = document.querySelector('.event-gallery__swiper');

if(eventGallery) {
    const gallerySwiper = eventGallery.querySelector('.default-swiper');
    const thumbsSwiper = eventGallery.querySelector('.swiper-thumbs');
    const thumbs = new Swiper(thumbsSwiper, {
        spaceBetween: 24,
        slidesPerView: 4,
        direction: "vertical",
        navigation: {
            nextEl: eventGallery.querySelector('.slidenext'),
            prevEl: eventGallery.querySelector('.slideprev'),
        },
        breakpoints: {
            0: {
                direction: "horizontal",
                spaceBetween: 16,
            },
            1024: {
                direction: "vertical",
            },
        },
    });
    const gallery = new Swiper(gallerySwiper, {
        spaceBetween: 24,
        loop: true,
        navigation: {
            nextEl: eventGallery.querySelector('.slidenext'),
            prevEl: eventGallery.querySelector('.slideprev'),
        },
        thumbs: {
            swiper: thumbs,
        },
    });
}


Fancybox.bind("[data-fancybox='about-gallery']", {});
