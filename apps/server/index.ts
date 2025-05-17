import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./src/trpc";
import { Hono } from "hono";

const app = new Hono();

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  }),
);
export default app;
