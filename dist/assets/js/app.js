$(document).ready(function() {

    $(".js-scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1700);
        return false;
    });

    $(".volume").on("click", function(){
        $(this).toggleClass("on");
        if ($(this).hasClass("on")) {
            $(".header__video").prop("muted",false);
        } else {
            $(".header__video").prop("muted",true);
        };
    });

    $('.js-phone-field').mask('+7 (999) 999-99-99');

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $('html').addClass('safari');
    };

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("html").addClass("macos");
    } else {
        $("html").addClass("pc");
    };

    if (navigator.userAgent.search("MSIE") >= 0) {
        $('html').addClass('ie');
    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    // var wow = new WOW({
    //     boxClass:     'wow',      // animated element css class (default is wow)
    //     animateClass: 'animated', // animation css class (default is animated)
    //     offset:       0,          // distance to the element when triggering the animation (default is 0)
    //     mobile:       false,       // trigger animations on mobile devices (default is true)
    //     live:         true,       // act on asynchronously loaded content (default is true)
    // });
    // wow.init();

});

$(document).ready(function(){

    var owl = $('.a-slider');
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
        navText: ["Цифры","О нас"],
        pullDrag: false,
        touchDrag: false
    });

    owl.on('changed.owl.carousel', function(event) {
        var currentItem = event.page.index;
        switch (currentItem) {
            case 0:
                $(".a-slider .owl-prev").html("Цифры");
                $(".a-slider .owl-next").html("О нас");
                break;
            case 1:
                $(".a-slider .owl-prev").html("Начало");
                $(".a-slider .owl-next").html("Цифры");
                break;
            case 2:
                $(".a-slider .owl-prev").html("О нас");
                $(".a-slider .owl-next").html("Цифры");
                break;

            default:
                $(".a-slider .owl-prev").html("Назад");
                $(".a-slider .owl-next").html("Вперед");
                break;
        };
    })


});

$('.browsehappy').click(function() {
    $(this).slideUp();
});

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

$(document).ready(function(){

    var validatorFormContact = $("#form-contact").validate({
        rules: {
            name: {required: true},
            phone: {required: true},
            email: {email: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"},
            email: {email: "Неправильный формат email"},
            // message: {required: "Это поле должно быть заполнено"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: true
                });
            });
            return false;
        }
    });

    $("#form-contact input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-contact textarea" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-contact button").click(function (e) {
        $("#form-contact .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormContact.resetForm();
        return true;
    });

});

$(document).ready(function(){

    var validatorFormMain = $("#form-main").validate({
        rules: {
            name: {required: true},
            phone: {required: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"}
            // message: {required: "Это поле должно быть заполнено"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: false
                });
            });
            return false;
        }
    });

    $("#form-main input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-main textarea" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-main button").click(function (e) {
        $("#form-main .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormMain.resetForm();
        return true;
    });

});

// $(window).scroll(function() {

//     var topPresentation = $(".presentation").offset().top,
//         winPosition = $(this).scrollTop()
//         holeTop = 0;



//         if ( (winPosition > topPresentation - 300) && (winPosition < topPresentation + 300) ) {
//             holeTop = (winPosition - topPresentation + 143);
//             $(".hole--4 .hole__img").css({"top": holeTop});
//         } else {
//             $(".hole--4 .hole__img").css({"top": ""});
//         };

//         if ( (winPosition > topPresentation - 100) && (winPosition < topPresentation + 500) ) {
//             holeTop = (winPosition - topPresentation + 143);
//             $(".hole--5 .hole__img").css({"top": holeTop});
//         } else {
//             $(".hole--5 .hole__img").css({"top": ""});
//         };

// });

$(document).ready(function(){

    $(".nav__link").click(function(e){
        e.preventDefault();
        if ( ($(window).width() < 992) && $(".nav-button").hasClass("on") ) {
            $(".nav-button").removeClass("on");
            $(".nav__menu").slideUp(300);
        };
        var linkHref = $(this).attr("href");
        var destination = $(linkHref).offset().top;
        if (linkHref !== "#about") {
            destination = destination - 57;
        };
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1500);
    });

});


