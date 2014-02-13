$(function(){
    var socket = io.connect()

    function play(){
        console.log("triggering");
        socket.emit('play');
    }

    $("#play").on("click",play);
});
