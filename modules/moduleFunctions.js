const clc = require('cli-color');

module.exports.serverSay = function serverSay(text) {
    console.log(`[SERVER]: ${text}`);
};

module.exports.serverErr = function serverErr(text) {
    console.log(clc.red(`[SERVER ERROR]: ${text}`))
};

module.exports.serverCommandsList = function serverCommandsList (commands) {
    let i = 1;
    Object.keys(commands).forEach(commandName => {console.log(`${i}.${commandName}`); i++;});
};