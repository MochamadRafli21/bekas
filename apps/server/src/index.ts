import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./trpc/index.ts";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono().basePath("/api");

app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  }),
);

app.get("/", (c) => {
  return c.json({ message: "hello" });
});

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  }),
);

export default app;
