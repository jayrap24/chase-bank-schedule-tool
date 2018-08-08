$(document).ready(function(){
    $("#homePageEmployeeListTitle").mouseover(function(){
        $("#homePageEmployeeList li").slideDown("slow");
    }); 
    $("#homePageManagerListTitle").mouseover(function(){
        $("#homePageManagerList li").slideDown("slow");
    });


    $("#about p").hide(0).delay(500).fadeIn(4000);
    $("#findCoverage").hide(0).delay(500).fadeIn(4000);

    $("#about2 p").hide(0).delay(1500).fadeIn(4000);




    $("#findCoverage").click(function() {
        $('html, body').animate({
            scrollTop: $(".homeContainer").offset().top
        }, 2000);
    });


});

