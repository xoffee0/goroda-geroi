let pageSlider = new Swiper('.page',{
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",
    direction: 'vertical',
    slidesPerView: 'auto',
    parallax: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        sensitivity: 1,
    },
    wachOverflow: true,
    speed: 800,
    observer: true,
    observerParents: true,
    observerSlideChildren: true,
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active",
    },
    scrollbar: {
        el: '.page__scroll',
        dragClass: "page__drag-scroll",
        draggable: true,
    },

    init: false,
    
    on: {
        init: function () {
            menuSlider();
        },
        slideChange: function () {
            menuSliderRemove();
            menuLinks[pageSlider.realIndex].classList.add('_active');
        },
    },
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider () {
    if (menuLinks.length > 0) {
        menuLinks[pageSlider.realIndex].classList.add('_active');
        for (let index = 0; index < menuLinks.length; index++) {
            const menuLink = menuLinks[index];
            menuLink.addEventListener("click", function (e) {
                menuSliderRemove();
                pageSlider.slideTo(index, 800);
                menuLink.classList.add('_active');
                e.preventDefault();
            })
        }
    }
}

function menuSliderRemove() {
    let menuLinkActive = document.querySelector('.menu__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

pageSlider.init()

let popupMenu = document.querySelector('.btn');
let osnova = document.querySelector('.osn');
let osnova2 = document.querySelector('.osn2');
let back = document.querySelector('.back');


popupMenu.onclick = function () {
    popupMenu.classList.toggle('active');
    back.classList.toggle('active');
    osnova.classList.toggle('active');
    osnova2.classList.toggle('active');
}

let buttonTime = document.querySelector('.btns__time');
let content2 = document.querySelector('.content2');
let content = document.querySelector('.content');
let content3 = document.querySelector('.content3');
let content4 = document.querySelector('.content4');
let content5 = document.querySelector('.content5');
let content6 = document.querySelector('.content6');
let content7 = document.querySelector('.content7');
let content8 = document.querySelector('.content8');
let content9 = document.querySelector('.content9');
let content10 = document.querySelector('.content10');
let content11 = document.querySelector('.content11');
let content12 = document.querySelector('.content12');
let content13 = document.querySelector('.content13');
let content14 = document.querySelector('.content14');
let content15 = document.querySelector('.content15');
let content16 = document.querySelector('.content16');
let content17 = document.querySelector('.content17');
let content18 = document.querySelector('.content18');
let content19 = document.querySelector('.content19');
let content20 = document.querySelector('.content20');
let content21 = document.querySelector('.content21');
let content22 = document.querySelector('.content22');
let content23 = document.querySelector('.content23');
let content24 = document.querySelector('.content24');
let content25 = document.querySelector('.content25');
let content26 = document.querySelector('.content26');
let image__body =document.querySelector('.image__body');
let image__body2 =document.querySelector('.image__body2');
let image__body3 =document.querySelector('.image__body3');
let image__body4 =document.querySelector('.image__body4');
let image__body5 =document.querySelector('.image__body5');
let image__body6 =document.querySelector('.image__body6');
let image__body7 =document.querySelector('.image__body7');
let image__body8 =document.querySelector('.image__body8');
let image__body9 =document.querySelector('.image__body9');
let image__body10 =document.querySelector('.image__body10');
let image__body11 =document.querySelector('.image__body11');
let image__body12 =document.querySelector('.image__body12');
let image__body13 =document.querySelector('.image__body13');
let image__body14 =document.querySelector('.image__body14');



buttonTime.onclick = function () {
    buttonTime.classList.toggle('active');
    content2.classList.toggle('active');
    content.classList.toggle('active');
    content3.classList.toggle('active');
    content4.classList.toggle('active');
    content5.classList.toggle('active');
    content6.classList.toggle('active');
    content7.classList.toggle('active');
    content8.classList.toggle('active');
    content9.classList.toggle('active');
    content10.classList.toggle('active');
    content11.classList.toggle('active');
    content12.classList.toggle('active');
    content13.classList.toggle('active');
    content14.classList.toggle('active');
    content15.classList.toggle('active');
    content16.classList.toggle('active');
    content17.classList.toggle('active');
    content18.classList.toggle('active');
    content19.classList.toggle('active');
    content20.classList.toggle('active');
    content21.classList.toggle('active');
    content22.classList.toggle('active');
    content23.classList.toggle('active');
    content24.classList.toggle('active');
    content25.classList.toggle('active');
    content26.classList.toggle('active');
    image__body.classList.toggle('active');
    image__body2.classList.toggle('active');
    image__body3.classList.toggle('active');
    image__body4.classList.toggle('active');
    image__body5.classList.toggle('active');
    image__body6.classList.toggle('active');
    image__body7.classList.toggle('active');
    image__body8.classList.toggle('active');
    image__body9.classList.toggle('active');
    image__body10.classList.toggle('active');
    image__body11.classList.toggle('active');
    image__body12.classList.toggle('active');
    image__body13.classList.toggle('active');
    image__body14.classList.toggle('active');
}

let btn1 = document.querySelector('.btn1');
let back1 = document.querySelector('.back1');
let osn1 = document.querySelector('.osn1');
let osnova3 = document.querySelector('.osn3');
btn1.onclick = function () {
    btn1.classList.toggle('active');
    back1.classList.toggle('_active');
    osn1.classList.toggle('_active');
    osnova.classList.toggle('_active');
}
