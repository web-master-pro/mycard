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
