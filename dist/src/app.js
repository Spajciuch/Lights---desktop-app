"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_global_key_listener_1 = require("node-global-key-listener");
const communication_1 = require("./communication");
const config = require("../config.json");
const gkl = new node_global_key_listener_1.GlobalKeyboardListener();
const keyFunctions = {
    "F15": "up",
    "F16": "all",
    "F17": "down"
};
gkl.addListener(function (e, down) {
    if (config.debug)
        console.log(`${e.name} ${e.state == "DOWN" ? "DOWN" : "UP  "} [${e.rawKey._nameRaw}]`);
});
gkl.addListener(function (e, down) {
    if (e.state == "DOWN" && Object.keys(keyFunctions).includes(e.name)) {
        (0, communication_1.light)(keyFunctions[(e.name.toString())]);
    }
});
//# sourceMappingURL=app.js.map