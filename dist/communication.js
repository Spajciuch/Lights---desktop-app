"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.light = void 0;
const http = require("http");
function light(name) {
    var options = {
        host: "192.168.0.100",
        port: 3000,
        path: "/"
    };
    options.path = `/${name.toLowerCase()}`;
    const req = http.get(options);
    req.on("error", function (err) {
        console.log("[error] Lights server error");
        console.log(err.message);
    });
}
exports.light = light;
//# sourceMappingURL=communication.js.map