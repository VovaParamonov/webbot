const cheerio = require("cheerio");
const { createRequest } = require("./moduleRequests");
const { serverSay } = require("./moduleFunctions");


module.exports.commands = {
    "omgtuInformation" : function omgtuInformation() {
        createRequest("https://omgtu.ru/", (body, status) => {
            const $ = cheerio.load(body);

            serverSay(`New information from site: ${$("#menu_banner2").text()}`);
        })
    }
};