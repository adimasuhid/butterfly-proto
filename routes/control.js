var sequence = require("../sequence/sequence"),
    _ = require("underscore"),
    config = require("../config/config.js")

function getUrl(name) {
    return "http://" + config.ip + ":3003/media/" + name
}

exports.list = function(req, res) {
    var id = "main",
        url = getUrl("main.mp4"),
        videoSequence = _.find(sequence, function(seq){ return seq.id == id})

    res.render('control', {
        title: "Main Video",
        videoUrl: url,
        transitions: JSON.stringify(videoSequence.transitions)
    });
};
