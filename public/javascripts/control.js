$(function(){
    var socket = io.connect();

    function play(){
        console.log("playing..");
        socket.emit('play');
    }

    function moveScene(e){
        var val = $(e.target).attr("data-val");
        $("#buttons").hide();
        console.log("movings scene to "+ val + "...");
        socket.emit('move', {scene: val});
    }

    function pause(){
        console.log("pausing...");
        socket.emit("pause");
    }

    $("#play").on("click",play);
    $(".scene").on("click", moveScene);
    $("#pause").on("click", pause)
});
