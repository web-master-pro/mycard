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
