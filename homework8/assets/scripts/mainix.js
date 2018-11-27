$(document).ready(function() {
    //classic plays scroll effect

    // var ti = 0;
    // var ScrollInstance = ScrollReveal();
    // var currentPlay = 0;
    // var timer = 0;
    //
    // function scrollElement(){
    //     ScrollInstance.reveal("#sub1-content2", {
    //         delay: 200,
    //         duration: 300,
    //         origin:"top",
    //         distance:"500px",
    //         opacity:1,
    //     });
    // }
    // function transformPlayList(currentPlay) {
    //     $(".sub-content").css("transform", `translateY(-${currentPlay * 100}vh)`);
    //     $("#nav-sub1").css("top", `${40 - currentPlay * 28}px`);
    //     $("#nav-sub1")
    //         .find("li")
    //         .removeClass("active")
    //         .eq(currentPlay)
    //         .addClass("active");
    // }
    // $("#sub1-content1").on("wheel", function(e) {
    //     e.stopPropagation();
    //     var deltaY = e.originalEvent.deltaY;
    //     clearTimeout(timer);
    //     timer = setTimeout(function() {
    //         if (deltaY > 0) {
    //             if (currentPlay < 2) {currentPlay += 1;}
    //         }
    //         else {
    //             if (currentPlay < 0) {currentPlay -= 1;}
    //
    //         }
    //     });
    // });
    //



    //costume flip pop up window
    $("#costume-detail").on("click", function() {
        $("#popup-window")
            .css("display", "block")
            .find(".popup-content")
            .addClass("animated flipInY");
    });
    $("#popup-window").on("click", function() {
        $(this)
            .css("display", "none")
            .find(".popup-content")
            .removeClass("animated flipInY");
    });

    function transformPlayList(currentPlay) {
        $("#play-list").css("transform", `translateY(-${currentPlay * 100}vh)`);
        $("#plays-menu").css("top", `${40 - currentPlay * 28}px`);
        $("#plays-menu")
            .find("li")
            .removeClass("active")
            .eq(currentPlay)
            .addClass("active");
    };
});
