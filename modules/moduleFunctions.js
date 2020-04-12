const clc = require('cli-color');
const { commands } = require("./moduleCommands");

module.exports.serverSay = function serverSay(text) {
    console.log(`[SERVER]: ${text}`);
};

module.exports.serverErr = function serverErr(text) {
    console.log(clc.red(`[SERVER ERROR]: ${text}`))
};

module.exports.serverCommandsList = function serverCommandsList () {
    Object.keys(commands).forEach(commandName => console.log(commandName));
};