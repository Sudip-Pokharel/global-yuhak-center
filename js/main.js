var swiper1 = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    noSwiping: true,
    noSwipingClass: '.no__swipper',
    loop: true,
    simulateTouch: false,
    touchRatio: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})

var swiper2 = new Swiper('.benefits__slider-container', {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.benefits-pagination',
        clickable: true,
    },
});

var swiper3 = new Swiper('.testimonial__container', {
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.testimonial__pagination',
        clickable: true,
    },
});


baguetteBox.run('.portfolio__gallery', {
    animation: "fadeIn",
    noScrollbars: true,
    captions: true
});

const menu__trigger = document.getElementById("menu__trigger");
menu__trigger.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('body').classList.toggle('menu__open');
})

const menu__close__trigger = document.getElementById("mobile__menu--close");
menu__close__trigger.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector('body').classList.toggle('menu__open');
})

var allBenefitsLink = document.querySelectorAll('.benefits__link ul li a');
function removeAllActiveClass() {
    allBenefitsLink.forEach(function (link) {
        link.classList.remove('active');
        document.getElementById(link.dataset.show).classList.remove('active');
    })
}

allBenefitsLink.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        removeAllActiveClass();
        link.classList.add('active');
        document.getElementById(link.dataset.show).classList.add('active');
    })
})

var selectOption = document.getElementById('interested_in');
selectOption.addEventListener('change', function (e) {
    if (e.target.value) {
        selectOption.style.color = "#333"
    }
    else {
        selectOption.style.color = "#666"
    }
})
document.getElementById("current__year").innerText = new Date().getFullYear();


// const contact__form = document.getElementById("contact__form");

// contact__form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     var data = {}

//     fetch('url', {
//         method: 'post',
//         body: data
//     }).then(function (response) {

//     }).catch(function (err) {
//         console.log(err)
//     })
// });
