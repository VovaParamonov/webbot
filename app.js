const express = require("express");
const config = require("config");


//----my modules-----
const { serverSay, serverCommandsList } = require("./modules/moduleFunctions");
const commands = require("./modules/moduleCommands");
require("./modules/moduleReadline");

const app = express();
const PORT = config.get("port") || 5000;

app.listen(PORT, () => {
    serverSay(`---------App has been started ont ${PORT}...-------------`)
    serverCommandsList();
});
