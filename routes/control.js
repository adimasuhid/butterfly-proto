var sequence = require("../sequence/sequence"),
    _ = require("underscore")

exports.list = function(req, res) {
    var id = "main",
        video = id+".mp4",
        url = "http://192.168.1.3:3003/media/" + video,
        videoSequence = _.find(sequence, function(seq){ return seq.id == id})

    res.render('control', {
        title: "Main Video",
        videoUrl: url,
        transitions: JSON.stringify(videoSequence.transitions)
    });
};
