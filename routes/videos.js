var sequence = require("../sequence/sequence"),
    _ = require("underscore")

exports.list = function(req, res) {
    //move this to a class
    var id = req.params.id,
        video = "vid" + id + ".mp4",
        url = "http://192.168.1.3:3003/media/" + video,
        videoSequence = _.find(sequence, function(seq){ return seq.id == id})

    res.render('show', {
        title: 'Show Video' + id,
        videoUrl: url,
        transitions: JSON.stringify(videoSequence.transitions)
    });
};
