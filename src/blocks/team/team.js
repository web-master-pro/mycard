$(document).ready(function(){

    var owl = $('.t-slider');
    owl.owlCarousel({
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
        autoHeight: true,
        navText: ["Назад","Далее"],
        pullDrag: false,
        touchDrag: false
    });

});
