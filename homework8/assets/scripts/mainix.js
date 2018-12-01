$(document).ready(function() {

    $('.opt').on('click', function(event) {
        var t = event.target;
        var id = t.id;
        var children = t.dataset.children;
        $('.active-content').removeClass('active-content').addClass('deactive-content');
        if (children) {
            $('#' + id).siblings('.active-opt').removeClass('active-opt').addClass('deactive-opt');
            $('#' + id).removeClass('deactive-opt').addClass('active-opt');
            $('#' + children).removeClass('deactive-sub').addClass('active-sub');
            $('#' + children).children(':first-child').removeClass('deactive-sub-opt').addClass('active-sub-opt');
            $('#' + $('#' + children).children(':first-child')[0].dataset.content).removeClass('deactive-content').addClass('active-content');
        } else {
            $('.nav-sub').removeClass('active-sub').addClass('deactive-sub');
            //$('.nav-sub').children('active-sub-opt').removeClass('active-sub-opt').addClass('deactive-sub-opt');
            $('#' + id).siblings('.active-opt').removeClass('active-opt').addClass('deactive-opt');
            $('#' + id).removeClass('deactive-opt').addClass('active-opt');
        }
        var content = t.dataset.content;
        $('#' + content).removeClass('deactive-content').addClass('active-content');
    });

    $('.sub-opt').on('click', function(event) {
        var id = event.target.id;
        var content = event.target.dataset.content;
        var upperMarginTop = 7;
        var idx = $('.nav-bar .nav-sub').children().index(this)
        var currentMarginTop = upperMarginTop - 2 * idx;
        $('.nav-bar .nav-sub').css('margin-top', currentMarginTop + 'rem');
        $('#' + content).siblings('.active-content').fadeOut(1000).removeClass('active-content').addClass('deactive-content');
        $('#' + content).fadeIn(1000).removeClass('deactive-content').addClass('active-content');
        $('#' + id).siblings('.active-sub-opt').removeClass('active-sub-opt').addClass('deactive-sub-opt');
        $('#' + id).removeClass('deactive-sub-opt').addClass('active-sub-opt');
    });

    //var currentActiveElem = null;
    //var currentSubOptID = null;
    $('#content2').on('wheel', function(event) {
        event.preventDefault(); 

        var currentActiveElem = $(this).children('.active-content');
        var currentSubOpt = $('#' + currentActiveElem[0].dataset.opt);
        if (event.originalEvent.deltaY >= 0) {
            var nextElem = currentActiveElem.next().length === 0 ? $(this).children(':first-child') : currentActiveElem.next();
            var nextSubOpt = currentSubOpt.next().length === 0 ? $('#nav-sub1').children(':first-child') : currentSubOpt.next();
        } else {
            var nextElem = currentActiveElem.prev().length === 0 ? $(this).children(':last-child') : currentActiveElem.prev();
            var nextSubOpt = currentSubOpt.prev().length === 0 ? $('#nav-sub1').children(':last-child') : currentSubOpt.prev();
        }

        var upperMarginTop = 7;
        var idx = $(this).children().index(nextElem);
        console.log(idx)
        var currentMarginTop = upperMarginTop - 2 * idx;
        $('.nav-bar .nav-sub').css('margin-top', currentMarginTop + 'rem');

        currentActiveElem.fadeOut(1000).removeClass('active-content').addClass('deactive-content');
        currentSubOpt.removeClass('active-sub-opt').addClass('deactive-sub-opt');
        nextElem.fadeIn(1000).removeClass('deactive-content').addClass('active-content');
        nextSubOpt.removeClass('deactive-sub-opt').addClass('active-sub-opt');
    });

    $('.back-spot, .next-spot').on('click', function(event) {
        var t = event.target;
        var sourceAnchor = t.parentElement.id;
        var targetAnchor = t.dataset.anchor;
        var sourceOpt =  $('#' + sourceAnchor)[0].dataset.opt;
        var targetOpt =  $('#' + targetAnchor)[0].dataset.opt;
        $('#' + sourceAnchor).fadeOut(1000).removeClass('active-content').addClass('deactive-content');
        $('#' + targetAnchor).fadeIn(1000).removeClass('deactive-content').addClass('active-content');
        $('#' + sourceOpt).removeClass('active-sub-opt').addClass('deactive-sub-opt');
        $('#' + targetOpt).removeClass('deactive-sub-opt').addClass('active-sub-opt');
    });

    /*$('').on('click', function(event) {
        var t = event.target;
        var sourceAnchor = t.parentElement.id;
        var targetAnchor = t.dataset.anchor;
        $('#' + sourceAnchor).fadeOut(1000).removeClass('active-content').addClass('deactive-content');
        $('#' + targetAnchor).fadeIn(1000).removeClass('deactive-content').addClass('active-content');
    });*/


    // music play
    var music = musicController();

    $("#audio1").on("click",function(){
        music.play("audio1");

        //show intro
        $("#zhuqiang-intro").css("visibility", "visible");
        $("#huaqiang-intro").css("visibility", "hidden");
        $("#xianqiang-intro").css("visibility", "hidden");

        //show wave
        $("#wave1").css("visibility", "visible");
        $("#wave2").css("visibility", "hidden");
        $("#wave3").css("visibility", "hidden");
    })
    $("#audio2").on("click",function(){
        music.play("audio2");
        //show intro
        $("#zhuqiang-intro").css("visibility", "hidden");
        $("#huaqiang-intro").css("visibility", "visible");
        $("#xianqiang-intro").css("visibility", "hidden");

        //show wave
        $("#wave1").css("visibility", "hidden");
        $("#wave2").css("visibility", "visible");
        $("#wave3").css("visibility", "hidden");
    })
    $("#audio3").on("click",function(){
        music.play("audio3");
        //show intro
        $("#zhuqiang-intro").css("visibility", "hidden");
        $("#huaqiang-intro").css("visibility", "hidden");
        $("#xianqiang-intro").css("visibility", "visible");

        //show wave
        $("#wave1").css("visibility", "hidden");
        $("#wave2").css("visibility", "hidden");
        $("#wave3").css("visibility", "visible");
    })

    $("#yan-musicsample").on("click",function(){
        music.play("audio4");
        //$("#yan-musicsample").css("background-image", "url(&quot;../images/yanmusicpause.png&quot;)")
    })

    //
    function  musicController() {
        //Stop the music when click the button again
        function stop(audio) {
            audio.currentTime = 0;
            audio.pause();
        }

        var audio1 = document.createElement("audio");
        audio1.src="./assets/music/operaclip_zhuqiang.mp3";

        var audio2 = document.createElement("audio");
        audio2.src="./assets/music/operaclip_huaqiang.mp3";

        var audio3 = document.createElement("audio");
        audio3.src="./assets/music/operaclip_xianqiang.mp3";

        var audio4 = document.createElement("audio");
        audio4.src="./assets/music/yanfengyingxuanduan.mp3";

        return {
            play:function(audio) {
                switch (audio) {
                    case "audio1":{
                        audio1.paused?audio1.play():stop(audio1);
                        audio2.pause();
                        audio3.pause();
                        audio4.pause();
                        break;
                    }
                    case "audio2":{
                        audio1.pause();
                        audio2.paused?audio2.play():stop(audio2);
                        audio3.pause();
                        audio4.pause();
                        break;
                    }

                    case "audio3":{
                        audio1.pause();
                        audio2.pause();
                        audio3.paused?audio3.play():stop(audio3);
                        audio4.pause();
                        break;
                    }

                    case "audio4":{
                        audio1.pause();
                        audio2.pause();
                        audio3.pause();
                        audio4.paused?audio4.play():stop(audio4)
                        break;
                    }


                    default:
                        break;
                }
            }
        }

    }

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
});