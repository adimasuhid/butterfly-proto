exports.list = function(req, res) {
    var video = "main.mp4",
        url = "http://192.168.1.3:3003/media/" + video

    res.render('control', {
        title: "Main Video",
        videoUrl: url
    });
};
