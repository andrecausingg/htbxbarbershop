$(document).ready(function(){
    var a = 0;
    $("#btnHamburgerJs").click(function(){
        $(this).toggleClass('nav-btn-hamburger-open');
        if(a == 0){
            a = 1;
            $(".overlay").css("display", "block"); 
            $(".btn-hamburger").css("background-color", "rgb(56, 57, 56)");
        }else{
            a = 0;
            $(".overlay").css("display", "none"); 
            $(".btn-hamburger").css("background-color", "rgb(138, 122, 108)");
        }
    });
});


$(window).on("load", function() {
    $("#loader-container").css("display", "none");
});