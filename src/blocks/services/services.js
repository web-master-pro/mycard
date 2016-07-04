$(document).ready(function(){

    var owl = $('.s-slider');
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
        navText: ["Назад","Вперед"]
    });

    // owl.on('changed.owl.carousel', function(event) {
    //     var currentItem = event.page.index;
    //     switch (currentItem) {
    //         case 0:
    //             $(".a-slider .owl-prev").html("Цифры");
    //             $(".a-slider .owl-next").html("О нас");
    //             break;
    //         case 1:
    //             $(".a-slider .owl-prev").html("Начало");
    //             $(".a-slider .owl-next").html("Цифры");
    //             break;
    //         case 2:
    //             $(".a-slider .owl-prev").html("О нас");
    //             $(".a-slider .owl-next").html("Цифры");
    //             break;

    //         default:
    //             $(".a-slider .owl-prev").html("Назад");
    //             $(".a-slider .owl-next").html("Вперед");
    //             break;
    //     };
    // })


});
