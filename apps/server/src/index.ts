import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./trpc";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { handle } from "hono/vercel";

const app = new Hono();

app.get("/hello", (c) => c.json({ msg: "Hello world" }));
app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  }),
  cors({ origin: "*" }),
);

const handler = handle(app);

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
export const PUT = handler;
export const OPTIONS = handler;
