
document.addEventListener("DOMContentLoaded", function(event) {
    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination",
        },
        autoplay: {
            delay: 5000,
        },
    });


    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        loop:true,
        typeSpeed: 90,
        backSpeed: 50,
        backDelay: 250,
        // startDelay: 1000,
    });

    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 3,
        spaceBetween: 64,
        loop:true,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            425: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            // when window width is >= 640px
            992: {
                slidesPerView: "auto",
                // slidesPerView: 6,
                // spaceBetween: 40
            }
        }
    });

    if( window.innerWidth >= 992 ){
        let scrollpos = window.scrollY

        const header = document.querySelector(".header")
        const scrollChange = 1

        const add_class_on_scroll = () => header.classList.add("fixed-top")
        const remove_class_on_scroll = () => header.classList.remove("fixed-top")

        window.addEventListener('scroll', function() {
            scrollpos = window.scrollY;

            if (scrollpos >= scrollChange) { add_class_on_scroll() }
            else { remove_class_on_scroll() }

        })
    }

});
