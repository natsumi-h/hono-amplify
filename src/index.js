"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_server_1 = require("@hono/node-server");
var hono_1 = require("hono");
var app = new hono_1.Hono();
app.get("/", function (c) {
    return c.text("Hello Hono!");
});
app.post("/", function (c) {
    var body = c.body;
    return c.json(body);
});
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: 3000,
}, function (info) {
    console.log("Server is running on http://localhost:".concat(info.port));
});
