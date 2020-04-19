const readLine = require('readline');
const { serverSay, serverErr } = require("./moduleFunctions");
const { commands } = require("./moduleCommands");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    if (commands[input]) return commands[input]();
    if (!isNaN(parseInt(input, 10))) {
        if (commands[Object.keys(commands)[parseInt(input, 10) - 1]])
            return commands[Object.keys(commands)[parseInt(input, 10) - 1]]();
    }

    switch (input) {
        case "cls":
            console.clear();
            break;
        case "test":
            serverSay("test has been completed");
            break;
        default:
            serverErr("unknown command");
    }
});