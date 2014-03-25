$(function(){
    var socket = io.connect(),
        player = videojs("video");

    player.on("ended", function(){
        if (window.currentTransition = "initial") {
            $("#buttons").appendTo("#video");
            $("#buttons").show();
        }
    });

    socket.on('play', function(){
        player.play();
    });

    socket.on('move', function(data){
        //move functions to scene model in backbone
        //var moveTime = window.transitions[data.scene],
            //moveTimeInSec = moveTime / 1000;

        var src = window.transitions[data.scene];
        window.currentTransition = data.scene;

        player.src({ type: "video/mp4",  src: src });
        player.load();
        player.ready(function(){
            player.play();
        });

        //player.currentTime(moveTimeInSec);
    });

    socket.on('pause', function(){
        player.pause();
    });
});
