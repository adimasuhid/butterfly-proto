var sequence = require("../sequence/sequence"),
    _ = require("underscore"),
    config = require("../config/config.js")

exports.list = function(req, res) {
    var id = "main",
        video = id+".mp4",
        url = "http://" + config.ip + ":3003/media/" + video,
        videoSequence = _.find(sequence, function(seq){ return seq.id == id})

    res.render('control', {
        title: "Main Video",
        videoUrl: url,
        transitions: JSON.stringify(videoSequence.transitions)
    });
};
