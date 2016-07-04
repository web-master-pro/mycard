$(document).ready(function(){

    $('.feedbacks__slider').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        items: 1,
        slideBy: 1,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        navSpeed: 2000,
        responsive:{
            0:{
                items: 1
                // nav: false,
                // dots: true
            },
            // 520:{
            //     nav: true,
            //     dots: false
            // },
            1140:{
                items: 2
            }
        }
    })

});
