$(function(){
    var socket = io.connect(),
        player = videojs("video");

    socket.on('play', function(){
        player.play();
    });

    socket.on('move', function(data){
        //move functions to scene model in backbone
        var moveTime = window.transitions[data.scene],
            moveTimeInSec = moveTime / 1000;

        player.currentTime(moveTimeInSec);
    });
});
