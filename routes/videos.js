var sequence = require("../sequence/sequence"),
    _ = require("underscore"),
    config = require("../config/config.js")

function getUrl(name) {
    return "http://" + config.ip + ":3003/media/" + name
}

exports.list = function(req, res) {
    //move this to a class
    var id = req.params.id,
        url = getUrl("vid"+id+".mp4"),
        videoSequence = _.find(sequence, function(seq){ return seq.id == id})

    res.render('show', {
        title: 'Show Video' + id,
        videoUrl: url,
        transitions: JSON.stringify(videoSequence.transitions)
    });
};
