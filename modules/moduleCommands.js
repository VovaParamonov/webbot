const cheerio = require("cheerio");
const { createRequest } = require("./moduleRequests");
const { serverSay, serverErr } = require("./moduleFunctions");
const fs = require("fs");


module.exports.commands = {
    "OmGTU Information" : function omgtuInformation() {
        createRequest("https://omgtu.ru/", (body) => {
            const $ = cheerio.load(body);

            serverSay(`New information from site: ${$("#menu_banner2").text()}`);
        })
    },
    "furniture post still": function furnitureStill() {
        createRequest("https://rumebel.ru/poleznie-soveti/sekrety-dizaynerov-kak-pravilno-zakazat-kukhnyu-/", (body) => {
            const $ = cheerio.load(body);

            const result =$(".content.text-content").html();

            serverSay(`Body of post: ${result}`);
            fs.writeFileSync('./data/furniturePost.txt', JSON.stringify(result, null, 4));
        })
    },
    "loadFromData": function () {
        fs.readFile("./data/furniturePost.txt", 'utf8', (err, data) => {
            if (err) return serverErr("file is not found");

            console.log(JSON.parse(data));
        })
    }
};