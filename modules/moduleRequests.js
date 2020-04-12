const needle = require("needle");
const { serverSay, serverErr } = require("./moduleFunctions");

module.exports.createRequest = function createRequest (URL, callback) {
    serverSay("request has been started, Wait...");
    needle.get(URL, (err, res) => {
        if (err) return serverErr(`Error of request to ${URL}`);

        if(callback) {
            callback(res.body, res.statusCode);
        } else {
            serverSay("status: " + res.statusCode);
        }
    });
};