$(function(){
    var socket = io.connect();

    function play(){
        console.log("playing..");
        socket.emit('play');
    }

    function moveScene(e){
        var val = $(e.target).attr("data-val");
        console.log("movings scene to "+ val + "...");
        socket.emit('move', {scene: val});
    }

    $("#play").on("click",play);
    $(".scene").on("click", moveScene);
});
