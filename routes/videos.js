var sequence = require("../sequence/sequence"),
    _ = require("underscore"),
    config = require("../config/config.js")

exports.list = function(req, res) {
    //move this to a class
    var id = req.params.id,
        video = "vid" + id + ".mp4",
        url = "http://" + config.ip + ":3003/media/" + video,
        videoSequence = _.find(sequence, function(seq){ return seq.id == id})

    res.render('show', {
        title: 'Show Video' + id,
        videoUrl: url,
        transitions: JSON.stringify(videoSequence.transitions)
    });
};
