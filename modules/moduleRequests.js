const clc = require('cli-color');
const needle = require("needle");
const { serverSay, serverErr } = require("./moduleFunctions");

module.exports.createRequest = function createRequest (URL, callback) {
    console.log(clc.blue("---------------------request has been started, Wait...---------------------"));
    needle.get(URL, async (err, res) => {
        if (err) return serverErr(`Error of request to ${URL}`);

        if(callback) {
            callback(res.body);
            console.log(clc.blue("----------------------------End of request-------------------------------"));
        } else {
            serverSay("status: " + res.statusCode);
        }
    });
};