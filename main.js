$(".intro-next").click(function() {
    $('html, body').animate({
        scrollTop: $(".code-drawing").offset().top
    }, 1000);
});

$(".code-next").click(function() {
    $('html, body').animate({
        scrollTop: $(".code2").offset().top
    }, 1000);
});
