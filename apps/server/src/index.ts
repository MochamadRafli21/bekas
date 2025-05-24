import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./trpc/index.js";
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  }),
);

export default app;
