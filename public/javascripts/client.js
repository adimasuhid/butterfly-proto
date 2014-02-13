$(function(){
    var socket = io.connect(),
        player = videojs("video");

    socket.on('play', function(){
        player.play();
    });
});
