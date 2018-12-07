$(document).ready(function(){
    var context;
    window.addEventListener('load', init, false);
    function init() {
        try {
            // Fix up for prefixing
            window.AudioContext = window.AudioContext||window.webkitAudioContext;
            context = new AudioContext();
        }
        catch(e) {
            alert('Web Audio API is not supported in this browser');
        }
    }

    var dogBarkingBuffer = null;
    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext();

    function loadDogSound(url) {
        var request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.responseType = 'arraybuffer';

        // Decode asynchronously
        request.onload = function() {
            context.decodeAudioData(request.response, function(buffer) {
                dogBarkingBuffer = buffer;
            }, onError);
        }
        request.send();
    }

    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    var context = new AudioContext();

    function playSound(buffer) {
        var source = context.createBufferSource(); // creates a sound source
        source.buffer = buffer;                    // tell the source which sound to play
        source.connect(context.destination);       // connect the source to the context's destination (the speakers)
        source.start(0);                           // play the source now
                                                   // note: on older systems, may have to use deprecated noteOn(time);
    }

    window.onload = init;
    var context;
    var bufferLoader;

    function init() {
        // Fix up prefixing
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        context = new AudioContext();

        bufferLoader = new BufferLoader(
            context,
            [
                '../music/operaclip_huaqiang (online-audio-converter.com).mp3',
                '../music/operaclip_xianqiang (online-audio-converter.com).mp3',
            ],
            finishedLoading
        );

        bufferLoader.load();
    }

    function finishedLoading(bufferList) {
        // Create two sources and play them both together.
        var source1 = context.createBufferSource();
        var source2 = context.createBufferSource();
        source1.buffer = bufferList[0];
        source2.buffer = bufferList[1];

        source1.connect(context.destination);
        source2.connect(context.destination);
        source1.start(0);
        source2.start(0);
    }

    // $('#menutest').addClass('animated fadeInUp');
    // $("#menu-types-of-voices").on("click", function() {
    //     // var righthtml = "";
    //     $('.right-ctnt').append(
    //         "<div class='types-of-voices' style='overflow:scroll;'><h1>ADDED</h1></div>"
    //     );
    //     console.log("added")
    // });
    //
    // $("#menu-classic-plays").on("click", function() {
    //     // var righthtml = "";
    //     $('.right-ctnt').append(
    //         "<div class='types-of-voices' style='overflow:scroll;'><h1>ADDED</h1></div>"
    //     );
    //     console.log("added")
    // });
    //
    // $("#menu-costumes").on("click", function() {
    //     // var righthtml = "";
    //     $('.right-ctnt').append(
    //         "<div class='types-of-voices' style='overflow:scroll;'><h1>ADDED</h1></div>"
    //     );
    //     console.log("added")
    // });
    //
    // $("#menu-leading-figure").on("click", function() {
    //     // var righthtml = "";
    //     $('.right-ctnt').append(
    //         "<div class='types-of-voices' style='overflow:scroll;'><h1>ADDED</h1></div>"
    //     );
    //     console.log("added")
    // });
    //
    // $(".right-ctnt").mouseenter(function(){
    //     console.log("You entered right-ctnt!");
    // });
    //
    // $(".right-ctnt").mouseleave(function(){
    //     console.log("Bye! You now leave right-ctnt!");
    // });

});

function costumePopup() {
    var popup = document.getElementById("costume1");
    popup.classList.toggle("show");
}