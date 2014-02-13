exports.list = function(req, res) {
    //move this to a class
    var id = req.params.id,
        video = "vid" + id + ".mp4",
        url = "http://192.168.1.3:3003/media/" + video

    res.render('show', {
        title: 'Show Video' + id,
        videoUrl: url
    });
};
