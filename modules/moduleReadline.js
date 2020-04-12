const readLine = require('readline');
const { serverSay, serverErr } = require("./moduleFunctions");
const { commands } = require("./moduleCommands");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', input => {
    // if (commands[input]) return commands[input]();

    switch (input) {
        case "cls":
            console.clear();
            break;
        case "test":
            serverSay("test has been completed");
            break;
        case "omgtu information":
            commands.omgtuInformation();
            break;
        default:
            serverErr("unknown command");
    }
});