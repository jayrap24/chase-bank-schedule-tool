$(document).ready(function(){
    $("#welcomeJPMorgan").delay(500).fadeIn(2000);
    $("#start").delay(2000).fadeIn(4000);

    $("#start").click(function() {
        $('html, body').animate({
            scrollTop: $("form").offset().top
        }, 2000);
    });


});