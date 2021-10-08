$('.scrolltotop').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
        else $(".lentop").fadeOut();
    });
    $(".lentop").click(function() {
        $("body,html").animate({ scrollTop: 0 }, "slow");
    });
});