let slides = document.querySelectorAll(".slide");
let slide_navs = document.querySelectorAll(".slider_nav");
let index = 0;

const show = () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slide_navs.forEach((nav) => {
        nav.classList.remove('active');
    });

    slides[index].classList.add('active');
    slide_navs[index].classList.add('active');
}

const manualNav = (newValue) => {
    index = newValue;
    show();
}

const sideNav = (value) => {
    index += value;

    if (index > slides.length-1) {
        index = 0;
    }
    else if (index < 0) {
        index = slides.length-1;
    }

    show();
}

const autoNav = () => {
    index ++;

    if (index > slides.length-1) {
        index = 0;
    }
    else if (index < 0) {
        index = slides.length-1;
    }

    show();
}

setInterval(autoNav, 10000);