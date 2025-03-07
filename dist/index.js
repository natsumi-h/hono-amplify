"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
const app = new hono_1.Hono();
app.get("/", (c) => {
    return c.text("Hello Hono!");
});
app.get("/random", (c) => {
    return c.json({ random: Math.random() });
});
let count = 0;
app.get("/count", (c) => {
    return c.json({ count: count++ });
});
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: 3000,
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