$(window).scroll(function() {

    var navOffset = $(".about").offset().top - 57;
        winPosition = $(this).scrollTop();

    if (winPosition >= navOffset) {
        $(".nav").addClass("nav--fixed");
        $(".about").css({"padding-top": 57})
    };

    if (winPosition < navOffset) {
        $(".nav").removeClass("nav--fixed");
        $(".about").css({"padding-top": ""});
    };

    var highlightOffset = 150,
        posAbout = $("#about").offset().top - highlightOffset,
        posPortfolio = $("#portfolio").offset().top - highlightOffset,
        posTeam = $("#team").offset().top - highlightOffset,
        posServices = $("#services").offset().top - highlightOffset,
        posClients = $("#clients").offset().top - highlightOffset,
        posFeedbacks = $("#feedbacks").offset().top - highlightOffset,
        posContacts = $("#contacts").offset().top - highlightOffset;

    $(".nav__link").removeClass("active");
    if (winPosition > posContacts) {
        $(".nav__item--contacts .nav__link").addClass("active");
    } else if (winPosition > posFeedbacks) {
        $(".nav__item--feedbacks .nav__link").addClass("active");
    } else if (winPosition > posClients) {
        $(".nav__item--clients .nav__link").addClass("active");
    } else if (winPosition > posServices) {
        $(".nav__item--services .nav__link").addClass("active");
    } else if (winPosition > posTeam) {
        $(".nav__item--team .nav__link").addClass("active");
    } else if (winPosition > posPortfolio) {
        $(".nav__item--portfolio .nav__link").addClass("active");
    } else if (winPosition > posAbout) {
        $(".nav__item--about .nav__link").addClass("active");
    };

});

$(document).ready(function(){
    $(".nav-button").click(function(){
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(".nav__menu").slideUp(300);
        } else {
            $(this).addClass("on");
            $(".nav__menu").slideDown(300);
        }
    });


});

$(document).ready(function(){

    $('.js-popup').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 500,
        mainClass: 'mfp-zoom-in',
        overflowY: 'scroll',
        fixedContentPos: true
    });

    $(".js-close-button").click(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        return false;
    });

    var validatorFormPopup = $("#form-popup").validate({
        rules: {
            name: {required: true},
            phone: {required: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"}
            // message: {required: "Это поле должно быть заполнено"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: true
                });
            });
            return false;
        }
    });

    $("#form-popup input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-popup textarea" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-popup button").click(function (e) {
        $("#form-popup .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormPopup.resetForm();
        return true;
    });

});

$(document).ready(function(){

    $(".portfolio__videos").mixItUp({
    selectors: {
        target: ".portfolio__video",
        filter: ".portfolio__menu-item"
    }
});

});

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
        navText: ["Назад","Вперед"],
        pullDrag: false,
        touchDrag: false
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

$(document).ready(function(){
    $(".steps__btn--1").click(function(){
        $(".steps__btn").removeClass("active");
        $(this).addClass("active");
        $(".steps__block").removeClass("active");
        $(".steps__block--1").addClass("active");
    });
    $(".steps__btn--2").click(function(){
        $(".steps__btn").removeClass("active");
        $(this).addClass("active");
        $(".steps__block").removeClass("active");
        $(".steps__block--2").addClass("active");
    });
    $(".steps__btn--3").click(function(){
        $(".steps__btn").removeClass("active");
        $(this).addClass("active");
        $(".steps__block").removeClass("active");
        $(".steps__block--3").addClass("active");
    });
});

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

$(document).ready(function(){

    $(".textarea__textarea")
        .focus(function() {
            $(this).prev(".textarea__placeholder").fadeOut(300);
            console.log("focus");
        })
        .blur(function() {
            if ($(this).val().length == 0) {
                $(this).prev(".textarea__placeholder").fadeIn(300);
                console.log("blur");
            }
        });

    $(".textarea__placeholder").click(function(){
        $(this).fadeOut(300);
        $(this).next(".textarea__textarea").focus();
        console.log("click");
    })

});
