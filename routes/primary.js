var sequence = require("../sequence/sequence"),
    _ = require("underscore"),
    config = require("../config/config.js")

exports.list = function(req, res) {
    res.render('primary', {
        title: "Controller"
    });
};
