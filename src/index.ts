import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  console.log("Hello Hono!!");

  return c.text("Hello Hono!!");
});

app.post("/", (c) => {
  const body = c.body;
  console.log("body", body);

  return c.json(body);
});

// serve(
//   {
//     fetch: app.fetch,
//     port: 3000,
//   },
//   (info) => {
//     console.log(`Server is running on http://localhost:${info.port}`);
//   }
// );

serve(app);
