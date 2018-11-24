$(document).ready(function(){
    $("#menu-types-of-voices").on("click", function() {
        // var righthtml = "";
        $('.right-ctnt').append(
            "<div class='types-of-voices' style='overflow:scroll;'><h1>ADDED</h1></div>"
        );
        console.log("added")
    });

    $("#menu-classic-plays").on("click", function() {
        // var righthtml = "";
        $('.right-ctnt').append(
            "<div class='types-of-voices' style='overflow:scroll;'><h1>ADDED</h1></div>"
        );
        console.log("added")
    });

    $("#menu-costumes").on("click", function() {
        // var righthtml = "";
        $('.right-ctnt').append(
            "<div class='types-of-voices' style='overflow:scroll;'><h1>ADDED</h1></div>"
        );
        console.log("added")
    });

    $("#menu-leading-figure").on("click", function() {
        // var righthtml = "";
        $('.right-ctnt').append(
            "<div class='types-of-voices' style='overflow:scroll;'><h1>ADDED</h1></div>"
        );
        console.log("added")
    });

    $(".right-ctnt").mouseenter(function(){
        console.log("You entered right-ctnt!");
    });

    $(".right-ctnt").mouseleave(function(){
        console.log("Bye! You now leave right-ctnt!");
    });
});