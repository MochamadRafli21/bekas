import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./src/trpc";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.get("/hello", (c) => c.json({ msg: "Hello world" }));
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  }),
  cors({ origin: "*" }),
);
export default app;
